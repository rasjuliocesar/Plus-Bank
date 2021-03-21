import { Component, OnInit } from '@angular/core';

import { Pixkey } from '../pixKey'
import { PixkeyService } from '../pixkey.service'

@Component({
  selector: 'app-pixkey',
  templateUrl: './pixkey.component.html',
  styleUrls: ['./pixkey.component.css']
})
export class PixkeyComponent implements OnInit {
  pixs: Pixkey[] = []

  constructor(private PixkeyService: PixkeyService) { }

  ngOnInit(): void {
    this.getPixkey()
  }

  getPixkey(): void {
    this.PixkeyService.getPixKey().subscribe((pixkey) => (this.pixs = pixkey))
  }

  addPixkey(pixKey: string, bank: string, person: string):void {
    pixKey = pixKey.trim()
    bank = bank.trim()
    person = person.trim();

    if(!pixKey || !bank || !person) {
      return;
    }

    this.PixkeyService.addPixkey({pixKey, bank, person} as Pixkey).subscribe((pixkey) => {
      this.pixs.push(pixkey)
    })
  }

}
