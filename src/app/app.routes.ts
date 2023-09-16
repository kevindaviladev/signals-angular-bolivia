import { Routes } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';
import { ExampleComponent } from './pages/example/example.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'example', component: ExampleComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'users', component: UsersComponent },
];
