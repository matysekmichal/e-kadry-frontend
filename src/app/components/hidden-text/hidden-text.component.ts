import {Component, Input} from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityHidden from '@iconify/icons-ic/twotone-visibility-off';

@Component({
  selector: 'app-hidden-text',
  templateUrl: './hidden-text.component.html',
  styleUrls: ['./hidden-text.component.scss']
})
export class HiddenTextComponent {
  icVisibility = icVisibility;
  icVisibilityHidden = icVisibilityHidden;

  @Input() hiddenText: string;
  @Input() show = false;

  constructor() { }

  securedText() {
    return this.hiddenText.replace(/./g, '*');
  }

  toggleHiddenText() {
    this.show = !this.show;
  }
}
