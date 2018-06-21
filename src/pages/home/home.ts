import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/user';
import { ContentPage } from '../content/content';
import { RequestProvider } from '../../providers/request/request';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  finally(): any {
  }
  error(arg0: any): any {
  }
  success(data: any): any {
    this.service.people.concat(data.results);
    this.service.next = data.next;
    this.myItems = data.results;
  }

  ngOnInit(): void {
    const petition = this.service.doGetRequest('https://swapi.co/api/people/?format=json');
    petition.subscribe((data) => this.success(data), (error) => this.error(error), this.finally())
  }

  name: string;
  email: string;
  account: number;
  users: User[];
  myItems

  constructor(public navCtrl: NavController, public service: RequestProvider) {
    this.users = new Array<User>();
  }

  addUser() {
    const myuser = new User(this.name, this.email, this.account);
    this.users.push(myuser);
  }

  goto(myCharacter: any) {
    this.service.selectedCharacter = myCharacter;
    this.navCtrl.push(ContentPage, { character: myCharacter });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.myItems = this.service.people;

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.myItems = this.service.people.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  doInfinite($event) {
    console.log('Entra en doInifinite')
    const petition = this.service.doGetRequest(this.service.next);
    petition.subscribe((data) => this.success(data), (error) => this.error(error), this.finally())

  }

}

