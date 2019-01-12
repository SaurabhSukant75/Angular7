import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css'],
  providers:[DataService]
})
export class ConfigComponent implements OnInit {
ngOnInit(){}

  peoples: object;
  playerName: string;
  PeopleFilter = [];
public  image_id = [];
  configUrl = 'https://reqres.in/api/users?page=1&per_page=13';

  getId(i){
    if(this.image_id.includes(i))
    {
  //do nothing
    }
    else{
      this.image_id.push(i);
        this._DataService.publishData(this.image_id);
        console.log(this.image_id);
    }
    }

  constructor(private httpClient: HttpClient, private _DataService:DataService)
  {
    this.httpClient.get(this.configUrl).subscribe(res=>{
      this.peoples = res['data'];
    });


  }

}
