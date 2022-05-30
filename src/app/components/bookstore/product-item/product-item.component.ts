import { Component, Input, OnInit } from '@angular/core';
import { gutendex } from 'src/app/model/gutendex';

@Component({
  selector: 'ecom-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  //o componente item, que é filho do componente list somente vai receber a estrutura de dados como herança
  @Input() livro!:gutendex;

  constructor() { }

  ngOnInit(): void {
  }

}
