import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testAngular2';

  name = "Admin";

  notes = ['First note: Hello world!'];

  addNote(newNote: string) {
    this.notes.push(newNote);
  }

  deleteNote(){
    this.notes.pop();
  }
}
