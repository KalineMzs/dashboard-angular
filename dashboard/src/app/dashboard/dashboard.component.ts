import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { Veiculo, Veiculos, VeiculosApi } from './modelo/veiculos';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  veiculos !: Veiculos;
  veiculo !: Veiculo;
  
  veiculoId : number = 1;
  imagemId : string = `${this.veiculoId}`;

  private subs = new Subscription();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.subs = this.dashboardService.buscaVeiculos().subscribe((veiculos) => {
      this.veiculos = veiculos;
      this.onSelect();
    })
  }

  onSelect() {
    this.veiculo = this.veiculos[this.veiculoId-1];    
    this.imagemId = `${this.veiculoId}`;
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
