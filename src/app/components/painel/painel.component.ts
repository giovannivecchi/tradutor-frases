import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../../shared/frase.model';
import { frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  frases: Array<Frase> = frases;
  instrucao: string = 'Traduza a frase:';
  resposta: string = '';
  rodada: number = 0;
  rodadaFrase: Frase = this.frases[this.rodada];
  valorProgresso: number = 0;
  tentativas: number = 3;

  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  atualizaResposta(event: Event): void {
    this.resposta = (<HTMLInputElement>event.target).value;
  }

  verificarResposta(frase: Frase) {
    if (frase.frasePtBr === this.resposta) {
      this.rodada++;
      this.valorProgresso = this.valorProgresso + 100 / this.frases.length;
      this.atualizaRodada();

      if (this.rodada > 3) {
        this.valorProgresso = 100;
        this.encerrarJogo.emit('vitoria')
        alert('Concluida as traduções com sucesso!');
      }
    } else {
      this.tentativas--;

      if (this.tentativas <= 0) {
        this.encerrarJogo.emit('derrota')
        alert('Fim de jogo!');
      }
    }
  }

  atualizaRodada(): void {
    if(this.rodada < this.frases.length) {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
    }
  }
}
