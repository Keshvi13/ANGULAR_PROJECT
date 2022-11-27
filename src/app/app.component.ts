import { Component } from '@angular/core';
import { Faculty } from './faculty';
import { FormGroup, FormControl } from '@angular/forms';
import { InjectSetupWrapper } from '@angular/core/testing';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day_4';
 
}
