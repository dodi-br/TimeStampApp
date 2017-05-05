  import { NgModule, ErrorHandler } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
  import { MyApp } from './app.component';

  import { DatePickerModule } from 'datepicker-ionic2';

  import { HomePage } from '../pages/home/home';
  import { TabsPage } from '../pages/tabs/tabs';
  import { Login } from '../pages/login/login';
  import { StampDetail } from '../pages/stamp-detail/stamp-detail';
  import { Register} from '../pages/register/register';
  import { Leave } from '../pages/leave/leave';
  import { Leavelist } from '../pages/leavelist/leavelist';
  import { Profile } from '../pages/profile/profile';
  import { History } from '../pages/history/history';
  import { Request } from '../pages/request/request';

  import { StatusBar } from '@ionic-native/status-bar';
  import { SplashScreen } from '@ionic-native/splash-screen';

  @NgModule({
    declarations: [
      MyApp,
      HomePage,
      TabsPage,
      Login,
      StampDetail,
      Register,
      Leave,
      Leavelist,
      Profile,
      History,
      Request
    ],
    imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      DatePickerModule,
    ],
    bootstrap: [IonicApp],
    entryComponents: [
      MyApp,
      HomePage,
      TabsPage,
      Login,
      StampDetail,
      Register,
      Leave,
      Leavelist,
      Profile,
      History,
      Request
    ],
    providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
  })
  export class AppModule {}
