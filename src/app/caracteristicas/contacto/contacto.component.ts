import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClimaService } from '../../servicios/clima.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  tiposEvento: string[] = ['Bodas', 'Eventos Corporativos', 'Fiestas y Celebraciones'];
  climaInfo: any; // Aquí guardaremos la información del clima

  constructor(private fb: FormBuilder, private climaService: ClimaService) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      evento: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
      ciudad: ['', Validators.required] // Nuevo campo para la ciudad
    });
  }

  obtenerClima() {
    const ciudad = this.contactoForm.get('ciudad')?.value;
    if (ciudad) {
      this.climaService.obtenerClima(ciudad).subscribe(
        (data: any) => {
          this.climaInfo = data;
        },
        (error: any) => {
          console.error('Error al obtener el clima', error);
          this.climaInfo = null;
        }
      );
    }
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      alert('¡Mensaje enviado con éxito!');
      this.contactoForm.reset();
      this.climaInfo = null;
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
