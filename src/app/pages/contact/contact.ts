import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ContactService } from '../../core/service/contact.service';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgIf ],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  submitted = false;
  contactForm: any;

  constructor(private fb: FormBuilder,  private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

onSubmit() {
  this.submitted = true;

  if (this.contactForm.valid) {
    this.contactService.sendMessage(this.contactForm.value)
      .subscribe({
        next: () => {
          alert('Message sent successfully!');
          this.contactForm.reset();
          this.submitted = false;
        },
        error: () => {
          alert('Something went wrong.');
        }
      });
  }
}

}
