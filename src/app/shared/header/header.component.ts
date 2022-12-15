import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartsCount = 0
  carts$ = this.cartService.carts$
  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) { }

  ngOnInit(): void {
    this.getCartCount()
  }
  
  getCartCount(){
    this.cartService.carts$.subscribe(cart => {
      if(cart){
        this.cartsCount = cart.length
      }
    })
  }
  logout(){
    this.authService.logout()
  }
}
