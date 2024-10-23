import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Hello } from './Hello';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>
      Hello, World! I'm {this.getText()}
      <Hello name={this.getText()} />
    </div>;
  }
}
