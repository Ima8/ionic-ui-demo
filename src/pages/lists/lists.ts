import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {
	lists: Array<any> = [
	'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
    ] ;

    contacts = [
            'Kate Beckett',
            'Richard Castle',
            'Alexis Castle',
            'Lanie Parish',
            'Javier Esposito',
            'Kevin Ryan',
            'Martha Rodgers',
            'Roy Montgomery',
            'Jim Beckett',
            'Stana Katic',
            'Nathan Fillion',
            'Molly Quinn',
            'Tamala Jones',
            'Jon Huertas',
            'Seamus Dever',
            'Susan Sullivan'
        ];
    icons = [
             'boat',
             'body',
             'book',
             'briefcase',
             'bug',
             'bus',
             'camera',
             'cart',
             'cash',
             'clock',
             'cloud',
             'contacts',
             'film'] ;

    groupedContacts = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.groupContacts(this.contacts) ;
  }

	groupContacts(contacts){

	    let sortedContacts = contacts.sort();
	    let currentLetter = false;
	    let currentContacts = [];

	    sortedContacts.forEach((value, index) => {

	        if(value.charAt(0) != currentLetter){

	            currentLetter = value.charAt(0);

	            let newGroup = {
	                letter: currentLetter,
	                contacts: []
	            };

	            currentContacts = newGroup.contacts;
	            this.groupedContacts.push(newGroup);

	        } 

	        currentContacts.push(value);

	    });

	}
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }

  itemSelected(item:string){
  	console.log("Selected Item ",item);
  }

}
