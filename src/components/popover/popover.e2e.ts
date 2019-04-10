import { newE2EPage } from '@stencil/core/testing';

describe('popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<popover></popover>');
    const element = await page.find('popover');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<popover></popover>');
    const component = await page.find('popover');
    const element = await page.find('popover >>> div');
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty('test', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
