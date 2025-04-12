import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Certifique-se de importar o módulo de rotas
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    // outros componentes
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Adicione o AppRoutingModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
