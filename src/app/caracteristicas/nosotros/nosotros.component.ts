import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements AfterViewInit {
  currentIndex = 0;

  ngAfterViewInit() {
    this.updateSliderPosition();
  }

  updateSliderPosition() {
    const sliderList = document.querySelector('.slider-list') as HTMLElement;
    const images = sliderList.children as HTMLCollectionOf<HTMLElement>;
    const width = (images[0] as HTMLElement).offsetWidth;
    sliderList.style.transform = `translateX(-${this.currentIndex * width}px)`;
  }

  nextSlide() {
    const sliderList = document.querySelector('.slider-list') as HTMLElement;
    const images = sliderList.children as HTMLCollectionOf<HTMLElement>;
    this.currentIndex = (this.currentIndex + 1) % images.length;
    this.updateSliderPosition();
  }

  prevSlide() {
    const sliderList = document.querySelector('.slider-list') as HTMLElement;
    const images = sliderList.children as HTMLCollectionOf<HTMLElement>;
    this.currentIndex = (this.currentIndex - 1 + images.length) % images.length;
    this.updateSliderPosition();
  }
}
