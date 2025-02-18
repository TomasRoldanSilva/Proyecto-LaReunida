import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMiniHeader: boolean = true;

  // Detecta el scroll y oculta/recupera el miniheader
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 50) { // Si se ha hecho scroll más de 50px
      this.showMiniHeader = false;
    } else {
      this.showMiniHeader = true;
    }
  }
}