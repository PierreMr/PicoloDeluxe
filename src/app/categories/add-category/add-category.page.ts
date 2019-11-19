import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  category: any;
  name: string;
  icon = 'globe';

  constructor(
    private navCtrl: NavController,
    private categoriesSrvc: CategoriesService
  ) { }

  ngOnInit() {
  }

  nav(url: string) {
    this.navCtrl.navigateForward('/' + url);
  }

  addCategory() {
    this.category = {
      name: this.name,
      icon: this.icon,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    firebase.firestore().collection('categories').add(this.category);
    this.categoriesSrvc.categories = [...this.categoriesSrvc.categories, this.category];
    this.nav('home');
  }
}
