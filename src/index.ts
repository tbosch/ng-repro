import {NgModule, Component, Directive, HostListener} from '@angular/core';

@Component({
  selector: 'comp',
  templateUrl: 'index.html'
})
export class MainComp {}

@Directive({
  selector: '[someDir]'
})
export class SomeDirective {
  @HostListener('click', ['$event'])
  onClick(event: any) {}
}

@NgModule({
  declarations: [MainComp, SomeDirective],
})
export class MainModule {}
