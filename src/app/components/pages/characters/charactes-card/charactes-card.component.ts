import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/shared/interfaces/data.interface';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-charactes-card',
  templateUrl: './charactes-card.component.html',
  styleUrls: ['./charactes-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactesCardComponent  {

  constructor(private localStorageService:LocalStorageService) { }
  @Input() character: Character;

  getIcon():string{
    return this.character.isFavorite? 'heart-solid.svg':'heart.svg'
  }
  toggleFavorite(){
    const isFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite =!isFavorite;
    this.localStorageService.addOrRemoveFavorite(this.character);
  }
}
