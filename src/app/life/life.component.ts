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
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {
  constructor(private cd: ChangeDetectorRef) { }

  @Input() user: any;
  @Input() name: string = '';

  private oldId: any;
  public localName = '';

  ngOnInit(): void {
    console.log('---- init ----');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('---- on change ----', changes);
    this.oldId = this.user.id;
  }
  ngDoCheck(): void {
    if (this.oldId !== this.user.id) {
      this.cd.markForCheck();
      console.log('---- do check ----');
    }
  }
  ngOnDestroy(): void {
    console.log('---- destroy ----');
  }

  ngAfterContentInit(): void {
    console.log('---- content init ----');
  }
  ngAfterContentChecked(): void {
    console.log('---- content checked ----');
  }
  ngAfterViewChecked(): void {
    console.log('---- view checked ----');
  }
  ngAfterViewInit(): void {
    console.log('---- view init ----');
  }
}
