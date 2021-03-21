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

  addRegistration(fullName: string, address: string, zipCode: string, state: string, country: string, birthDate: Date, 
    document: string, phone: string, email: string, salary: number): void {

    fullName = fullName.trim()
    address = address.trim()
    zipCode = zipCode.trim()
    state = state.trim()
    country = country.trim()
    document = document.trim()
    phone = phone.trim()
    email = email.trim()

    if(!fullName || !address || !zipCode || !state || !country || !document || !phone || !email || !salary || !birthDate) {
      return
    }

    this.RegistrationService.addRegistration({fullName, address, zipCode, state, country, birthDate, document, phone, email, salary} as Registration).subscribe((registration) => {
      this.registrations.push(registration)
    })
  }

}
