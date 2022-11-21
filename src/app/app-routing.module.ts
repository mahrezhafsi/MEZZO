import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuiComponent } from './acceui/acceui.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { SimpleutilisateurComponent } from './simpleutilisateur/simpleutilisateur.component';
import { UtilisateurListComponent } from './Utilisateur/utilisateur-list/utilisateur-list.component';

const routes: Routes = [
  {path :'login',component:LoginComponent},
  {path :'' , component : AcceuiComponent},
  {path :'simpleutilisateur',component:SimpleutilisateurComponent},
  {path :'admin',component:AdminComponent},
  {path : "test" , component : UtilisateurListComponent},
  {path : "profil" , component : ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
