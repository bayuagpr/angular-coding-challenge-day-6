import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items.service';
import { User } from './item/user.model'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: User[] = [];
  loaded: boolean;
  constructor(
    private itemsService: ItemsService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
  //  place the get users from the service here to populate the items
  }

}