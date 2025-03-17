import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/public/home/home.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { RegisterComponent } from "./pages/public/register/register.component";
import { CreditsComponent } from "./pages/public/credits/credits.component";
import { ServiciosComponent } from "./pages/public/servicios/servicios.component";
import { UserComponent } from "./pages/private/user/user.component";
import { PagesNotFoundComponent } from "./pages/public/pages-not-found/pages-not-found.component";
import { DashboardComponent } from "./pages/private/dashboard/dashboard.component";
import { CitasComponent } from "./pages/private/citas/citas.component";
import { RepuestosComponent } from "./pages/private/repuestos/repuestos.component";
import { CrearProductComponent } from "./pages/private/crear-product/crear-product.component";
import { EditarProductComponent } from "./pages/private/editar-product/editar-product.component";
import { CrearServicioComponent } from "./pages/private/crear-servicio/crear-servicio.component";
import { AgendarCitaComponent } from "./pages/public/agendar-cita/agendar-cita.component";
import { CrearCategoryComponent } from "./pages/private/crear-category/crear-category.component";


export const routes : Routes = [
   
    {path : 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'cita/agendar', component: AgendarCitaComponent},
    {path: 'dashboard/users', component: UserComponent},
    {path: 'dashboard/citas', component: CitasComponent},
    {path: 'dashboard/repuestos', component: RepuestosComponent},
    {path: 'dashboard/product/crear', component: CrearProductComponent},
    {path: 'dashboard/category/crear', component: CrearCategoryComponent},
    {path: 'dashboard/product/editar', component: EditarProductComponent},
    {path:'dashboard/servicios/crear',component: CrearServicioComponent},
    {path: "404", component: PagesNotFoundComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: "full"}
]