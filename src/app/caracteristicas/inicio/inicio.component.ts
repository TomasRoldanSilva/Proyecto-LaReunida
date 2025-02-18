/**
 * Componente que representa la página de inicio.
 * Implementa efectos de scroll y un slider de imágenes.
 */
import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  isScrolled = false;
  isMiniHeaderHidden = false;
  private lastScrollTop = 0;

  /**
   * Escucha el evento de scroll y actualiza la visibilidad del miniheader.
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isMiniHeaderHidden = scrollTop > this.lastScrollTop && scrollTop > 50;
    this.lastScrollTop = scrollTop;
  }

  /**
   * Método que se ejecuta después de la inicialización de la vista.
   * Configura el slider de imágenes.
   */
  ngAfterViewInit() {
    const sliderList = document.getElementById("slider-list") as HTMLElement;
    if (!sliderList) return;

    const images = Array.from(sliderList.children) as HTMLElement[];
    let index = 0;
    const totalImages = images.length;
    const slideWidth = images[0]?.clientWidth || 0;

    function moveSlider() {
      index++;
      if (index >= totalImages) {
        sliderList.style.transition = "transform 1s ease-in-out";
        sliderList.style.transform = `translateX(0px)`;

        setTimeout(() => {
          sliderList.style.transition = "none";
          index = 0;
          sliderList.style.transform = `translateX(0px)`;
        }, 1000);
      } else {
        sliderList.style.transition = "transform 1s ease-in-out";
        sliderList.style.transform = `translateX(-${index * slideWidth}px)`;
      }
    }

    setInterval(moveSlider, 3000);
  }
}
