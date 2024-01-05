import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';

import { CardModule, } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';
import { UserService } from "../service/user.service";
import { NotificationService } from "../service/notification.service";
import { AuthInterceptor } from "../interceptor/auth.interceptor";
import { AuthenticationGuard } from "../guard/authentication.guard";
import { AuthenticationService } from "../service/authentication.service";
import { ExportService } from "../service/dist/export-service";
import { StockService } from "../service/stock.service";




@NgModule({
  







  providers: [UserService, NotificationService, StockService, MessageService, AuthenticationGuard, AuthenticationService,ExportService,
    ConfirmationService, AuthenticatorResponse,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],

})
export class CoreModule {



}

