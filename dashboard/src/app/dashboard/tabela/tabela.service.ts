import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import {
  VeiculoDados,
  VeiculosDados,
  VeiculosDadosApi,
} from "./model/veiculos-dados";
import { environment } from "src/environments/environment";
import { tap, pluck } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class TabelaService {
  constructor(private http: HttpClient) {}

  getVeiculos(valor?: string) {
    const params = valor ? new HttpParams().append("valor", valor) : undefined;

    return this.http
      .get<VeiculosDadosApi>(`${API}/vehicleData`, { params })
      .pipe(
        pluck('vehicleData')
      );
  }
}
