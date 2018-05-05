import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MasonryModule } from './masonry/masonry.module';
import { Masonry } from './masonry/masonry-token';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoryUrlsService } from './category-urls.service';
import { GameCardComponent } from './game-card/game-card.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from './routing/routing.module';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { SideNavMenuModule} from './side-nav-menu/module';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCardTitle,
  MatToolbarModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatIconModule,
  MatChipsModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from './carousel/ngu-carousel.module';
import { CarouselCardComponent } from './carousel-card/carousel-card.component';
import { RecommendationService } from './recommendation.service';


const masonryProviders = [
  { provide: Masonry, useFactory: () => window['Masonry'] }
];

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    CarouselCardComponent
  ],
  imports: [
    SideNavMenuModule,
    BrowserModule,
    MatAutocompleteModule,
    MatIconModule,
    MatChipsModule,
  MatButtonModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
    MasonryModule.forRoot(masonryProviders),
    HttpClientModule,
    MatDialogModule,
    RouterModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NguCarouselModule
  ],
  providers: [
    CategoryUrlsService,
    RecommendationService       
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
