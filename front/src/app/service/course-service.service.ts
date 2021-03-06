import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course-model';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  baseUrl: string = 'http://localhost:3100/api/courses'

  constructor(
    private http: HttpClient
  ){}

  retriveAll(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl);
  }

  retrieveById(id:number): Observable<Course>{
    const uri = `${this.baseUrl}/${id}`;
    return this.http.get<Course>(uri)
  }

  save(course:Course): Observable<Course>{
    if(course.id){
      const uri = `${this.baseUrl}/${course.id}`
      return this.http.put<Course>(uri, course)
    } else {
      const uri = `${this.baseUrl}`
      return this.http.post<Course>(uri, course)
    }
  }

  deleteById(id: number): Observable<any>{
    const uri = `${this.baseUrl}/${id}`
    return this.http.delete<any>(uri)
  }

}
  // let COURSES: Course[] = [
  //   {
  //       id: 1,
  //       name: 'Angular: CLI',
  //       releaseDate: 'November 2, 2019',
  //       description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
  //       duration: 120,
  //       code: 'XLF-1212',
  //       rating: 3,
  //       price: 12.99,
  //       imgUrl: '/assets/img/cli.png',
  //   },
  //   {
  //       id: 2,
  //       name: 'Angular: Forms',
  //       releaseDate: 'November 4, 2019',
  //       description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
  //       duration: 80,
  //       code: 'DWQ-3412',
  //       rating: 3.5,
  //       price: 24.99,
  //       imgUrl: '/assets/img/forms.png',
  //   },
  //   {
  //       id: 3,
  //       name: 'Angular: HTTP',
  //       releaseDate: 'November 8, 2019',
  //       description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
  //       duration: 80,
  //       code: 'QPL-0913',
  //       rating: 4.0,
  //       price: 36.99,
  //       imgUrl: '/assets/img/http.png',
  //   },
  //   {
  //       id: 4,
  //       name: 'Angular: Router',
  //       releaseDate: 'November 16, 2019',
  //       description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
  //       duration: 80,
  //       code: 'OHP-1095',
  //       rating: 4.5,
  //       price: 46.99,
  //       imgUrl: '/assets/img/router.png',
  //   },
  //   {
  //       id: 5,
  //       name: 'Angular: Animations',
  //       releaseDate: 'November 25, 2019',
  //       description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
  //       duration: 80,
  //       code: 'PWY-9381',
  //       rating: 5,
  //       price: 56.99,
  //       imgUrl: '/assets/img/animations.png',
  //   }

// ];
