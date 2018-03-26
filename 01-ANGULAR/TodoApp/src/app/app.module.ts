import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TaskStorageService} from './services/storage/task-storage.service';
import { AddTaskComponent } from './add-task/add-task.component';
import {FormsModule} from '@angular/forms';
import { TaskFilterPipe } from './pipes/task-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TaskStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
