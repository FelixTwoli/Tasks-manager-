import { InterfaceService } from './../../services/interface.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor( private interfaceService: InterfaceService, private router: Router ) {
    this.subscription = this.interfaceService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  toggleAddTask() {
    this.interfaceService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
