import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trading} from "../model/trading";

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TradingService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Trading[]> {
    return this.http.get<Trading[]>(API_URL + '/tradings');
  }

  saveTrading(trading: any): Observable<Trading> {
    return this.http.post<Trading>(API_URL + '/tradings', trading);
  }

  findById(id: number): Observable<Trading> {
    return this.http.get<Trading>(`${API_URL}/tradings/${id}`);
  }

  updateTrading(id: number, trading: Trading): Observable<Trading> {
    return this.http.put<Trading>(`${API_URL}/tradings/${id}`, trading);
  }

  deleteTrading(id: number): Observable<Trading> {
    return this.http.delete<Trading>(`${API_URL}/tradings/${id}`);
  }

  findTradingByName(keyword: string ) {
    return this.http.get<Trading[]>(API_URL + '/tradings?type_like=' + keyword + '&customer.name_like=' + keyword  );
  }
}
