import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found';
import { HeaderComponent } from './header';
import { AppMaterialModule } from '../../app.material.module';
@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    AppMaterialModule
  ]
})
export class ComponentsModule { }
