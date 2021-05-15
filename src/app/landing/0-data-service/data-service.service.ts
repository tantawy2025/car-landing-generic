import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  landingData = {

    navbarData : {

      leftNav : {
        logoImg : '../../../assets/img/logo.png',
        altImg : 'FUSE',
        href : '#'
      },

      navItem : [
        { href: '#showcase', title: 'Home'},
        { href: '#about', title: 'About Us' },
        { href: '#contact', title: 'Contact Us' }
      ],

      rightNav : [
        {
          logoImg : '../../../assets/img/google-play.png',
          altImg : 'Google Play',
          href : '#'
        },
        {
          logoImg : '../../../assets/img/app-store.png',
          altImg : 'App Store',
          href : '#'
        }
      ]

    },

    carouselData : [
      {
        bgClass:'carousel-image-1' ,
        title: "Download App",
        content: [
          {
            img : '../../../assets/img/google-play.png',
            altImg : 'Google Play',
            href : '#'
          },
          {
            img : '../../../assets/img/app-store.png',
            altImg : 'App Store',
            href : '#'
          }
        ]
      },
      {
        bgClass:'carousel-image-2' ,
        title: "Download App",
        content: [
          {
            img : '../../../assets/img/google-play.png',
            altImg : 'Google Play',
            href : '#'
          },
          {
            img : '../../../assets/img/app-store.png',
            altImg : 'App Store',
            href : '#'
          }
        ]
      },
      {
        bgClass:'carousel-image-3' ,
        title: "Download App",
        content: [
          {
            img : '../../../assets/img/google-play.png',
            altImg : 'Google Play',
            href : '#'
          },
          {
            img : '../../../assets/img/app-store.png',
            altImg : 'App Store',
            href : '#'
          }
        ]
      },
    ],

    aboutSection : {

      bgImg : {
        url : `url("../../../assets/img/mt-1222-home-parallax2.jpg")`,
        backgroundSize : 'cover',
        backgroundAttachment: 'fixed',
        height: ' 40vh'

      }
    },

    socialNavItems : [
      { href: '#', icon: '<i class="fab fa-twitter"></i>' },
      { href: '#', icon: '<i class="fab fa-facebook-f"></i>' },
      { href: '#', icon: '<i class="fab fa-google"></i>' },
      { href: '#', icon: '<i class="fab fa-github"></i>' },
    ]



  }

  constructor() {}

}
