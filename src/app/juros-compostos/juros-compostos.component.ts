import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css']
})
export class JurosCompostosComponent implements OnInit {

  v = 0;
  n = 0;
  j = 0;
  p = 0;

  constructor() { }

  ngOnInit() {
  }

  getJurosCompostos(){
    let list: number[] = [];
    for(let i = 1; i<=this.n; i++){
      this.p = 1 + (this.j / 100);
      list.push(this.v * Math.pow(this.p, i));
    }
    return list;
  }

}