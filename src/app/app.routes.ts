import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/public/home/home.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { RegisterComponent } from "./pages/public/register/register.component";
import { CreditsComponent } from "./pages/public/credits/credits.component";
import { UsersComponent } from "./pages/private/users/users.component";
import { PagesNotFoundComponent } from "./pages/public/pages-not-found/pages-not-found.component";
import { DashboardComponent } from "./pages/private/dashboard/dashboard.component";
import { CategoriasComponent } from "./pages/private/categorias/categorias.component";
import { ProductosComponent } from "./pages/private/productos/productos.component";
import { CitasComponent } from "./pages/private/citas/citas.component";
import { RepuestosComponent } from "./pages/private/repuestos/repuestos.component";
import { ServiciosComponent } from "./pages/private/servicios/servicios.component";






export const routes : Routes = [
   
    {path : 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'dashboard', component: DashboardComponent}, 
    {path : 'dashboard/categorias', component: CategoriasComponent},
    {path: 'dashboard/productos', component: ProductosComponent},
    {path: 'dashboard/citas', component: CitasComponent},
    {path: 'dashboard/repuestos', component: RepuestosComponent},
    {path: 'dashboard/servicios', component: ServiciosComponent},
    {path: 'dashboard/users', component: UsersComponent},
    {path: 'register', component: RegisterComponent},
    {path: "404", component: PagesNotFoundComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: "full"}
]
