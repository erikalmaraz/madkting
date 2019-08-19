import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './views/orders/order-parent/orders.component';
import { OrderListComponent } from './views/orders/order-list/order-list.component';
import { OrderDetailComponent } from './views/orders/order-detail/order-detail.component';

// Services
import { OrdersService } from './core/services/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    OrdersComponent,
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
