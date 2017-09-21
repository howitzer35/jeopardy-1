import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Jeopardy';

  questionInfo;

  constructor(private jeopardyService: JeopardyService){}

  //method that uses the jeopardy service from API
  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
    .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[0];
        console.log(this.questionInfo.answer)
      }
    )
  }

  answerAlert(response: string) {
    alert(response)
  }

  //call API when component loads to get initial data
  ngOnInit(){
    this.getDataFromService()
  }
}



