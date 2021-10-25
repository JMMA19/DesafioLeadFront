import {EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavbaServiceService {
  EventoAltoContraste = new EventEmitter();
  constructor() { }


mudaAltoContraste(contraste: boolean){
  this.EventoAltoContraste.emit(contraste);
}

}
