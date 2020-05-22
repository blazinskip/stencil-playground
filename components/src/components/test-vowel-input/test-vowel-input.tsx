import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'test-vowel-input',
  styleUrl: 'test-vowel-input.css'
})
export class NameEntry {

  @Prop() value: string;
  private parsedValue: string;

  @Watch('value')
  handleValueChange(newValue: string) {
    this.parseValue(newValue);
  }

  componentWillLoad() {
    this.parseValue(this.value);
  }

  render() {
    return (
      <div>
        <input class="input" placeholder="Enter Only Vowels"
               value={this.parsedValue}
               onKeyDown={(event: UIEvent) => this.limitToVowels(event as any as KeyboardEvent)}/>
      </div>
    );
  }

  private limitToVowels(evt: KeyboardEvent) {
    if (this.isEditKey(evt) || this.isVowelKey(evt)) {
      return;
    }

    evt.preventDefault();
  }

  private isEditKey(evt: KeyboardEvent) {
    return evt.keyCode === 46 || evt.keyCode === 8 || evt.keyCode === 9 || evt.keyCode === 27 || evt.keyCode === 13 ||
      evt.keyCode === 110 || evt.keyCode === 190 ||
      (evt.keyCode == 65 && (evt.ctrlKey === true || evt.metaKey === true)) ||
      (evt.keyCode == 67 && (evt.ctrlKey === true || evt.metaKey === true)) ||
      (evt.keyCode == 88 && (evt.ctrlKey === true || evt.metaKey === true)) ||
      (evt.keyCode >= 35 && evt.keyCode <= 39);
  }

  private isVowelKey(evt: KeyboardEvent) {
    return !evt.ctrlKey && !evt.metaKey &&
      (evt.keyCode === 65 || evt.keyCode === 69 || evt.keyCode === 73 || evt.keyCode === 79 || evt.keyCode === 85);
  }

  private parseValue(str: string): void {
    this.parsedValue = (str || '').replace(/[^AEIOU]/ig, '');
  }
}
