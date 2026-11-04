
 const {test, expect} = require('@playwright/test');
 const {POManager} = require('./pageobjectsDemo/POManager');
const dataset = JSON.parse(JSON.stringify(require("./utils/ClientAppPOTestData.json")));

for ( const data of dataset)
{

test(`@test Client App Login Search the product ${data.userName}`, async ({page}) =>
{

   // const productName = "ZARA COAT 3";
    //const userName ="vprabhakara@gmail.com";
    //const password = "WelcomeJob123";
     const poManager = new POManager(page);
 
   // await page.goto("http://rahulshettyacademy.com/client");
    const loginPage = poManager.getLoginPage();
       
    await loginPage.goTo();
    await loginPage.validLogin(data.userName,data.password);
   /* await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole("button", {name:"Login"}).click();
    */
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProduct(data.productName);
   await dashboardPage.navigateToCart();
/*

     await page.waitForLoadState("networkidle");
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

*/
});
}