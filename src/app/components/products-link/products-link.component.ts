import { Component, input } from '@angular/core';

@Component({
  selector: 'app-products-link',
  standalone: true,
  imports: [],
  templateUrl: './products-link.component.html',
  styleUrl: './products-link.component.css'
})

export class ProductsLinkComponent {
  navigate: string[] = ["homme","femme","enfant","sneakers care","sale"];
  manBrands: string[] = [
    "Adidas",
    "Asics",
    "Birkenstock",
    "Clarks",
    "Havaianas",
    "Hoka",
    "Hi-Tech",
    "Karhu",
    "Mizuno",
    "New Balance",
    "Nike",
    "Filling Pieces",
    "On Runnig",
    "Puma",
    "Reebok",
    "Saucony",
    "Sebago",
    "Stephney Workers Club",
    "Timberland",
    "UGG",
    "Vans",
    "Veja"
  ];
  womanBrands: string[] = [
    "Adidas",
    "Asics",
    "Birkenstock",
    "Clarks",
    "Havaianas",
    "Hoka",
    "Hi-Tech",
    "Karhu",
    "Mizuno",
    "New Balance",
    "Nike",
    "Filling Pieces",
    "On Runnig",
    "Puma",
    "Reebok",
    "Saucony",
    "Sebago",
    "Stephney Workers Club",
    "Timberland",
    "UGG",
    "Vans",
    "Veja"
  ];
  sneakersBrands: string[] = [
    "Adidas",
    "Asics",
    "Birkenstock",
    "Clarks",
    "Havaianas",
    "Hoka",
    "Hi-Tech",
    "Karhu",
    "Mizuno",
    "New Balance",
    "Nike",
    "Filling Pieces",
    "On Runnig",
    "Puma",
    "Reebok",
    "Saucony",
    "Sebago",
    "Stephney Workers Club",
    "Timberland",
    "UGG",
    "Vans",
    "Veja"
  ];
  newsBrands: string[] = [];
  sneakersModels: string[] = [
    "Air Jordan 1",
    "Nike Air Force 1",
    "Adidas Yeezy Boost 350",
    "Puma Suede Classic",
    "Reebok Club C 85",
    "New Balance 574",
    "Converse Chuck Taylor All Star",
    "Vans Old Skool",
    "Asics Gel-Lyte III",
    "Nike Dunk Low",
    "Adidas Stan Smith",
    "Jordan 4 Retro",
    "Reebok Pump Omni Zone II",
    "New Balance 550",
    "Saucony Jazz Original",
    "Hoka Clifton 8",
    "Salomon XT-6",
    "Nike Blazer Mid '77",
    "Adidas Ultraboost",
    "Fila Disruptor II"
  ];
  manModels: string[] = [];
  womanModels: string[] = [];
  newsModels: string[] = [];
  manCategory = [
    "Casquettes",
    "Ceintures",
    "Lunettes de soleil",
    "Montres",
    "Portefeuilles"
  ];

  womanCategory = [
    "Écharpes",
    "Bijoux (bracelets, colliers, boucles d’oreilles)",
    "Chapeaux",
    "Sacs à main",
    "Gants"
  ];

  sneakersCategory: string[] = []


  navLinkTypes = [
    { 
      id: 1, 
      type: "news",
      desc: {
        "navigate": this.navigate,
      },
      hover: false 
    },
    { 
      id: 2, 
      type: "sneakers",
      desc: {
        "navigate": this.navigate,
        "brands": this.sneakersBrands,
        "models": this.sneakersModels
      },
      hover: false 
    },
    { 
      id: 3, 
      type: "homme",
      desc: {
        "navigate": this.navigate,
        "brands":this.manBrands,
        "category": this.manCategory
      },
      hover: false 
    },
    { 
      id: 4, 
      type: "femme", 
      desc: {
        "navigate": this.navigate,
        "brands": this.womanBrands,
        "category": this.womanCategory
      },
      hover: false
    },
    { 
      id: 5, 
      type: "sale",
      desc: {},
      hover: false 
    },
    { 
      id: 6, 
      type: "marques",
      desc: {},
      hover: false 
    }
  ];

  navLinkHover(id: number): void {
    for(let i = 0; i < this.navLinkTypes.length; i++){
      if(this.navLinkTypes[i].id === id){
        this.navLinkTypes.forEach(item => {
          if(item.id === id){
            item.hover = true;
            console.log(item.desc);
            return;
          } else if(item.id !== id){
            item.hover = false;
          }
        });
      } 
    }
  }

  navLinkDown(id: number): void {
    for(let i = 0; i < this.navLinkTypes.length; i++){
      if(this.navLinkTypes[i].id === id){
        this.navLinkTypes.forEach(item => {
          if(item.id === id){
            item.hover = false;
            return;
          }
        });
      } 
    }
  }

}
