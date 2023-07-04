import { Injectable } from "@angular/core";
import { Filme } from "./filme";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class FimeService{

    private filmeUrl: string = 'http://localhost:3100/api/filmes';

    constructor(private httpClient: HttpClient){}
    
    retriveAll(): Observable<Filme[]>{
        return this.httpClient.get<Filme[]>(this.filmeUrl);
    }

    retrieveById(id: number): Observable<Filme> {
        return this.httpClient.get<Filme>(`${this.filmeUrl}/${id}`);
    }

    save(filme: Filme): Observable<Filme> {
        if (filme.id) {
            return this.httpClient.put<Filme>(`${this.filmeUrl}/${filme.id}`, filme);
        } else {
            return this.httpClient.post<Filme>(`${this.filmeUrl}`, filme);
        }
    }

    deleteById(id: number): Observable<number> {
        return this.httpClient.delete<number>(`${this.filmeUrl}/${id}`);
    }

    create(filme: Filme): Observable<Filme> {
        return this.httpClient.post<Filme>(this.filmeUrl, filme);
      }
      

}