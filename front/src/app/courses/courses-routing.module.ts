import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseInfoComponent } from './course-info/course-info.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routesCourses: Routes = [
  {path:'courses', component:CoursesListComponent},
  {path:'courses/info/:id', component:CourseInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesCourses)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
