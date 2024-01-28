import { Routes } from '@angular/router';
import { WheatherResultsComponent } from './components/wheather-results/wheather-results.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
    {
        path:'weather',component: WheatherResultsComponent
       
    },
    { path:'test',component:TestComponent}
];
