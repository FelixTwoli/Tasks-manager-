import { InterfaceService } from './../../services/interface.service';
import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  ngOnInit(): void {

  }

  constructor( private interfaceService: InterfaceService ) {
    this.subscription = this.interfaceService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  toggleAddTask() {
    this.interfaceService.toggleAddTask();
  }

}
