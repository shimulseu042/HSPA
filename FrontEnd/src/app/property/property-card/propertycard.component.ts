import { Input } from "@angular/core";
import { Component } from "@angular/core";


@Component({
  selector : 'app-property-card',
  templateUrl : "propertycard.component.html",
  styleUrls: ['propertycard.component.css']
})
export class PropertyCardComponent {
  @Input() property : any
  // Property : any = {
  //   Id : 1,
  //   Name : "Birla House",
  //   Type : "House",
  //   Price : 12000
  // }
}
