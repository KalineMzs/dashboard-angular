import { Component, OnInit, Input } from '@angular/core';

const root: string = 'assets/img';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  caminho: string = `${root}/1.png`;
  
  @Input() set id(id: string) {
    this.caminho = `${root}/${id}.png`;
  }

  get id(): string {
    return this.caminho;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
