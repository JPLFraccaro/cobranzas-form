import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private isDarkModeEnabled = false

  constructor() {
    this.loadDarkModePreference()
  }
  toggleDarkMode(): void {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    if (this.isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
      alert(document.documentElement.classList)
    } else {
      document.documentElement.classList.remove('dark');
      alert(document.documentElement.classList)
    }
    this.saveDarkModePreference();
  }

  private loadDarkModePreference(): void {
    const darkModePreference = localStorage.getItem('darkModePreference');
    this.isDarkModeEnabled = darkModePreference === 'true';
    if (this.isDarkModeEnabled) {
      document.documentElement.classList.add('dark');
    }
  }

  private saveDarkModePreference(): void {
    localStorage.setItem('darkModePreference', String(this.isDarkModeEnabled));
  }
}
