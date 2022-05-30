import { Component, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //variaveis locais
  livros: any;
  bookService : ListServiceService

  constructor( listService: ListServiceService) { 
    //a variavel local recebe o get do serviço do get
    this.bookService = listService;

  }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe(data => {
      this.livros = data;
      console.log(this.livros.results);
    })
  }

}
