//import { test, expect, request } from '@playwright/test';
//import { APIUtils } from '.utils/APIUtils';
const { test, expect, request } = require('@playwright/test');
const {APIUtils} = require('./APIUtils'); 
const loginPayLoad = { userEmail: "vprabhakara@gmail.com", userPassword: "WelcomeJob123" };
const orderPayLoad = { orders: [{ country: "United", productOrderedId: "6ada5554a90a419aa8226ad6" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };
 
let response ={};
test.beforeAll(async () => {
  const apiContext = await request.newContext();
 const apiUtils = new APIUtils(apiContext, loginPayLoad);
  response = await apiUtils.createOrder(orderPayLoad);
 
})
 
 
//create order is success
test('@SP Place the order', async ({ page }) => {
  await page.addInitScript(value => {
 
    window.localStorage.setItem('token', value);
  }, response.token);
  await page.goto("https://rahulshettyacademy.com/client");
 
 
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async route => {
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
     await route.fulfill(
        {
          response,
          body, 
 
        });
      //intercepting response -APi response-> { playwright fakeresponse}->browser->render data on front end
    });
 
  await page.locator("button[routerlink*='myorders']").click();
  await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")
 
  console.log(await page.locator(".mt-4").textContent());
 
 
 
});