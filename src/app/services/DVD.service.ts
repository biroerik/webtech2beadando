import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class DVDService {
  url = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) {}

  
  addeDVD(data): Observable<any> {
    const url = `${this.url}/addDVD`
    return this.http.post(url, data).pipe(catchError(this.error))
  }





  getDVDs() {
    return this.http.get(`${this.url}/getDVDs`)
  }

  getDVD(id): Observable<any> {
    const url = `${this.url}/getDVD/${id}`
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.error)
    );
  }

  updateDVD(id, data): Observable<any> {
    const url = `${this.url}/updateDVD/${id}`
    return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.error))
  }



  deleteDVD(id): Observable<any> {
    const url = `${this.url}/deleteDVD/${id}`
    return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.error))
  }






  error(error: HttpErrorResponse) {
    let errorMessage = ""
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message
    } 
    else {
      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`
    }

    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
