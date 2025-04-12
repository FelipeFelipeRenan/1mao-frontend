import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Certifique-se de importar corretamente seus componentes

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Defina a rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração do RouterModule
  exports: [RouterModule] // Exporte o RouterModule para ser utilizado no AppModule
})
export class AppRoutingModule { }
