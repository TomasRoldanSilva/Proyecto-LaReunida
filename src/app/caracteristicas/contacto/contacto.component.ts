/**
 * Componente de la página de contacto.
 * Contiene un formulario de contacto con validaciones.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  /**
   * Método para enviar el formulario de contacto.
   * Valida los campos antes de enviarlo.
   */
  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Formulario enviado:', this.contactoForm.value);
      alert('¡Mensaje enviado con éxito!');
      this.contactoForm.reset();
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
