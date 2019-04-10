import { newE2EPage } from '@stencil/core/testing';

describe('modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<modal></modal>');
    const element = await page.find('modal');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<modal></modal>');
    const component = await page.find('modal');
    const element = await page.find('modal >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
