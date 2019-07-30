import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  cName
  c_id
  private Cat =[];
categories =[];

  constructor(public quizService:QuizService) { 

    var Cat = firebase.database().ref().child('Categories')
    Cat.on("child_added",snap => {
      this.cName=snap.child("Cat_name").val();
      this.c_id=snap.child("Cat_id").val();

      //this.cid=snap.child("key").val();
      let key =snap.key
      this.Cat.push({
      Cat_name:this.cName,
      Cat_id:this.c_id,

      })
      //console.log("Category ID " + this.Cat_name)

    }) 
    //this.categories = this.quizService.getData();

  }


  setID(list){

    this.quizService.getID(list);
  }


  ngOnInit() {
  }



}
