import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Veiculo, Veiculos, VeiculosApi } from "./modelo/veiculos";
import { map, pluck, tap } from "rxjs/operators";
import { TokenService } from '../autenticacao/token.service';

const API = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class DashboardService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  buscaVeiculos(): Observable<Veiculos> {
    return this.http.get<VeiculosApi>(`${API}/vehicle`).pipe(
      pluck("vehicles"),
    );
  }
}
