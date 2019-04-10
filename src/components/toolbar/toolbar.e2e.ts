import { newE2EPage } from "@stencil/core/testing";

describe("toolbar", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<toolbar></toolbar>");
    const element = await page.find("toolbar");
    expect(element).toHaveClass("hydrated");
  });

  it("renders changes to the name data", async () => {
    const page = await newE2EPage();

    await page.setContent("<toolbar></toolbar>");
    const component = await page.find("toolbar");
    const element = await page.find("toolbar >>> div");
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty("test", "James");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
