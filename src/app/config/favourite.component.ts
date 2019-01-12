import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
@Component({
  selector: 'app-favourite',
  templateUrl: 'favourite.component.html',
  styleUrls: ['favourite.component.css'],
  providers:[DataService]
})
export class FavouriteComponent implements OnInit {

  ImageId: number = 0;
  constructor(private _DataService: DataService) { }
  ngOnInit() {
    this.getImageId();
 }
  getImageId() {
    this._DataService.getData().subscribe(data => {
console.log(data);
      this.ImageId = data;
      console.log(this.ImageId);
    }, err => {
      console.log(err);
    });
  }

}
