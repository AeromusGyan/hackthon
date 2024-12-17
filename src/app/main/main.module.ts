import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HackthonComponent } from './hackthon/hackthon.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    HackthonComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class MainModule { }
