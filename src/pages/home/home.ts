import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';
import { ContentPage } from '../content/content';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  finally(): any {
  }
  error(arg0: any): any {
  }
  success(data: any): any {
    this.service.people = data.results;
  }

  ngOnInit(): void {
    const petition = this.service.doGetRequest('https://swapi.co/api/people/?format=json');
    petition.subscribe((data)=>this.success(data), (error)=>this.error(error), this.finally())
  }

  name: string;
  email: string;
  account: number;
  users: User[];
  character: any;

  constructor(public navCtrl: NavController, public service: RequestProvider) {
    this.users = new Array<User>();
  }

  addUser() {
    const myuser = new User (this.name, this.email, this.account);
    this.users.push(myuser);
  }

  goto(character: any) {
    this.character = character;
    this.service.selectedCharacter = character;
    this.navCtrl.push(ContentPage, {character: character});
  }

}

