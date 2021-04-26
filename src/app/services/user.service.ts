import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json')
  user = new User()

  constructor(private http: HttpClient) {}

  setUser(user){
    this.user = user
  }
  
  



  addUser(data): Observable<any> {
    const url = `${this.url}/addUser`
    return this.http.post(url, data).pipe(catchError(this.error))
  }
  getUsers() {
    return this.http.get(`${this.url}/getUsers`)
  }



  getUser(id): Observable<any> {
    const url = `${this.url}/getUser/${id}`
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.error)
    );
  }

  updateUser(id, data): Observable<any> {
    const url = `${this.url}/updateUser/${id}`
    return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.error))
  }





  deleteUser(id): Observable<any> {
    const url = `${this.url}/deleteUser/${id}`
    return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.error))
  }





  

  error(error: HttpErrorResponse) {
    let errorMessage = ""
    if (error.error instanceof ErrorEvent) {

      errorMessage = error.error.message
    } else {

      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
