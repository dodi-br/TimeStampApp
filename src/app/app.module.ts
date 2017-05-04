  import { NgModule, ErrorHandler } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
  import { MyApp } from './app.component';
  import { DatePickerModule } from 'datepicker-ionic2';
  import { AboutPage } from '../pages/about/about';
  import { ContactPage } from '../pages/contact/contact';
  import { HomePage } from '../pages/home/home';
  import { TabsPage } from '../pages/tabs/tabs';
  import { Login } from '../pages/login/login';
  import { StampDetail } from '../pages/stamp-detail/stamp-detail';
  import { Register} from '../pages/register/register';
  import { Leave } from '../pages/leave/leave';
  import { Leavelist } from '../pages/leavelist/leavelist';
  import { StatusBar } from '@ionic-native/status-bar';
  import { SplashScreen } from '@ionic-native/splash-screen';

  @NgModule({
    declarations: [
      MyApp,
      AboutPage,
      ContactPage,
      HomePage,
      TabsPage,
      Login,
      StampDetail,
      Register,
      Leave,
      Leavelist
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      DatePickerModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      AboutPage,
      ContactPage,
      HomePage,
      TabsPage,
      Login,
      StampDetail,
      Register,
      Leave,
      Leavelist
    ],
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })
  export class AppModule {}
