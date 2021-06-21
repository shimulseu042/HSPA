import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Properties: Array<any> = [
    {
      Id: 1,
      Name: "Birla House",
      Type: "House",
      Price: 12000
    },
    {
      Id: 2,
      Name: "Erose Villa",
      Type: "Villa",
      Price: 13000
    },
    {
      Id: 3,
      Name: "Mark Hill",
      Type: "Flat",
      Price: 14000
    },
    {
      Id: 4,
      Name: "Gun Hill",
      Type: "Duplex",
      Price: 16000
    },
    {
      Id: 5,
      Name: "Macro Home",
      Type: "House",
      Price: 18000
    },
    {
      Id: 6,
      Name: "Pearl White House",
      Type: "White House",
      Price: 18000
    }

  ]
}
