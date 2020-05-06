import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  instagram = "./assets/img/instagram.png"
  facebook = "./assets/img/facebook.png"
  twitter = "./assets/img/twitter.png"

}
