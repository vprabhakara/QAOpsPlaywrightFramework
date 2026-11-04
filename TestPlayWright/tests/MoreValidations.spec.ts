import {test , expect} from '@playwright/test';

test("Screenshot & Visual Comparision", async({page}) =>
{
 await page.goto("https://rahulshettyacademy.com/AutomationPractice");
 await expect(page.locator("#displayed-text")).toBeVisible();
 await page.locator("#hide-textbox").click();
 await page.screenshot({path:'screenshot.png'});
 await expect(page.locator("displayed-text")).toBeHidden(); 

}
);

test("Screen Comparisons and matching", async({page})=>
{
   await page.goto("https://myapex.apexsystems.com/");
    expect(await page.screenshot()).toMatchSnapshot('landing1.png');



}
)