import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  constructor() { }

  API_BASE_URL = 'https://localhost:44331/api';
}