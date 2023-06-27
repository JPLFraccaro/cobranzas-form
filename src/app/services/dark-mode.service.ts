import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  public isDarkModeEnabled = false

  constructor() {
    this.loadDarkModePreference()
  }
  toggleDarkMode(): void {
    this.isDarkModeEnabled = !this.isDarkModeEnabled;
    if (this.isDarkModeEnabled) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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
