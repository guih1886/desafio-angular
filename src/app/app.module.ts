import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InsertStudentComponent } from './components/insert-student/insert-student.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InsertStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
