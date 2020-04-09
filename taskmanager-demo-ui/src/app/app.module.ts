import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskviewerComponent } from './components/taskviewer/taskviewer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { TaskService } from './services/task.service';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ViewTaskComponent } from './components/view-task/view-task.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/authentication.service';
import { AuthGuard } from './services/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    TaskviewerComponent,
    HomepageComponent,
    ViewTaskComponent,
    CallbackComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

