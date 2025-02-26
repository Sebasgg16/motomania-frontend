import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/public/home/home.component";
import { LoginComponent } from "./pages/public/login/login.component";
import { RegisterComponent } from "./pages/public/register/register.component";
import { CreditsComponent } from "./pages/public/credits/credits.component";
import { UsersComponent } from "./pages/private/users/users.component";
import { PagesNotFoundComponent } from "./pages/public/pages-not-found/pages-not-found.component";



export const routes : Routes = [
    {path : 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login', component: RegisterComponent},
    {path: 'credits', component: CreditsComponent},
    // {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboard/users', component: UsersComponent},
    {path: "404", component: PagesNotFoundComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: '404', pathMatch: "full"}
]