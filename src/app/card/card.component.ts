import {Component, Input, OnInit} from '@angular/core'
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit{

  title = "My Card Title";
  text: string = "My sample text";

  textColor: string | undefined;

  ngOnInit() {

  }

  changeTitle() {
    this.title = 'Title has been changed';
  }

  inputHandler(value: string) {
    // const value = event.target.value;
    this.title = value;
  }

  changeHandler() {
    console.log(this.title);
  }

}
