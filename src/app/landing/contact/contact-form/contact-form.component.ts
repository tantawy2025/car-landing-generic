import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(11)]],
    subject: ['', Validators.required],

  });


  constructor(private fb: FormBuilder,
              private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.contactForm.value);

    this.http.post('https://bahrian.remabackend.com/v1/ContactInfo',this.contactForm.value,
    )
        .subscribe(res => {
          console.log(res);
        });

    this.contactForm.reset();

  }
  // {
  //   headers:
  //     new HttpHeaders({
  //       Authorization: 'Bearer ' + 'JHro6wFO4j0GtXcAPfSjd8mlzGSHm2jUzB6tXz5PHVjYIlolo4us3FBsbhXm944wt0NgnITUu3J0cXcrQuHJZ8Z1eMbdE5yYTb26KMR2DoSD9UUPdpm2m9RqJSreLP2u'
  //     //   tenant:atob(sessionStorage.getItem(btoa("tenant"))) ,
  //     }),
  //   observe: 'response',
  // },


}
