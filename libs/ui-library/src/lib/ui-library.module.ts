import { MaterialModule } from '@food/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [ToolbarComponent, WildComponent, LoginComponent],
  exports: [LoginComponent, WildComponent, ToolbarComponent],
})
export class UiLibraryModule {}
