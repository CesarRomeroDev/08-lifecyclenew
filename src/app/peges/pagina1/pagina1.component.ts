import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
  ]
})
export class Pagina1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {

  nombre: string = 'Julio Cesar';
  segundos: number = 0;
  timerSubscription!: Subscription

  constructor() {
    console.log('constructors');

  }
  ngOnChanges(changes: SimpleChanges): void {   //solo se dispara con el decorador @input de padre a hijo
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {                         //antes de los cambios en click
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {              //cuando se hacen los cambios y se verifica en click
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {                       //cuando el componente va ser destruido ciclo de vida final
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
    console.log('timer limpiado');

  }
  ngOnInit(): void {                        //hooks(gancho) ciclo de vida inicial
    console.log('ngOnInit');
    this.timerSubscription = interval(1000).subscribe( i => {        //interval: emite números secuenciales cada intervalo de tiempo especificado
      this.segundos = i;
    })
  }

  guardar(){

  }

}
