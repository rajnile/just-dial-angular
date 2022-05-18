import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { FooterComponent } from './footer/footer.component';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { ListItemComponent } from './main-container/list-item/list-item.component';
import { ItemComponent } from './main-container/item/item.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const RoutesConfig: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'list',
    component: ListItemComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    FooterComponent,
    FooterMenuComponent,
    MainContainerComponent,
    ListItemComponent,
    ItemComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(RoutesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
