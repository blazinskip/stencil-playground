import { newSpecPage } from '@stencil/core/testing';
import { TestVowelInput } from './test-vowel-input';

describe('test-vowel-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestVowelInput],
      html: `<test-vowel-input></test-vowel-input>`,
    });
    expect(page.root).toEqualHtml(`
      <test-vowel-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-vowel-input>
    `);
  });
});
