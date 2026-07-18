import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  imageURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIY9ORGX5296CZhbI2VoMU6R1xZB4TzQ-psx3Dol5TqQ&s=10";
  isDisabled=true;
  myName="Durjoy";
  isActive=false;
  boxWidth=100;
  bgColor='red';

  count=signal(0);
}
