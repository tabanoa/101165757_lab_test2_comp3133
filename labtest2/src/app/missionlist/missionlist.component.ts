import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  moreDetails = false
  currentMission: any
  missions:any

  constructor( private spacexApiService: SpacexapiService) { }

  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data=>{
      this.missions = data
    })
  }

  public onClick(mission: any){
    if(!this.moreDetails){
      this.moreDetails = true
    }
    else{
      this.moreDetails = false
    }
    this.currentMission = mission
  }

}
