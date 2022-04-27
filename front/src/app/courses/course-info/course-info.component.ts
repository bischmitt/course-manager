import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/model/course-model';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  // selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(
    private route:ActivatedRoute,
    private courseService: CourseServiceService
    ){}

  ngOnInit(): void {
     this.courseService.retrieveById(Number(this.route.snapshot.paramMap.get('id'))).subscribe({
       next: course => this.course = course,
       error: err => console.log("Erro", err)
     })
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log("Salvo", course),
      error: err => console.log("Erro", err)
    })
  }
}
