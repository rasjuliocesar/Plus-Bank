import { Component, OnInit } from '@angular/core';

import { Restriction } from '../restriction'
import { RestrictionService } from '../restriction.service'

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.css']
})
export class RestrictionComponent implements OnInit {

  restrictions: Restriction[] = []

  constructor(private RestrictionService: RestrictionService) { }

  ngOnInit(): void {
    this.getRestriction()
  }

  getRestriction(): void {
    this.RestrictionService.getRestriction().subscribe((restriction) => this.restrictions = restriction)
  }

  addRestriction(documentNumber: string, active: Boolean): void {
    documentNumber = documentNumber.trim()

    if(!documentNumber || !active) {
      return
    }

    let check = (<HTMLInputElement>document.querySelector('input[name="ativo"]:checked')).value

    if(check == "on") {
      active = true
    } else {
      active = false
    }

    this.RestrictionService.addRestriction({documentNumber, active} as Restriction).subscribe((restriction) => this.restrictions.push(restriction))
  }

}
