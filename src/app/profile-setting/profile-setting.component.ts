import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss']
})
export class ProfileSettingComponent implements OnInit {
  opened = true;
  male = true;
  female = false;

  constructor() { }

  ngOnInit(): void {
  }

}
