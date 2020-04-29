import { Component, OnInit } from '@angular/core';
import { LocalService } from '../services/local.service';
import { Local } from '../models/local';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  locais: Local[];
  
  constructor(private localService: LocalService) {}

  ngOnInit(): void {
  }

}
