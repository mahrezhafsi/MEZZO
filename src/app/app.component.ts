import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEZZO';
  images : string[];
  constructor(private router :Router){
    this.images =  ["assets/img/images1.jfif  ","assets/img/images2.jfif"];
    
    
    }
    login(){
      this.router.navigate(['/login']);
    };

}



