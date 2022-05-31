import { Component, OnInit } from '@angular/core';
import { gutendex } from 'src/app/model/gutendex';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //variaveis locais
  apiResult: any;
  livros: any;
  bookService : ListServiceService

  constructor( listService: ListServiceService) { 
    //a variavel local recebe o get do serviço do get
    this.bookService = listService;

  }
  //aqui a propriedade livros é vista e o conteudo funciona no console
  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe(data => {
      this.apiResult = data;
      this.livros = this.apiResult.results;
      console.log(this.livros);
      console.log(this.livros[0]);
      console.log(this.livros[0].id);
    })
  }

}
