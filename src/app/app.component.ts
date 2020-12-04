import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  DoCheck,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterContentInit,
  AfterViewInit,
  AfterContentChecked,
  AfterViewChecked
} from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements
OnInit,
OnChanges,
DoCheck,
OnDestroy,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit {
  constructor(){
    this.user = {
      name: 'qiang.c.chen',
      id: 1
    };
    this.name = 'dennis';
  }

  title = 'angular-life-demo';

  public user: any;
  public name: string;

  ngOnInit(): void {
    console.log('---- root init ----');
    setTimeout(() => {
      this.user.id = 2;
      console.log('---- root updated id ---- root');
    }, 10000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('---- root on change ---- root', changes);
  }
  ngDoCheck(): void {
      console.log('---- root do check ---- root');
  }
  ngOnDestroy(): void {
    console.log('---- root destroy ---- root');
  }
  ngAfterContentInit(): void {
    console.log('---- root content init ---- root');
  }
  ngAfterContentChecked(): void {
    console.log('---- root content checked ---- root');
  }
  ngAfterViewChecked(): void {
    console.log('---- root view checked ---- root');
  }
  ngAfterViewInit(): void {
    console.log('---- root view init ---- root');
  }
}
