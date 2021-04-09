import { SnipperInterceptor } from './shared/interceptors/spinner.interceptor';
import { SnipperModule } from './shared/components/snipper/snipper.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { HeaderModule } from './shared/components/header/header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    HeaderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SnipperModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass: SnipperInterceptor, multi:true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
