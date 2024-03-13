import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDownloadImage]',
  standalone: true,
})
export class DownloadImageDirective {
  @Input() imageUrl!: string;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const link = document.createElement('a');
    link.href = this.imageUrl;
    link.download = 'image.jpg';

    link.click();
  }
}
