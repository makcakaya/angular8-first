import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private allowNewServers = false;
  private createServerStatus = '';

  constructor() {
    setTimeout(() => this.allowNewServers = true, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.createServerStatus = 'Server was created.';
  }

}
