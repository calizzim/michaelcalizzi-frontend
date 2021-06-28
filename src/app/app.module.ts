import { SignupComponent } from './components/signup/signup.component';
import { BackendRequestService } from './services/backend-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { McalizziFormComponent } from './components/mcalizzi-form/mcalizzi-form.component';
import { LoadFormGuard } from './guards/load-form.guard';
import { VarToStringPipe } from './pipes/var-to-string.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BudgetToolComponent } from './components/budget-tool/budget-tool.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    McalizziFormComponent,
    VarToStringPipe,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    BudgetToolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'signup', 
        component: SignupComponent, 
        canActivate: [LoadFormGuard],
        data: { templateName: 'user' }
      },
      {
        path: 'login', 
        component: LoginComponent, 
        canActivate: [LoadFormGuard],
        data: { templateName: 'login' }
      },
      {
        path: 'budgetTool', 
        component: BudgetToolComponent,
        canActivate: [AuthGuard,LoadFormGuard],
        data: { templateName: 'salaryInfo' }
      },
      {
        path: '', 
        component: HomeComponent, 
      },
    ])
  ],
  providers: [
    BackendRequestService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
