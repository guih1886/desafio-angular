import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControl, FormsModule } from '@angular/forms';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertStudentComponent,
    NavbarComponent,
    ShowStudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
