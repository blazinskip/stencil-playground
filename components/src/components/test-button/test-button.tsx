import { Component, ComponentInterface, Event, EventEmitter, h, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.css',
  shadow: true,
})
export class TestButton implements ComponentInterface {
  @Prop() size: 'small' | 'default' | 'large' = 'default';
  @Event() clicked: EventEmitter<string>;

  @Listen('click')
  clickButton(ev) {
    console.log('button click', ev);
    this.buttonClicked();
  }

  buttonClicked() {
    this.clicked.emit('Message from web component');
  }

  getClass() {
    switch (this.size) {
      case 'small':
        return 'button button--small';
      case 'large':
        return 'button button--large';
      case 'default':
        return 'button';
      default:
        return 'button';
    }
  }

  render() {
    return (
      <button class={this.getClass()}>
        <slot></slot>
      </button>
    );
  }

}
