import { Component, OnInit } from '@angular/core';

import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email
  password
  name
  age
  gender


  constructor(public quizService:QuizService) {


   }

  ngOnInit() {
  }

 register(){
   this.quizService.signUp(this.email, this.password,this.name,this.age,this.gender)
 }
 
 setGender(event){
  this.gender= event.detail.value;
}




 
}
