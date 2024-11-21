import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { HeaderComponent } from "./pages/header/header.component";
import { ProductsLinkComponent } from "./components/products-link/products-link.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";
import { ProductDescComponent } from "./pages/product-desc/product-desc.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, HeaderComponent, ProductsLinkComponent, ProductsListComponent, ProductDescComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-venicommerce';
}
