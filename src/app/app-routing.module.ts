import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [{
  path: '', redirectTo:'home', pathMatch: 'full'
},
{path: 'home', component: HomeComponent},
{path: 'services', component: ServicesComponent},
{path: 'about', component: AboutUsComponent},
{path: 'product', component: ProductsComponent},
{path: 'contact', component: ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
