import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  title: string = '';
  statusOptions = ['true', 'false'];
  constructor() {}

  onAddTask(){
    alert(this.title);
  }
}
