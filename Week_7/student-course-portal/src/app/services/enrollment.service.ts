import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { CourseService } from './course.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private apiUrl = 'http://localhost:3000/enrollments';
  private enrolledCourseIds: number[] = [];

  constructor(private http: HttpClient, private courseService: CourseService) {}

  enroll(courseId: number): void {
    if (!this.enrolledCourseIds.includes(courseId)) {
      this.enrolledCourseIds.push(courseId);
    }
  }

  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  getEnrolledCourses(): Course[] {
    return this.enrolledCourseIds
      .map(id => this.courseService.getCourseByIdSync(id))
      .filter((c): c is Course => c !== undefined);
  }

  getStudentsByCourse(courseId: number): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/${courseId}/students`).pipe(
      catchError(err => {
        console.error(err);
        return throwError(() => new Error('Failed to load students.'));
      })
    );
  }
}
