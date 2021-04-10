import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit {

  @Input() mission: any;

  onButtonClick(): void{
    this.router.navigate(['/missionlist'])
  }

  constructor(private spacexApiService: SpacexapiService, private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

}
