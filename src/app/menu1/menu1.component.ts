import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.css']
})
export class Menu1Component implements OnInit {

  itens: Array<any>;
  matricula: any;

  constructor() { }

  ngOnInit() {    

    this.itens = [
      {
        "id": 1,
        "matricula": "099999",
        "nome": "João",
        "sobrenome": "da Silva",        
        "centroCusto": "DETIC/DVSI"       
      },
      {
        "id": 2,
        "matricula": "099991",
        "nome": "Maria",
        "sobrenome": "da Silva",        
        "centroCusto": "DETIC/DVSI"        
      }
      ,
      {
        "id": 3,
        "matricula": "099991",
        "nome": "Pedro",
        "sobrenome": "da Silva",        
        "centroCusto": "DETIC/DVSI"        
      }
    ]
  }

  buscarItem(){
    
  }

}
