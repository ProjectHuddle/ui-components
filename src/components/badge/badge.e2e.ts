import { newE2EPage } from "@stencil/core/testing";

describe("badge", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<badge></badge>");
    const element = await page.find("badge");
    expect(element).toHaveClass("hydrated");
  });

  it("renders changes to the name data", async () => {
    const page = await newE2EPage();

    await page.setContent("<badge></badge>");
    const component = await page.find("badge");
    const element = await page.find("badge >>> div");
    expect(element.textContent).toEqual(`Hello World`);

    component.setProperty("test", "James");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`James`);
  });
});
