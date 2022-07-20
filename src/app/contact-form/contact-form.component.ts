import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contacts = [
    { id: 1, name: "Email" },
    { id: 2, name: "LinkedIn" },
    { id: 3, name: "Twitter" },
    { id: 4, name: "Facebook" }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  log(x:any){

    console.log(x);

  }

  submit(x:any){

    console.log(x);

  }
}
