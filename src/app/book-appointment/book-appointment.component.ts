import { Component } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent {
  patientName = '';
  date = '';
  time = '';
  description = '';
  message = '';

  constructor(private appointmentService: AppointmentService) {}

  bookAppointment() {
    if (
      this.appointmentService.addAppointment({
        patientName: this.patientName,
        date: this.date,
        time: this.time,
        description: this.description,
      })
    ) {
      this.message = 'Appointment booked successfully!';
    } else {
      this.message = 'Slot already taken!';
    }
  }
}
