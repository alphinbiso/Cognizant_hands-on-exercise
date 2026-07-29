import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, tap, retry, throwError, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';
  private cachedCourses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 2, name: 'Algorithms', code: 'CS102', credits: 4, gradeStatus: 'pending', enrolled: false },
    { id: 3, name: 'Database Systems', code: 'CS201', credits: 3, gradeStatus: 'failed', enrolled: false },
    { id: 4, name: 'Operating Systems', code: 'CS301', credits: 4, gradeStatus: 'passed', enrolled: true },
    { id: 5, name: 'Computer Networks', code: 'CS302', credits: 3, gradeStatus: 'pending', enrolled: false },
  ];

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      tap(courses => { this.cachedCourses = courses; }),
      catchError(() => of(this.cachedCourses))
    );
  }

  getCourseById(id: number): Observable<Course | undefined> {
    const cached = this.cachedCourses.find(c => c.id === id);
    if (cached) {
      return of(cached);
    }
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of(undefined))
    );
  }

  getCoursesSync(): Course[] {
    return this.cachedCourses;
  }

  getCourseByIdSync(id: number): Course | undefined {
    return this.cachedCourses.find(c => c.id === id);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
