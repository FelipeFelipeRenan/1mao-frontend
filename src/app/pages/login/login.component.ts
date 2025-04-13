import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  styles: [],
})
export class LoginComponent {
  // Variáveis de estado
  isLoading = false;
  errorMessage = "";

  // Dados do formulário
  email = "";
  password = "";

  // Método chamado ao submeter o formulário
  onSubmit() {
    this.isLoading = true;
    this.errorMessage = "";

    // Aqui você implementaria a chamada real ao serviço de autenticação
    console.log("Login attempt:", {
      email: this.email,
      password: this.password,
    });

    // Simulação de login (remover em produção)
    setTimeout(() => {
      this.isLoading = false;
      // this.router.navigate(['/dashboard']); // Descomente quando tiver o serviço
    }, 1500);
  }
}
