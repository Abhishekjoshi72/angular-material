import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-assignment-1',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './assignment-1.component.html',
  styleUrl: './assignment-1.component.css'
})
export class Assignment1Component {

  addString: string = '@angular/material';
}
