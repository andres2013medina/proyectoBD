import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';



import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService  } from "./services/auth.service";
import { FirebaseService } from "./services/firebase.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListasComponent } from './components/listas/listas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListaComponent } from './components/lista/lista.component';
import { AddListaComponent } from './components/add-lista/add-lista.component';
import { EditListaComponent } from './components/edit-lista/edit-lista.component';





const appRoutes: Routes=[
  {path:'add-lista', component:AddListaComponent},
  {path: 'listas' , component:ListasComponent},
  {path: 'lista' , component:ListaComponent},
  {path: 'add-lista' , component:AddListaComponent},
  {path: 'edit-lista' , component:EditListaComponent},
  {path:'',component:HomeComponent},
]


   

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListasComponent,
    NavbarComponent,
    ListaComponent,
    AddListaComponent,
    EditListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
