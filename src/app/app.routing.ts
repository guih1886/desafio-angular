import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InsertStudentComponent } from "./components/insert-student/insert-student.component";
import { ShowStudentsComponent } from "./components/show-students/show-students.component";

const routes: Routes = [
    { path: '', component: InsertStudentComponent },
    { path: 'insert-student', component: InsertStudentComponent },
    { path: 'show-students', component: ShowStudentsComponent },
    { path: '**', redirectTo: '', component: ShowStudentsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }