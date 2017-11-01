import {NgModule, Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'comp',
  templateUrl: 'index.html'
})
export class MainComp {}

@NgModule({
  declarations: [MainComp],
  imports: [CommonModule]
})
export class MainModule {}