const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  // Check that clicking the 'Draw' button displays div with id="choices"
  test("Draw button displays id='choices'", async () => {
    await driver.findElement(By.css('div[id="choices"]')).click();
    expect(await choicesDiv.isDisplayed()).toBe(true);
  });
  // Check that clicking the 'Add to Duo' button displays div with id="player-duo"
  test("Add to Duo button displays id='player-duo'", async () => {
    await driver.findElement(By.css('button[id="player-duo"]')).click();
    expect(await playerDuoDiv.isDisplayed()).toBe(true);

  });

});