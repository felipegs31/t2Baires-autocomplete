import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ApiService } from './services/api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDropComponent } from './card-drop/card-drop.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ClickOutDirective } from './directives/click-out.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardDropComponent,
    SafeHtmlPipe,
    ClickOutDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
