import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

  @Input() nombre!: string;

  constructor() { }

//ciclo de vida de Angular muestra el valor agregado y el valor previo anterior agregado
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
  }

}
