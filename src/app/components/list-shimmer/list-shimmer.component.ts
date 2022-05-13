import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-shimmer',
  templateUrl: './list-shimmer.component.html',
  styleUrls: ['./list-shimmer.component.scss']
})
export class ListShimmerComponent {

  @Input() repeat: number = 1;
  @Input() subLines: number = 3;
  @Input() lineHeight = 'h-sm';
  @Input() lineWidth = 'w-30';
  @Input() background = '#fff';
  @Input() circleSize = 'md';
  @Input() hideCircle = false;
  @Input() marginX = '0px';
  @Input() marginY = '16px';

  get numberOfLines() {
    return new Array(this.repeat);
  }

  get numberOfSubLines() {
    return new Array(1);
  }

}
