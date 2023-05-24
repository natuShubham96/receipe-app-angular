import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe-service.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipeItems: Receipe[];

  constructor(private receipeService: ReceipeService) {
    this.receipeItems = this.receipeService.getReceipes();
  }

  ngOnInit(): void {
    this.receipeItems = this.receipeService.getReceipes();
  }

  onReceipeClick(receipe: Receipe) {
    this.receipeService.receipeSelected.emit(receipe);
  } 
}
