import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'acao',
        loadComponent: () => import('./paginas/acao/acao.component').then(m => m.AcaoComponent)
    },
    {
        path: 'acao/:symbol',
        loadComponent: () => import('./paginas/detalhes/detalhes.component').then(m => m.DetalhesComponent)
    }
];
