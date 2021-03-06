import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PercentualComponent} from './percentual.component';
import {PercentualMaskDirective} from "./percentual.mask.directive";
import {FormsModule} from "@angular/forms";
import {NgxCurrencyModule} from 'ngx-currency';

export * from './percentual.component';
export * from './percentual.mask.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxCurrencyModule
  ],
  declarations: [
    PercentualComponent,
    PercentualMaskDirective
  ],
  exports: [
    PercentualComponent,
    PercentualMaskDirective
  ]
})
export class PercentualModule {}
