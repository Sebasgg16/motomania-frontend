import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/public/home/home.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { RegisterComponent } from "./pages/public/register/register.component";
import { CreditsComponent } from "./pages/public/credits/credits.component";
import { ServiciosComponent } from "./pages/public/servicios/servicios.component";
import { UserComponent } from "./pages/private/user/user.component";
import { PagesNotFoundComponent } from "./pages/public/pages-not-found/pages-not-found.component";
import { DashboardComponent } from "./pages/private/dashboard/dashboard.component";
import { CategoriasComponent } from "./pages/private/categorias/categorias.component";
import { CitasComponent } from "./pages/private/citas/citas.component";
import { RepuestosComponent } from "./pages/private/repuestos/repuestos.component";
import { CrearRepuestosComponent } from "./pages/private/crear-repuestos/crear-repuestos.component";
import { EditarRepuestosComponent } from "./pages/private/editar-repuestos/editar-repuestos.component";
import { ListadoRepuestosComponent } from "./pages/public/listado-repuestos/listado-repuestos.component";
import { CrearServicioComponent } from "./pages/private/crear-servicio/crear-servicio.component";
import { CrearCategoriaComponent } from "./pages/private/crear-categoria/crear-categoria.component";
import { AgendarCitaComponent } from "./pages/public/agendar-cita/agendar-cita.component";
import { EditarServicioComponent } from "./pages/private/editar-servicio/editar-servicio.component";


export const routes : Routes = [
   
    {path : 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'repuestos',component:ListadoRepuestosComponent},
    {path: 'cita/agendar', component: AgendarCitaComponent},
    {path: 'dashboard/users', component: UserComponent},
    {path: 'dashboard/categorias', component: CategoriasComponent},
    {path: 'dashboard/citas', component: CitasComponent},
    {path: 'dashboard/repuestos', component: RepuestosComponent},
    {path: 'dashboard/repuestos/crear', component: CrearRepuestosComponent},
    {path: 'dashboard/categorias/crear', component: CrearCategoriaComponent},
    {path: 'dashboard/repuestos/editar', component: EditarRepuestosComponent},
    {path: 'dashboard/repuestos/lista', component: ListadoRepuestosComponent}, 
    {path:'dashboard/servicios/crear',component: CrearServicioComponent},
    {path: 'dashboard/servicios/editar', component: EditarServicioComponent },
    {path: "404", component: PagesNotFoundComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: "full"}
]
