import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course-model';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  // selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] = [];

  filterCourses: Course[] = [];

  filterBy!: string;

  constructor(
    private courseService: CourseServiceService) { }

  ngOnInit( ): void {
    this.retriveAll();
  }
  // opção 1 de chamada
  retriveAll(){
      this.courseService.retriveAll().subscribe(resp => {this.courses = resp
      this.filterCourses = resp});
  }

  // opção 2 d echamada
  // retriveAll(){
  //   this.courseService.retriveAll().subscribe({
  //     next: courses =>{
  //       this.courses = courses;
  //       this.filterCourses = this.courses;
  //     },
  //     error: err => console.log('Erro', err)
  //   });
  // }

  deleteById(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => { console.log("Deletado OK");
      this.retriveAll();
      },
      error: err => console.log("Erro",err)
    })
  }


  set filter(value: string){
      this.filterBy = value;

      this.filterCourses = this.courses.filter((course: Course)=> course.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this.filterBy;
  }

}
