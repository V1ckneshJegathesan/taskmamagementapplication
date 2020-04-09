import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskviewerComponent } from './components/taskviewer/taskviewer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/authentication.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent

  },
  {
    path: 'taskviewer/view/:id',
    component: ViewTaskComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'taskviewer',
    component: TaskviewerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
