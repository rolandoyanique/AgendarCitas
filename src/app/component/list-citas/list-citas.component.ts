import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent  {
  @Input() agendarCita:any;
  @Output() citaEliminada=new EventEmitter<number>();
  eliminarcita(index:number){
    this.citaEliminada.emit(index);
  }
}
