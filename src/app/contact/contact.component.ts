import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import * as swal from 'sweetalert';

import { Contact } from './shared/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {

  }

  contactForm(form) {
    this.contactService.sendEmail(form).subscribe(() => 
      sweetAlert("Good job!", "You clicked the button!", "success")
    );
  }
}