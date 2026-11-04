# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: UIBasicstest.spec.ts >> @test Playwright only locators
- Location: tests\UIBasicstest.spec.ts:179:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.card-body').filter({ hasText: 'Nokia Edge' }).getByRole('button')

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - navigation [ref=f1e5]:
    - link "ProtoCommerce" [ref=f1e6] [cursor=pointer]:
      - /url: "#"
    - list [ref=f1e7]:
      - listitem [ref=f1e8]:
        - link "Home" [ref=f1e9] [cursor=pointer]:
          - /url: /angularpractice
      - listitem [ref=f1e10]:
        - link "Shop" [ref=f1e11] [cursor=pointer]:
          - /url: /angularpractice/shop
  - generic [ref=f1e12]:
    - navigation [ref=f1e13]:
      - generic [ref=f1e14]:
        - link "ProtoCommerce Home" [ref=f1e15] [cursor=pointer]:
          - /url: "#"
        - list [ref=f1e17]:
          - listitem [ref=f1e18]:
            - generic [ref=f1e19] [cursor=pointer]:
              - text: Checkout ( 0 )
              - generic [ref=f1e20]: (current)
    - generic [ref=f1e22]:
      - generic [ref=f1e23]:
        - heading "Shop Name" [level=1] [ref=f1e24]
        - generic [ref=f1e25]:
          - link "Category 1" [ref=f1e26] [cursor=pointer]:
            - /url: "#"
          - link "Category 2" [ref=f1e27] [cursor=pointer]:
            - /url: "#"
          - link "Category 3" [ref=f1e28] [cursor=pointer]:
            - /url: "#"
      - generic [ref=f1e29]:
        - generic [ref=f1e30]:
          - list [ref=f1e31]:
            - listitem [ref=f1e32]
            - listitem [ref=f1e33]
            - listitem [ref=f1e34]
          - listbox [ref=f1e35]:
            - img "First slide" [ref=f1e37]
          - button "Previous" [ref=f1e38] [cursor=pointer]
          - button "Next" [ref=f1e41] [cursor=pointer]
        - generic [ref=f1e44]:
          - generic [ref=f1e46]:
            - link [ref=f1e47] [cursor=pointer]:
              - /url: "#"
            - generic [ref=f1e48]:
              - heading [level=4] [ref=f1e49]:
                - link "iphone X" [ref=f1e50] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=f1e51]
              - paragraph [ref=f1e52]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=f1e53]:
              - button "Add " [ref=f1e54] [cursor=pointer]:
                - text: Add
                - generic [ref=f1e55]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=f1e57]:
            - link [ref=f1e58] [cursor=pointer]:
              - /url: "#"
            - generic [ref=f1e59]:
              - heading [level=4] [ref=f1e60]:
                - link "Samsung Note 8" [ref=f1e61] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=f1e62]
              - paragraph [ref=f1e63]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=f1e64]:
              - button "Add " [ref=f1e65] [cursor=pointer]:
                - text: Add
                - generic [ref=f1e66]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=f1e68]:
            - link [ref=f1e69] [cursor=pointer]:
              - /url: "#"
            - generic [ref=f1e70]:
              - heading [level=4] [ref=f1e71]:
                - link "Nokia Edge" [ref=f1e72] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=f1e73]
              - paragraph [ref=f1e74]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=f1e75]:
              - button "Add " [ref=f1e76] [cursor=pointer]:
                - text: Add
                - generic [ref=f1e77]: 
              - text: ★ ★ ★ ★ ☆
          - generic [ref=f1e79]:
            - link [ref=f1e80] [cursor=pointer]:
              - /url: "#"
            - generic [ref=f1e81]:
              - heading [level=4] [ref=f1e82]:
                - link "Blackberry" [ref=f1e83] [cursor=pointer]:
                  - /url: "#"
              - heading "$24.99" [level=5] [ref=f1e84]
              - paragraph [ref=f1e85]: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.
            - generic [ref=f1e86]:
              - button "Add " [ref=f1e87] [cursor=pointer]:
                - text: Add
                - generic [ref=f1e88]: 
              - text: ★ ★ ★ ★ ☆
    - contentinfo [ref=f1e89]:
      - paragraph [ref=f1e91]: Copyright © ProtoCommerce 2018
