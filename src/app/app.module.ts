import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { firebaseConfig} from '../environments/firebase.config';
import { AngularFireModule} from 'angularfire2/index';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
