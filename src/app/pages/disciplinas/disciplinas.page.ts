import { Component, OnInit } from '@angular/core';
import { DisciplinaService } from 'src/services/domain/discipina.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.page.html',
  styleUrls: ['./disciplinas.page.scss'],
})
export class DisciplinasPage implements OnInit {

  constructor(
   public disciplinaService: DisciplinaService) { 

  }

  ngOnInit() {
        this.disciplinaService.findAll()
        .subscribe(response => {
          console.log();
        },
        error => {
          console.log(error);
        });
        
      }

      
}
