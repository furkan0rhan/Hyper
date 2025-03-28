import {Injectable} from '@angular/core';
import {environment} from '../environment/environment';
import {HttpClient, HttpEvent} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  api: string = environment.api;

  constructor(private http: HttpClient) { }

  setApi(api: string, differentEndPoint: boolean) {
    if (differentEndPoint)
      return api;
    else
      return this.api + api;
  }

  post<T>(api: string, model: any, callback: (res: HttpEvent<T>) => void, differentEndPoint: boolean = false, options: any = {} ) {
    let apiUrl = this.setApi(api, differentEndPoint);

    this.http.post<T>(apiUrl, model, options).subscribe({
      next: (res) => callback(res)
    });
  }

  put<T>(api: string, model: any, callback: (res: HttpEvent<T>) => void, differentEndPoint: boolean = false, options: any = {} ) {
    let apiUrl = this.setApi(api, differentEndPoint);

    this.http.put<T>(apiUrl, model, options).subscribe({
      next: (res) => callback(res)
    });
  }

  delete<T>(api: string, callback: (res: HttpEvent<T>) => void, differentEndPoint: boolean = false, options: any = {} ) {
    let apiUrl = this.setApi(api, differentEndPoint);

    this.http.delete<T>(apiUrl, options).subscribe({
      next: (res) => callback(res)
    });
  }

  get<T>(api: string, callback: (res: HttpEvent<T>) => void, differentEndPoint: boolean = false, options: any = {} ) {
    let apiUrl = this.setApi(api, differentEndPoint);

    this.http.get<T>(apiUrl, options).subscribe({
      next: (res) => callback(res)
    });
  }
}
