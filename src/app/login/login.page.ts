import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email
  password
  constructor(public quizService:QuizService) { }

  ngOnInit() {
  }
 logIn(){
   this.quizService.login(this.email, this.password)
 }
}
 