```

# Test source

```ts
  88  |  const [newPage] = await Promise.all(
  89  |  [ context.waitForEvent('page'),
  90  |     documentsLink.click()
  91  |  ]
  92  |  )
  93  |  const text = await newPage.locator(".red").textContent()
  94  |  console.log(text);
  95  |  
  96  |  const arrayText  = text.split("@");
  97  |  const domain = arrayText[1].split(" ")[0];
  98  |  console.log(domain);
  99  | 
  100 | await page.locator('#username').fill(domain);
  101 | 
  102 | 
  103 | 
  104 | });
  105 | 
  106 | test("Search the product title", async ({browser,page}) =>
  107 | {
  108 | 
  109 |     const productName = "ZARA COAT 3";
  110 |     const email ="vprabhakara@gmail.com";
  111 |     const password = "WelcomeJob123";
  112 | 
  113 |     await page.goto("http://rahulshettyacademy.com/client");
  114 |     await page.getByPlaceholder("email@example.com").fill(email);
  115 |     await page.getByPlaceholder("enter your passsword").fill(password);
  116 |     await page.getByRole("button", {name:"Login"}).click();
  117 |      await page.waitForLoadState("networkidle");
  118 |      const titles = await page.locator(".card-body b").allTextContents();
  119 |      const products = await page.locator(".card-body");
  120 |      const count = await products.count();
  121 | 
  122 |      for(let i=0;i<count;i++)
  123 |      {
  124 |        if(await products.nth(i).locator("b").textContent() === productName)
  125 |     {    console.log("product Name found");
  126 | 
  127 |     await products.nth(i).locator("text= Add To Cart").click();
  128 |     break;
  129 |     }
  130 |      }
  131 |     
  132 |      await page.locator("[routerlink*='cart']").click();
  133 |      await page.locator("div li").first().waitFor();
  134 | 
  135 |      await page.locator("text=Checkout").click();
  136 |      await page.locator("[placeholder='Select Country']").pressSequentially("United");
  137 |      const dropdown = await page.locator(".ta-results");
  138 |      await dropdown.waitFor();
  139 |      const OptionsCount = await dropdown.locator(".ta-item").count();
  140 |      
  141 |      for (let i=0;i<OptionsCount;i++)
  142 |      { const text = await dropdown.locator(".ta-item").nth(i).textContent();
  143 |        if( text === " United States")
  144 |        {
  145 |        await dropdown.locator(".ta-item").nth(i).click();
  146 |            break;
  147 |        }
  148 |      }
  149 | 
  150 | 
  151 | 
  152 | await page.locator(".action__submit").click();
  153 | await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
  154 | 
  155 |  const orderId = await page.locator("label[class='ng-star-inserted']").textContent();
  156 | console.log(orderId);
  157 | 
  158 | await page.locator(".btn-custom[routerlink='/dashboard/myorders']").click();
  159 | 
  160 | let rows = page.locator(".table-bordered tr")
  161 | 
  162 | for (let i=0;i<await rows.count();i++)
  163 | {
  164 |  const rowOrderId = await rows.nth(i).locator("th").textContent();
  165 | 
  166 |  if(orderId.includes(rowOrderId))
  167 |   {
  168 |     rows.nth(i).locator("button").first().click();
  169 |     await page.pause();
  170 |     break;
  171 | 
  172 |   }
  173 | 
  174 | }
  175 | 
  176 | 
  177 | });
  178 | 
  179 | test("@test Playwright only locators", async ({ page }) =>
  180 | {
  181 |  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  182 |  await page.getByLabel("Check me out if you Love IceCreams!").click();
  183 |  await page.getByLabel("Employed").check();
  184 |  await page.getByLabel("Gender").selectOption("Female");
  185 |  await page.getByPlaceholder("Password").fill("test");
  186 |  await page.getByRole("button", {name:'Submit'}).click();
  187 |  await page.getByRole("link",{name :"shop"}).click();
> 188 |  await page.locator(".card-body").filter({hasText : "Nokia Edge"}).getByRole("button").click();
      |                                                                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  189 | }
  190 | 
  191 | 
  192 | );
```