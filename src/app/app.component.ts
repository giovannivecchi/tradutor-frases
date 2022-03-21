import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  jogoEmAndamento: boolean = true;
  tipoEncerramento: string = '';

  finalizarJogo(tipo: string): void {
    this.tipoEncerramento = tipo;

    this.jogoEmAndamento = false;
  }

  reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = ''
  }
}
