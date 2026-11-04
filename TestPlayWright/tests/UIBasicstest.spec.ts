import {test , expect} from '@playwright/test';

//const test = require('@playwright/test');

test(`@test First playwright test`,async ({browser})=>
{
   const context = await browser.newContext();
  const page = await  context.newPage();
   await  page.goto("http://rahulshettyacademy.com");
 const title =   await expect(page).toHaveTitle("Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training");
   console.log (await page.title());





});

test ('sign In to Login Page', async ({browser,page}) =>
{
      await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
      await page.locator('#username').fill("VaniTest");
      await page.locator('#password').fill("Learning@830$3mK2");
      await page.locator('#signInBtn').click();
      console.log(await page.locator("[style*='block']").textContent());
      await expect(page.locator("[style*='block']")).toContainText('Incorrect');
      const userName = page.locator('#username');
      const signIn = page.locator('#signInBtn');

      await userName.fill(" ");
      await userName.fill("rahulshettyacademy");
      await signIn.click();

      console.log(await page.locator(".card-body a").first().textContent());
      console.log(await page.locator(".card-body a").nth(1).textContent());
         

   

}
);

test("Sign In to Client Dashboard ", async ({browser,page}) =>
{
    await page.goto("http://rahulshettyacademy.com/client/dashboard");

    await page.locator("#userEmail").fill("vprabhakara@gmail.com");
    await page.locator("#userPassword").fill("WelcomeJob123");
    await page.locator("#login").click();
     await page.waitForLoadState("networkidle");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);



});


test("Test handling dropdowns" , async ({page})=>
{
  await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    
      await page.locator('#username').fill("rahulshettyacademy");
      await page.locator('#password').fill("Learning@830$3mK2");
      const dropdown = await page.locator("select.form-control");
      await dropdown.selectOption("consult");
      const radioBtn = page.locator(".radiotextsty");
      await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect (radioBtn.last()).toBeChecked();
    const documentsLink = page.locator("[href*='documents-request']");

    expect(documentsLink).toHaveAttribute("class","blinkingText");

    //await page.pause();

});

test(`@test Handling Child windows`, async ({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  
 const documentsLink = page.locator("[href*='documents-request']");
 
 const [newPage] = await Promise.all(
 [ context.waitForEvent('page'),
    documentsLink.click()
 ]
 )
 const text = await newPage.locator(".red").textContent()
 console.log(text);
 
 const arrayText  = text.split("@");
 const domain = arrayText[1].split(" ")[0];
 console.log(domain);

await page.locator('#username').fill(domain);



});

test("Search the product title", async ({browser,page}) =>
{

    const productName = "ZARA COAT 3";
    const email ="vprabhakara@gmail.com";
    const password = "WelcomeJob123";

    await page.goto("http://rahulshettyacademy.com/client");
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole("button", {name:"Login"}).click();
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


});

test("@test Playwright only locators", async ({ page }) =>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.getByLabel("Check me out if you Love IceCreams!").click();
 await page.getByLabel("Employed").check();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByPlaceholder("Password").fill("test");
 await page.getByRole("button", {name:'Submit'}).click();
 await page.getByRole("link",{name :"shop"}).click();
 await page.locator(".card-body").filter({hasText : "Nokia Edge"}).getByRole("button").click();
}


);