import { Component, Input, OnInit } from '@angular/core';
import { ListServiceService } from 'src/app/services/list-service.service';

@Component({
  selector: 'ecom-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  imgWidth = 175;
  imgHeight = 230;
  apiResult: any;
  //o componente item, que é filho do componente list somente vai receber a estrutura de dados como herança
  @Input() livros!: any;

  constructor(private listService: ListServiceService) { }

  ngOnInit(): void {
  }

  getBook(){
    this.listService.getBook().subscribe(result => {
      this.apiResult = result;
      this.livros = this.apiResult.results;
    })
  }
}
