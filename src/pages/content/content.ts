import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestProvider } from '../../providers/request/request';

/**
 * Generated class for the ContentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content',
  templateUrl: 'content.html',
})
export class ContentPage {

  public character: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RequestProvider) {
    this.character = this.navParams.get('character');
  }

  ionViewDidLoad() {
  }

  back() {
    this.navCtrl.pop();
  }

}
