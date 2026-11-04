
class DashboardPage
{

    constructor (page)
    {
        this.products = page.locator(".card-body");
        this.productText = page.locator("[routerlink*='cart']");
        this.cart = page.locator("[routerlink*='cart']");


 
    }

    async searchProduct(productName)
    {
        
     const titles = await this.productText.allTextContents();
     const products = await this.products;
     const count = await this.products.count();

     for(let i=0;i<count;i++)
     {
       if(await this.products.nth(i).locator("b").textContent() === productName)
    {    console.log("product Name found");

    await this.products.nth(i).locator("text= Add To Cart").click();
    break;
    }
     }
      
    }

    async navigateToCart()
    {
 await this.cart.click();
     /*await this.page.locator("div li").first().waitFor();

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
       */
    }



}

module.exports = { DashboardPage };