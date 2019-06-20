import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SearchComponent } from './components/shared/header/search.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { SiComponent } from './components/concepts/si/si.component';
import { PbComponent } from './components/concepts/pb/pb.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { EbComponent } from './components/concepts/eb/eb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';
import { TbComponent } from './components/concepts/tb/tb.component';
import { StructuralDirectivesComponent } from './components/concepts/structural-directives/structural-directives.component';
import {Routes,RouterModule} from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AddContactComponent } from './components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contacts/contact-details/contact-details.component';
import { AboutComponent } from './components/about/about.component';
import {HttpModule} from'@angular/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import {AuthGuard} from '../app/guards/auth.guard'
import {EllipsisPipe} from '../app/pipes/ellipsis.pipe'
const APP_ROUTES:Routes=[
  {path:'',component:ConceptsComponent},
  { path: 'concepts',component:ConceptsComponent },
  { path: 'contacts',component:ContactsComponent },
  { path: 'contacts/:id',component:ContactDetailsComponent },
  { path: 'contacts/new',component:AddContactComponent}, //,canActivate:[AuthGuard] -->this command will be usefull block particular method.
  { path: 'about',component:AboutComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    NavComponent,
    ConceptsComponent,
    SiComponent,
    PbComponent,
    CpbComponent,
    EbComponent,
    CebComponent,
    TbComponent,
    StructuralDirectivesComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent,
    AboutComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpModule,
     ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
