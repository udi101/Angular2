import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


//services
import { WorkerService } from './core/worker.service';
import { AuthService } from './user/auth.service';

//  Components
import {
  GrandFatherComponent,
  FatherComponent,
  GrandchildComponent
} from './grandfather/index';

import {
  WorkerContainerComponent,
  WorkerListComponent
} from './workers/index'

// Guards
import { RouteGuardService } from './core/routeGuard.service';
import { P404Component } from './404/p404.component';
import { FoodComponent } from './food/food.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkerContainerComponent,
    WorkerListComponent,
    GrandFatherComponent,
    FatherComponent,
    GrandchildComponent,
    P404Component,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'Grandfather', component: GrandFatherComponent, canActivate: [RouteGuardService] },
      {
        path: 'Worker', component: WorkerContainerComponent,
        canActivate: [RouteGuardService],
        canDeactivate: ['canDeactivateWorker'],
        resolve: { workers: RouteGuardService }
      },
      {
        path: 'Worker/:id', component: WorkerContainerComponent,
        canActivate: [RouteGuardService],
        resolve: { workers: RouteGuardService }
      },
      { path: 'Food', component: FoodComponent},
      { path: 'User', loadChildren: 'app/user/user.module#UserModule' },   // טעינת ניווט משני
      { path: 'Event', loadChildren: 'app/event/event.module#EventsModule' },  // טעינת ניווט משני
      { path: '', component: WorkerContainerComponent, canActivate: [RouteGuardService] },
      { path: '**', component: P404Component, canActivate: [RouteGuardService] }
    ])
  ],
  providers: [
    RouteGuardService,
    AuthService,
    WorkerService,
    {
      provide: 'canDeactivateWorker',
      useValue: canDeactivateWorkerFunction
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


function canDeactivateWorkerFunction(component: WorkerContainerComponent): boolean {
  if (component.isDirty)  // מאפשר יציאה  
    return window.confirm("Are you sure you want to exit?");
  else
    return true;
}

