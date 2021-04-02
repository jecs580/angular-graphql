import { Character } from './../interfaces/data.interface';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";

const MY_FAVORITES = 'myFavorites';
@Injectable({
    providedIn:'root'
})
export class  LocalStorageService{
    private charactersFavSubject =  new BehaviorSubject<Character[]>(null);
    charactersFav$ = this.charactersFavSubject.asObservable();
    constructor(){
        this.initialStorage();
    }
    getFavoriteCharacters(){
        try {
            const characters = JSON.parse(localStorage.getItem(MY_FAVORITES));
            this.charactersFavSubject.next(characters);
            return characters;
        } catch (error) {
            console.log('Error>>>',error);
            
        }
    }
    clearStorage(){
        try {
            localStorage.clear();
        } catch (error) {
            console.log('Error',error);
            
        }
    }
    addOrRemoveFavorite(character:Character){
        const {id} = character;
        const currentsFav =  this.getFavoriteCharacters();
        const found = !!currentsFav.find((fav:Character)=>fav.id === id); // Los '!!' sirven para cambiar el valor de salida a un booleano. En caso de q no se encuetre, devuelva null o undefine, el valor a retornar sera false, y por otro lado sera true
        found? this.removeFromFavorite(id):this.addToFavorite(character)
    }
    private addToFavorite(character:Character){
        try {
            const currentsFav =  this.getFavoriteCharacters();
            localStorage.setItem(MY_FAVORITES,JSON.stringify([... currentsFav, character]));
            this.charactersFavSubject.next([... currentsFav,character]);
        } catch (error) {
            console.log('Error al guardar en LocalStorage',error);
            
        }
    }
    private removeFromFavorite(id:number){
        try {
            const currentsFav =  this.getFavoriteCharacters();
            const characters =  currentsFav.filter(item =>item.id != id);
            localStorage.setItem(MY_FAVORITES, JSON.stringify([...characters]));
            this.charactersFavSubject.next([...characters]);
        } catch (error) {
            console.log('Error al eliminar en LocalStorage',error);
            
        }
    }
    private initialStorage(){
        const currents= JSON.parse(localStorage.getItem(MY_FAVORITES));
        if(!currents){
            localStorage.setItem(MY_FAVORITES,JSON.stringify([]));
        }
        this.getFavoriteCharacters();
    }
}