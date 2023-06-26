import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CobranzasComponent } from './components/cobranzas/cobranzas.component'
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErrorComponent } from './components/error/error.component';
import { SoonComponent } from './components/soon/soon.component'

@NgModule({
  declarations: [
    AppComponent,
    CobranzasComponent,
    HomeComponent,
    NavbarComponent,
    ErrorComponent,
    SoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
