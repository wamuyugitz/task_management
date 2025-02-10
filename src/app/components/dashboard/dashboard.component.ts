import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: any;
  statusOptions = ['Incomplete', 'Complete', 'In Progress'];

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
}
