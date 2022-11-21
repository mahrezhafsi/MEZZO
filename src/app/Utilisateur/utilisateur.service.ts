import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utilisateur } from './Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url='http://localhost:8080/utilisateur';

  constructor(private http : HttpClient) { }
   
  getUtilisateurList(){
     return this.http.get<utilisateur[]>(this.url);
    }
    getUtilisateur(id : number){
      return this.http.get<utilisateur>(this.url+"/"+id);
     }
     createUtilisateur(u :utilisateur){
      return this.http.post<utilisateur>(this.url,u);
     }
     deleteUtilisateur(id : number){
      return this.http.delete<utilisateur>(this.url+"/"+id);
     }
     updateUtilisateur(u :utilisateur){
      return this.http.put<utilisateur>(this.url+"/"+u.id,u);
     }


    }
