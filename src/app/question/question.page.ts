import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  //Quiz =[];

  Cat_id;
  Ques_name;
  Questions = [];

  constructor(public quizService:QuizService) { 
    
    this.Cat_id = this.quizService.Return_ID();
    var data = firebase.database().ref("Questions")

    for (var i = 1; i <= 5; i ++){
      var quiz = firebase.database().ref().child('Questions/'+ this.Cat_id);
      quiz.once("value", snap => {
        this.Ques_name = snap.child("Qustion_name").val();
        this.Questions.push({
          Qustion_name : this.Ques_name
        })
        console.log(" List of Questions " + this.Ques_name);
      })
    }
  
  }


  ngOnInit() {
  }

}
