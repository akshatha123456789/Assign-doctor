import { Injectable } from '@angular/core';

interface Appointment {
  patientName: string;
  date: string;
  time: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment): boolean {
    const exists = this.appointments.find(
      (a) => a.date === appointment.date && a.time === appointment.time
    );
    if (exists) {
      return false;
    }
    this.appointments.push(appointment);
    return true;
  }
}
