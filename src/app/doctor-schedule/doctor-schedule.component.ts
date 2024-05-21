import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css'],
})
export class DoctorScheduleComponent implements OnInit {
  slots = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
  ];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  appointments = this.appointmentService.getAppointments();

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {}

  isSlotTaken(day: string, time: string): boolean {
    return !!this.appointments.find(
      (appointment) => appointment.date === day && appointment.time === time
    );
  }
}
