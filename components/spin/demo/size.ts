import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-spin-size',
  template: `
    <nz-spin [nzSize]="'small'"></nz-spin>
    <nz-spin></nz-spin>
    <nz-spin [nzSize]="'large'"></nz-spin>`,
  styles  : [
      `
      nz-spin {
        display: inline-block;
        margin-right: 16px;
      }
    `
  ]
})
export class NzDemoSpinSizeComponent {
}
