import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReplacePipe } from '../pipe/replace.pipe';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { StarComponent } from './star/star.component';


@NgModule({
  declarations: [
    CoursesListComponent,
    CourseInfoComponent,
    StarComponent,
    ReplacePipe
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule
  ],
  exports:[CoursesRoutingModule]
})
export class CoursesModule { }
