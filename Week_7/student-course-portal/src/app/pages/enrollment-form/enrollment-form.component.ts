import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {
  submitted = false;

  onSubmit(form: NgForm): void {
    console.log(form.value);
    console.log('Form valid:', form.valid);
    this.submitted = true;
  }

  onReset(form: NgForm): void {
    form.resetForm();
    this.submitted = false;
  }
}
