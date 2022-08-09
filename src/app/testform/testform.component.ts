import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-testform',
  templateUrl: './testform.component.html',
  styleUrls: ['./testform.component.scss']
})
export class TestformComponent implements OnInit {
  @Input() name !: string;
  @Input() password : string = "password";
  @Output() newNoteEvent = new EventEmitter<string>();

  addNewNote(value : string): void{
    this.newNoteEvent.emit(value);
  }

  count = -2;

  constructor() {
    alert("Component create!");
  }

  ngDoCheck() {
    this.count++;
    console.log("Changed!");
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    alert("Component destroy ...");
    alert("Bye!");
  }

  onSubmit(){
    alert(this.name + "'s new password is: " + this.password);
  }

}
