import { Component, OnInit } from '@angular/core';
import { utilisateur } from '../Utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
   utilisateurs !: utilisateur[];
  constructor(private service :UtilisateurService) { }

  ngOnInit(): void {
    this.loadUtilisateur()
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

}
