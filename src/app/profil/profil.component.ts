import { Component, OnInit } from '@angular/core';
import { utilisateur } from '../Utilisateur/Utilisateur';
import { UtilisateurService } from '../Utilisateur/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  utilisateurs !: utilisateur[];
  constructor(private service :UtilisateurService) { }
  ngOnInit(): void {
    this.loadUtilisateur();
  }
  loadUtilisateur(){
    this.service.getUtilisateurList().subscribe(
      data =>{
        this.utilisateurs=data;
        console.log(data);
      },
      error =>  console.log(error)
      );
  }
  f(){
    alert("ggggggggggggggg");
  }

}
