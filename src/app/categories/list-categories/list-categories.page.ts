import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.page.html',
  styleUrls: ['./list-categories.page.scss'],
})
export class ListCategoriesPage implements OnInit {
  categories = [];

  constructor(
    private categoriesSrvc: CategoriesService
  ) {
    this.getCategories();
  }

  ngOnInit() {
  }

  getCategories() {
    firebase.firestore().collection('categories')
    .orderBy('createdAt', 'desc')
    .get()
    .then(categories => {
      categories.forEach(category => {
        this.categories.push(category);
      });
    });
  }

}
