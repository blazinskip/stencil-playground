import { newE2EPage } from '@stencil/core/testing';

describe('test-vowel-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-vowel-input></test-vowel-input>');

    const element = await page.find('test-vowel-input');
    expect(element).toHaveClass('hydrated');
  });
});
