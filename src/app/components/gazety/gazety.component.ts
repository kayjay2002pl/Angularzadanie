import { Component, OnInit } from '@angular/core';
import * as gazetki from "../../../assets/data.json";

@Component({
  selector: 'app-gazety',
  templateUrl: './gazety.component.html',
  styleUrls: ['./gazety.component.css']
})
export class GazetyComponent implements OnInit {

  title = 'gazety';
  lista: any = {};
  grafiki: any = [];

  ngOnInit(): void {
    this.lista = gazetki;
    this.lista = this.lista.czasopisma
    const keys: string[] = Object.keys(this.lista.zmienne);
    const tab: string[] = [];

    keys.forEach((element, index) => {
      tab.push(this.lista.zmienne[element].src)
    })
    this.grafiki = tab;
  }

}
