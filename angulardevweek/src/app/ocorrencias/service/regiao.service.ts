import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {
  
  //MOC / INTEGRAÇÃO
  constructor() {}

   listRegioes() : Regiao[]{
     return [
       {id: 1, regiao:'Norte', total_exames:1234}
     ];
   }
   }
