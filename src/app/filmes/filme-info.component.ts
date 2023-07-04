import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Filme } from "./filme";
import { FimeService } from "./filme.service";
import { Router } from "@angular/router";


@Component({
    templateUrl: './filme-info.component.html'
}) 
export class FilmeInfoComponent implements OnInit{

    filme!: Filme;
    

    //constructor(private activatedRoute: ActivatedRoute, private filmeService: FimeService) {}
    constructor(private activatedRoute: ActivatedRoute, private filmeService: FimeService, private router: Router) {}


    ngOnInit(): void {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        const numericId = id ? parseInt(id, 10) : null; // ou Number(id)

        if (numericId !== null) {
            this.filmeService.retrieveById(numericId).subscribe({
            next: filme => this.filme = filme,
            error: err => console.log('Error', err)
            });
        } else {
            console.log('Invalid ID');
        }


        
    }

    save(): void {
           this.filmeService.save(this.filme).subscribe({
            next: filme => {
                       console.log('Updated with success', filme);
                        this.router.navigate(['/filmes']);
                     },
                      error: err => console.log('Error', err)
              
         });
       }
    // save(): void {
    //     this.filmeService.save(this.filme).subscribe({
    //         next: filme => console.log('Saved with success', filme),
    //         error: err => console.log('Error', err)
    //     });
    // }
    criar(): void {
          if (this.filme.id) {
            this.filmeService.create(this.filme).subscribe({
               next: filme => {
                console.log('Updated with success', filme);
                this.router.navigate(['/filmes']);
               },
               error: err => console.log('Error', err)
             });
           } else {
             this.filmeService.create(this.filme).subscribe({
               next: filme => {
                 console.log('Created with success', filme);
                 this.router.navigate(['/filmes']);
               },
               error: err => console.log('Error', err)
             });
           }
         }

    
}