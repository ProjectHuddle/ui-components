import { newE2EPage } from "@stencil/core/testing";

describe("draggable", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<draggable></draggable>");
    const element = await page.find("draggable");
    expect(element).toHaveClass("hydrated");
  });

  it("renders changes to the name data", async () => {
    const page = await newE2EPage();

    await page.setContent("<draggable></draggable>");
    const component = await page.find("draggable");
    const element = await page.find("draggable >>> div");
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty("test", "James");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
