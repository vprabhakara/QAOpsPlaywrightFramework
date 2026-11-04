const {test , expect,request} = require('@playwright/test');
const payload = {userEmail: "vprabhakara@gmail.com", userPassword: "WelcomeJob123"};
let token="";
const orderPayload ={orders: [{country: "United States", productOrderedId: "6960eac0c941646b7a8b3e68"}]};
let orderId :string = "";
test.beforeAll( async()=>
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils(apiContext,loginPayload);

    
   const response =  await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",{
        data: payload
})

expect(response.ok()).toBeTruthy();

const responseJson = await response.json();
 token = responseJson.token;

console.log(token);

//create an order via API call

const orderResponse  = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
    {
        data : orderPayload,
        headers :{
            Authorization : token,
            'Content-type' : 'application/Json',
        },
       }

      
);

 const orderResponseJson = await orderResponse.json();
 console.log(orderResponseJson);
console.log("status:", orderResponse.status());
console.log("body:", await orderResponse.text());
 // expect(orderResponse.ok()).toBeTruthy();
expect(orderResponseJson.orders, "response had no orders").toBeDefined();

  orderId = await orderResponseJson.orders[0];
 console.log(orderId);

})


test.beforeEach( ()=>

    {


    }


)

test("Sign In to Client Dashboard ", async ({page}) =>
{
    

    /*await page.locator("#userEmail").fill("vprabhakara@gmail.com");
    await page.locator("#userPassword").fill("WelcomeJob123");

    await page.locator("#login").click();
    */
  await page.addInitScript((value:string)=>
   {
    window.localStorage.setItem('token',value);
   },token );

   await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    //
   
    await page.waitForLoadState("networkidle");
     await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);



});

test("View the OrderId created from API", async ({page}) =>
{
     await page.addInitScript((value:string)=>
   {
    window.localStorage.setItem('token',value);
   },token );
    await page.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");

    await page.locator(".btn.btn-custom[routerlink='/dashboard/myorders']").click();

let rows = await page.locator(".table-bordered tr");

for (let i=0;i<await rows.count();i++)
{
 const rowOrderId = await rows.nth(i).locator("th").textContent();
 console.log(rowOrderId);

 if(orderId.includes(rowOrderId))
  {
    rows.nth(i).locator("button").first().click();
    await page.pause();
    break;

  }
}
console.log(orderId);

});
