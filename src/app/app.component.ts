import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SitebarComponent } from './shared/sitebar/sitebar.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SitebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'join';
}
