import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AcceuiComponent } from './acceui/acceui.component';
import { SimpleutilisateurComponent } from './simpleutilisateur/simpleutilisateur.component';
import { AdminComponent } from './admin/admin.component';
import { UtilisateurListComponent } from './Utilisateur/utilisateur-list/utilisateur-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuiComponent,
    SimpleutilisateurComponent,
    AdminComponent,
    UtilisateurListComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
