import { Component, OnInit} from "@angular/core";
import { Filme } from "./filme";
import { FimeService } from "./filme.service";


@Component({
        templateUrl: './filme-list.component.html'
})
export class FilmeListComponent implements OnInit{

    filteredFilmes: Filme[] = [];

    _filmes: Filme[] = [];

    _filterBy!: string;
    filmeForm: any;

    constructor(private filmeService: FimeService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.filmeService.retriveAll().subscribe({
            next: filmes => {
                this._filmes = filmes;
                this.filteredFilmes = this._filmes;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(filmeId: number): void {
        this.filmeService.deleteById(filmeId).subscribe({
            next: () => {
                console.log('Deleted with sucess');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
        
    set filter(value: string){
        this._filterBy = value;        

        this.filteredFilmes = this._filmes.filter((filme: Filme) => filme.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    
    get filter(){
        return this._filterBy;
    }
    



}