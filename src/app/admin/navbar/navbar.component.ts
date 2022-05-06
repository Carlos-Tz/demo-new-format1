import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() public save: number;
  @Input() public submitSurveyData: any;
  @Input() public myForm: FormGroup;
  @Input() public goBack: any;
  constructor( public authService: AuthService, private router: Router  ) { }

  ngOnInit() {
  }

}
