import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios = [
    {
      id: 1,
      titulo: 'Bodas',
      descripcion: 'Ofrecemos un entorno mágico y exclusivo para celebrar tu boda, con espacios naturales, salón elegante y gastronomía de alta calidad.',
      imagen: 'assets/servicios4.jpg',
      detalles: [
        { titulo: 'Ceremonias', descripcion: 'Realizamos ceremonias al aire libre o en espacios cerrados elegantes.' },
        { titulo: 'Banquetes', descripcion: 'Menús personalizados con opciones gourmet y tradicionales.' },
        { titulo: 'Decoración', descripcion: 'Asesoramiento en decoración para crear la ambientación perfecta.' },
        { titulo: 'Música y Animación', descripcion: 'DJ, grupos en vivo y espectáculos para todos los gustos.' }
      ]
    },
    {
      id: 2,
      titulo: 'Eventos Corporativos',
      descripcion: 'Disponemos de instalaciones equipadas para reuniones empresariales, conferencias y team building, con catering y tecnología audiovisual.',
      imagen: 'assets/servicios2.jpg',
      detalles: [
        { titulo: 'Conferencias', descripcion: 'Espacios con tecnología avanzada para presentaciones impactantes.' },
        { titulo: 'Seminarios', descripcion: 'Salones preparados para formaciones y talleres especializados.' },
        { titulo: 'Networking', descripcion: 'Áreas diseñadas para generar conexiones profesionales.' },
        { titulo: 'Cenas de Gala', descripcion: 'Eventos empresariales con elegancia y exclusividad.' }
      ]
    },
    {
      id: 3,
      titulo: 'Fiestas y Celebraciones',
      descripcion: 'Celebra cumpleaños, aniversarios y cualquier tipo de evento en un espacio acogedor con un ambiente único y atención personalizada.',
      imagen: 'assets/servicios5.jpg',
      detalles: [
        { titulo: 'Cumpleaños', descripcion: 'Fiestas temáticas con actividades para todas las edades.' },
        { titulo: 'Aniversarios', descripcion: 'Ambientes románticos para celebrar momentos especiales.' },
        { titulo: 'Graduaciones', descripcion: 'Organización de eventos para despedir una etapa con estilo.' },
        { titulo: 'Baby Showers', descripcion: 'Decoración y servicios especiales para celebrar la llegada de un bebé.' }
      ]
    }
  ];

  servicioSeleccionado: any = null;

  seleccionarServicio(servicio: any) {
    this.servicioSeleccionado = servicio;
  }
}
