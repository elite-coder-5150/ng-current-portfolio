import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TestComponentComponent } from './test-component/test-component.component';



@NgModule({
  declarations: [
    TaskManagerComponent,
    TestComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskManagerModule { }
