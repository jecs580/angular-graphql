import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/shared/interfaces/data.interface';

@Component({
  selector: 'app-charactes-card',
  templateUrl: './charactes-card.component.html',
  styleUrls: ['./charactes-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactesCardComponent  {

  constructor() { }
  @Input() character: Character;
  getIcon(isFavorite:boolean):string{
    return isFavorite? 'heart-solid.svg':'heart.svg'
  }
  toggleFavorite(){

  }
}
