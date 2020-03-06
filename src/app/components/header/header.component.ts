import { Component, OnInit } from '@angular/core';
import { faHospitalSymbol, faFile, faUser, faCalendarAlt, faComments, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faHospitalSymbol = faHospitalSymbol;
  public faFile = faFile;
  public faUser = faUser;
  public faCalendarAlt = faCalendarAlt;
  public faComments = faComments;
  public faHeart = faHeart;

  constructor() { }

  ngOnInit(): void {
  }

}
