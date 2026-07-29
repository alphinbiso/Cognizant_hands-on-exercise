import { CanDeactivateFn } from '@angular/router';
import { EnrollmentFormComponent } from '../pages/enrollment-form/enrollment-form.component';

export const unsavedChangesGuard: CanDeactivateFn<EnrollmentFormComponent> = (component) => {
  if (component && component.submitted === false) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
