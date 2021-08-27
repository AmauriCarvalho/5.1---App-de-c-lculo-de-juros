import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-simples',
  templateUrl: './juros-simples.component.html',
  styleUrls: ['./juros-simples.component.css']
})
export class JurosSimplesComponent implements OnInit {

  v = 0;
  n = 0;
  j = 0;

  constructor() { }

  ngOnInit() {
  }

  getJurosSimples(){
    let list: number[] = [];
    for(let i = 1; i<=this.n; i++){
      list.push(this.v*(1 + (this.j / 100) * i));
    }
    return list;
  }

}