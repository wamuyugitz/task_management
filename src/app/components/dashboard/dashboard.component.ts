import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: any[] = [];
  statusOptions = ['True', 'False'];
  selectedTask: any = null; //Store the selected task for modal display

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.getAllTasks();
  }

  onUpdateClick() {
    this.router.navigate(['/edittask']);
  }

  getAllTasks() {
    this.taskService.getAllTask().subscribe(
      (data) => {
        this.tasks = data;
        console.log('Tasks retrieved:', data);
      },
      (error) => {
        console.error('Failed to fetch tasks:', error);
      }
    );
  }

  //Method to set selected task when user clicks "View Task"
  openTaskDetails(task: any) {
    if (task) {
      this.selectedTask = task;
    }
  }
}
