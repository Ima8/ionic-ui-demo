import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ButtonsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html',
})
export class ButtonsPage {
  isDanger: boolean = false ;
  isOutline: boolean = true ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ButtonsPage');
  }

  switchButton(event){
  	this.isDanger = !this.isDanger ;
  	if (this.isDanger) {
  		this.isOutline = false ;
  	} else {
  		this.isOutline = true ;
  	}
  	console.log(event) ;
  }

}
