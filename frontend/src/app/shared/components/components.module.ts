import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found';
import { HeaderComponent } from './header';
import { AppMaterialModule } from '../../app.material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    AppMaterialModule,
    TranslateModule
  ]
})
export class ComponentsModule { }
