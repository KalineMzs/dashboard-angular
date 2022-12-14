import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
  },
  {
    path: "login",
    loadChildren: () =>
      import("src/app/login/login.module").then((m) => m.LoginModule),
      canLoad: [LoginGuard]
  },
  {
    path: "home",
    loadChildren: () =>
      import("src/app/home/home.module").then((m) => m.HomeModule),
      canLoad: [AutenticacaoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
