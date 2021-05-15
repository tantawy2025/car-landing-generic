import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public addressContent: any = [
    {
      icon: true,
      iconClass: 'ion-ios-location-outline',
      text: '1234 North Luke Lane, South Bend, IN 360001'
    },
    {
      icon: true,
      iconClass: 'ion-ios-telephone-outline',
      text: '+0123 456 789'
    },
    {
      icon: true,
      iconClass: 'ion-ios-email-outline',
      text: 'mail@docto.com'
    }
  ];

  public footerHome: any = [
    {
      section: [
        {
          href: '#home',
          title: 'Home'
        },
        {
          href: 'javascript:void(0)',
          title: 'About us'
        },
        {
          href: 'javascript:void(0)',
          title: 'Our team'
        },

      ]
    },

  ];


  public socialNavItems: any = [
    { href: 'javascript:void(0)', icon: '<i class="fab fa-twitter"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-facebook-f"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-google"></i>' },
    { href: 'javascript:void(0)', icon: '<i class="fab fa-github"></i>' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
