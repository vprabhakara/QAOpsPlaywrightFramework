import {test,expect, BrowserContext} from '@playwright/test';
     let webContext:BrowserContext;

test.beforeAll(async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();

       await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
     await page.locator("#userEmail").fill("vprabhakara@gmail.com");
    await page.locator("#userPassword").fill("WelcomeJob123");

    await page.locator("#login").click();

   
  /*await page.addInitScript((value:string)=>
   {
    window.localStorage.setItem('token',value);
   },token );

   */
    
   
    await page.waitForLoadState("networkidle");
    await context.storageState({path:'state.json'});
    webContext = await browser.newContext({storageState:'state.json'});
   //  await page.locator(".card-body b").first().waitFor();
    //const titles = await page.locator(".card-body b").allTextContents();
    //console.log(titles);

})

test("Search the product title", async ({browser}) =>
{

    const productName = "ZARA COAT 3";
   // const email ="vprabhakara@gmail.com";
    //const password = "WelcomeJob123";
     const page = await webContext.newPage();
     
    await page.goto("http://rahulshettyacademy.com/client");

  /*  await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole("button", {name:"Login"}).click();
     await page.waitForLoadState("networkidle");
     */
     const titles = await page.locator(".card-body b").allTextContents();
     const products = await page.locator(".card-body");
     const count = await products.count();

     for(let i=0;i<count;i++)
     {
       if(await products.nth(i).locator("b").textContent() === productName)
    {    console.log("product Name found");

    await products.nth(i).locator("text= Add To Cart").click();
    break;
    }
     }
    
     await page.locator("[routerlink*='cart']").click();
     await page.locator("div li").first().waitFor();

     await page.locator("text=Checkout").click();
     await page.locator("[placeholder='Select Country']").pressSequentially("United");
     const dropdown = await page.locator(".ta-results");
     await dropdown.waitFor();
     const OptionsCount = await dropdown.locator(".ta-item").count();
     
     for (let i=0;i<OptionsCount;i++)
     { const text = await dropdown.locator(".ta-item").nth(i).textContent();
       if( text === " United States")
       {
       await dropdown.locator(".ta-item").nth(i).click();
           break;
       }
     }



await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");

 const orderId = await page.locator("label[class='ng-star-inserted']").textContent();
console.log(orderId);

await page.locator(".btn-custom[routerlink='/dashboard/myorders']").click();

let rows = page.locator(".table-bordered tr")

for (let i=0;i<await rows.count();i++)
{
 const rowOrderId = await rows.nth(i).locator("th").textContent();

 if(orderId.includes(rowOrderId))
  {
    rows.nth(i).locator("button").first().click();
    await page.pause();
    break;

  }

}


});