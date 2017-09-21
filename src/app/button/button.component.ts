import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

userScore: number = 0;
userAnswer: string;
@Input() questionInfo;
@Output() checkedAnswer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  checkAnswer() {
    if(this.userAnswer == this.questionInfo.answer) {
      this.userScore += this.questionInfo.value;
    }
    this.userAnswer = "";
    this.checkedAnswer.emit("You submitted an answer!");
  }

}
