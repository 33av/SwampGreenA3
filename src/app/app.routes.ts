// import { Routes } from '@angular/router';
// import { TextInfoComponent } from './text-info/text-info.component';
// import { SearchBarComponent } from './search-bar/search-bar.component';


// export const routes: Routes = [
//     { path: 'home', component: SearchBarComponent },
//     { path: 'about', component: TextInfoComponent },
// ];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TextInfoComponent } from './text-info/text-info.component';
import { TipsPageComponent } from './tips-page/tips-page.component';
import { AwardsPageComponent } from './awards-page/awards-page.component';
import { DonationsPageComponent } from './donations-page/donations-page.component';

// Definição das rotas
export const routes: Routes = [
    { path: 'home', component: SearchBarComponent },
    { path: 'about', component: TextInfoComponent },
    { path: 'tips', component: TipsPageComponent },
    { path: 'awards', component: AwardsPageComponent },
    { path: 'donations', component: DonationsPageComponent }
];

// Módulo de Roteamento
@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configuração do roteamento
    exports: [RouterModule] // Exportando o RouterModule para uso em outros módulos
})
export class AppRoutingModule { } // Não esqueça de exportar o módulo
