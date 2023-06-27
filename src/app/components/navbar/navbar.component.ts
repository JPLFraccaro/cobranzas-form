import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeService } from 'src/app/services/dark-mode.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router: Router,
    public darkModeService: DarkModeService
  ) {}

  isActive(route: string): boolean {

    return this.router.url === route;
  }
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

}
