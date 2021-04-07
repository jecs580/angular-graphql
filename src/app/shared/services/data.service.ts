import { LocalStorageService } from '@app/shared/services/localStorage.service';
import { Episode, Character, DataResponse, ApiResponse } from './../interfaces/data.interface';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular'
import { BehaviorSubject } from 'rxjs';
import { pluck, take, tap, withLatestFrom } from 'rxjs/operators'
const QUERY= gql`
 {
   episodes {
     results {
      name
      episode
     }
   }
  characters {
    results {
      id
      name
      status
      species
      gender
      image
    }
  }
 }
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {
private episodesSubject = new BehaviorSubject<Episode[]>(null);
episodes$ = this.episodesSubject.asObservable();

private charactersSubject = new BehaviorSubject<Character[]>(null);
characters$ = this.charactersSubject.asObservable();

  constructor(private apollo:Apollo, private localStorageService:LocalStorageService) {
    this.getDataAPI();
   }
  
  getCharactersByPage(pageNum:number){
    const QUERY_BY_PAGE= gql`
    {
     characters(page: ${pageNum}) {
       results {
         id
         name
         status
         species
         gender
         image
       }
     }
    }
   `;
   this.apollo.watchQuery<any>({
     query:QUERY_BY_PAGE
   }).valueChanges.pipe(
    take(1),
    pluck('data','characters'), // Es como usar destructuring entrara a data y data tiene el objeto characters
    withLatestFrom(this.characters$), // Devuelve un objeto uniendo el primer observable con this.characters$
    tap(([apiResponse,characters])=>{
      // Obtiene los datos de los observables
      this.parseCharacterData([...characters, ...apiResponse.results])
    })
   ).subscribe(
     data =>console.log(data)
   )
  }

  private getDataAPI(){
    this.apollo.watchQuery<DataResponse>({
      query: QUERY
    }).valueChanges.pipe(
      take(1),
      tap(({data}) =>{
        const {characters, episodes} = data;
        this.episodesSubject.next(episodes.results);
        this.parseCharacterData(characters.results);
      })
    ).subscribe();
  }
  private parseCharacterData(characters:Character[]){
    const currentsFav = this.localStorageService.getFavoriteCharacters();
    const newData =  characters.map(character=>{
    const found = !!currentsFav.find((fav:Character)=>fav.id === character.id);
      return {...character, isFavorite:found}
    });
    this.charactersSubject.next(newData);
  }
}
