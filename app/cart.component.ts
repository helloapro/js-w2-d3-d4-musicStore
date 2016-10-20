import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'cart-display',
  template: `
    <div *ngIf="!purchases[0]">
      <p class="text-center">Your cart is empty.</p>
    </div>
    <div class="row" *ngFor="let item of purchases">
      <div class="col-sm-1">
        <img (click)="removeAlbum(item)" id="remove" src="./../resources/images/remove.png">
      </div>
      <div class="col-sm-6">
      {{ item.name }}
      </div>
      <div id="price" class="col-sm-4">
      {{ "$" + item.price + ".00" }}
      </div>
    </div>
    <hr>
    <h4 id="total"><strong>Total: {{ "$" + total + ".00" }}
    <button class="btn pull-right" id="checkout" (click)="error($event)">Checkout</button>
    </strong></h4>
  `
})

export class CartComponent {
  @Input() purchases: Album[];
  @Input() total: number;
  @Output() clickSenderRemove = new EventEmitter();
  public album: Album;

  removeAlbum(albumToRemove: Album) {
    this.clickSenderRemove.emit(albumToRemove);
  }

  error() {
    alert("Sorry, this feature is not available in beta.");
  }

}
