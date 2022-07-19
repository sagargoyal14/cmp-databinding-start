import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName  = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{name:string, content:string}>();
  @Output() blueprintCreated = new EventEmitter<{name:string, content:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  clearFields() {
    this.newServerName  = '';
    this.newServerContent = '';
  }

  onAddServer() {
    this.serverCreated.emit({name:this.newServerName , content:this.newServerContent})
    this.clearFields();
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({name:this.newServerName , content:this.newServerContent})
    this.clearFields();
  }

}
