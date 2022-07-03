import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';
import { map, mergeMap } from 'rxjs/operators';
import { User } from './user.model'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: User;
  loaded: boolean;
  constructor(
    private itemsService: ItemsService,
    public route: ActivatedRoute) {
      this.loaded = false;
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void {
      //  take the id from route param and place the get user by id from the service here to populate the item
  }

}