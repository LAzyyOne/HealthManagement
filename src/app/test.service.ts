import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = "https://localhost:7175/api/Tests"


  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }


  postTest(data:any) {
    // console.warn("service",data)
    return this.http.post(this.url, data)
  }
  deleteTest(id: number) {
    return this.http.delete(this.url+'/'+id)
  }

} 