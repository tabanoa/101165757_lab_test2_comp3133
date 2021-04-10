import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  isMission = false
  currentMission: any
  missions:any
  constructor( private spacexApiService: SpacexapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spacexApiService.sendGetRequest().subscribe(data=>{
      this.missions = data
    })
    this.route.queryParams.subscribe(params => {
      this.currentMission = params['currentMission']
    })
  }

  public onClick(mission: any){
    if(!this.isMission){
      this.isMission = true
    }
    else{
      this.isMission = false
    }
    this.currentMission = mission
  }

}
