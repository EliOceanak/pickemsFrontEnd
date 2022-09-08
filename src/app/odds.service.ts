import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class OddsService {

  constructor(private httpClient: HttpClient) { }
}
