import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { TabelaService } from "./tabela.service";
import {
  tap,
  map,
  switchMap,
  filter,
  debounceTime,
  distinctUntilChanged,
} from "rxjs/operators";

const ESPERA_DIGITACAO = 300;

@Component({
  selector: "app-tabela",
  templateUrl: "./tabela.component.html",
  styleUrls: ["./tabela.component.css"],
})
export class TabelaComponent implements OnInit {
  vinInput = new FormControl();

  vinVazio: boolean = false;

  vin$ = this.vinInput.valueChanges.pipe(
    debounceTime(ESPERA_DIGITACAO),
    filter((valorDigitado) => {
      this.vinVazio = true;
      return valorDigitado.length >= 5;
    }),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.tabelaService.getVeiculos(valorDigitado)),
    filter((veiculo) => veiculo.length == 1),
    map((veiculo) => {
      this.vinVazio = false;
      return veiculo[0];
    })
  );

  constructor(private tabelaService: TabelaService) {}

  ngOnInit(): void {}
}
