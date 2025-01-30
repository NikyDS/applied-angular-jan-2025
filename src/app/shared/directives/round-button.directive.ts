import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: 'button[appRound]',
})
export class RoundButtonDirective implements OnInit {
  el = inject(ElementRef);
  nativeEl: HTMLButtonElement;

  variant = input<'primary' | 'accent'>('primary');

  constructor() {
    this.nativeEl = this.el.nativeElement as HTMLButtonElement;
  }
  ngOnInit(): void {
    const v = this.variant() === 'primary' ? 'btn-primary' : 'btn-accent';
    this.nativeEl.classList.add('btn', 'btn-circle', 'btn-sm', v);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.nativeEl.classList.add('ring-4', 'ring-yellow-100');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.nativeEl.classList.remove('ring-4', 'ring-yellow-100');
  }
}
