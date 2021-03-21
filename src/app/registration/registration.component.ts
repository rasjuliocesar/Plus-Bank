import { Component, OnInit } from '@angular/core';

import { Registration } from '../registration'
import { RegistrationService } from '../registration.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrations: Registration[] = []

  constructor(private RegistrationService: RegistrationService) { }

  ngOnInit(): void {
    this.getRegistration()
  }

  getRegistration(): void {
    this.RegistrationService.getRegistration().subscribe((registration) => (this.registrations = registration))
  }

}
