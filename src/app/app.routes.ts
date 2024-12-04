
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TextInfoComponent } from './text-info/text-info.component';
import { TasksComponent } from './tasks/tasks.component';
import { AwardsPageComponent } from './awards-page/awards-page.component';
import { DonationsPageComponent } from './donations-page/donations-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from '../app/auth/auth.guard';


// Definição das rotas
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SearchBarComponent},
    { path: 'about', component: TextInfoComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'awards', component: AwardsPageComponent, canActivate: [AuthGuard] },

    { path: 'donations', component: DonationsPageComponent },
    { path: 'login', component: LoginPageComponent },
    
];


// Módulo de Roteamento
@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configuração do roteamento
    exports: [RouterModule] // Exportando o RouterModule para uso em outros módulos
})
export class AppRoutingModule { } // Não esqueça de exportar o módulo
