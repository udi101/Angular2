import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BootstrapModule } from './common/bootstrap.module';

//services
import { WorkerService } from './core/worker.service';
import { AuthService } from './user/auth.service';

//  Components
import { NestedComponent } from './Nested/nested.component'
import {
  GrandFatherComponent,
  FatherComponent,
  GrandchildComponent
} from './grandfather/index';


// Directives
import { HighlightDirective } from './nested/highlight.directive';

// jQuery Service
// tslint:disable-next-line:class-name
// export class jQuery { }
export declare let jQuery: any; 
import { JQ_TOKEN } from './common/index';

import {
  WorkerContainerComponent,
  WorkerListComponent
} from './workers/index';

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
    FoodComponent,
    NestedComponent,
    HighlightDirective
  ],
  imports: [
    BootstrapModule,
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
      { path: 'Food', component: FoodComponent },
      { path: 'User', loadChildren: 'app/user/user.module#UserModule' },   // טעינת ניווט משני
      { path: 'Event', loadChildren: 'app/event/event.module#EventsModule' },  // טעינת ניווט משני
      { path: 'Nested', component: NestedComponent },
      { path: 'Bootstrap', loadChildren: 'app/common/bootstrap.module#BootstrapModule' },
      { path: '', component: WorkerContainerComponent, canActivate: [RouteGuardService] },
      { path: '**', component: P404Component, canActivate: [RouteGuardService] }
    ])
  ],
  providers: [
    RouteGuardService,
    AuthService,
    WorkerService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: 'canDeactivateWorker', useValue: canDeactivateWorkerFunction },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }


export function canDeactivateWorkerFunction(component: WorkerContainerComponent): boolean {
  if (component.isDirty)  // מאפשר יציאה  
    return window.confirm("Are you sure you want to exit?");
  else
    return true;
}