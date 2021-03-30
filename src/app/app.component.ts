import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel: any = new User("", "rob@test.com", 5556665566, "default", "morning", true);
  private _enrollmentService: any;

  constructor(private_enrollmentService : EnrollmentService) {}

  validateTopic(value: any){
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false ;
    }
  }
  onSubmit() {
    this._enrollmentService.enroll(this.userModel)
    .subscribe (
      (      data: any) => console.log('sucess!', data),
      (      error: any) => console.error('Error!', error)
    )
  }
}
