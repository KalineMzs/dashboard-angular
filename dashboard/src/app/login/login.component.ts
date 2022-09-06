import { Component, OnInit } from "@angular/core";
import { AutenticacaoService } from "src/app/autenticacao/autenticacao.service";
import { Router } from "@angular/router";
import { PoPageLogin, PoPageLoginLiterals } from "@po-ui/ng-templates";
import { PoLanguage } from "@po-ui/ng-components";
import { UsuarioLogin } from "../autenticacao/usuario/usuario-login";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  customLiterals: PoPageLoginLiterals = {
    welcome: 'Boas-vindas',
    loginPlaceholder: 'Insira seu usuário',
    passwordPlaceholder: 'Insira sua senha',
    submitLabel: 'Entrar',
    loginErrorPattern: 'Login obrigatório',
    loginHint: '',
  };
  language: PoLanguage[] = [{language: 'pt'}];

  public isLoading !: boolean;
  public logo !: string;  
  
  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {
    this.logo = '../assets/img/ford.png';
  }

  ngOnInit(): void {
    this.isLoading = false;
  }

  onloginSubmit(formData: PoPageLogin): void {
    const user: UsuarioLogin = {
      userName: formData.login,
      password: formData.password
    };
    this.login(user);
  }

  private login(user: UsuarioLogin): void {
    this.isLoading = true;

    this.authService.autenticar(user.userName, user.password).subscribe(
      () => {
        this.isLoading = false;
        this.router.navigate(["home"]);
      },
      (error) => {
        this.isLoading = false;
        console.log(error);
      }
    );
  }

  
}
