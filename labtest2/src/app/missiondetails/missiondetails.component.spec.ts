import { Component, Input, OnInit } from '@angular/core';
//import { runInThisContext } from 'node:vm';
import { SpacexapiService } from '../network/spacexapi.service';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission: any
  constructor( private spacexApiService: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data=>{
      this.mission = data

    })
  }

}
