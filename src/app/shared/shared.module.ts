import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './components/header/header.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSortModule} from '@angular/material/sort';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';


const materialModules = [
  MatSliderModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  MatCardModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatButtonModule,
  MatToolbarModule,
  ReactiveFormsModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    MatToolbarModule,
    MatListModule,
    CommonModule
  ],
  providers: [],
  exports: [...materialModules, HeaderComponent, FlexLayoutModule],

})
export class SharedModule {

}
