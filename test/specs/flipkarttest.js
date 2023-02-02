describe('Flipkart Testing Suite',async()=>{
    xit('First',async()=>{
        await browser.maximizeWindow()
        await browser.url('https://www.flipkart.com/')
        await browser.pause(1000)


        await $("[class='_2KpZ6l _2doB4z']").click()
        await browser.pause(1000)

        await browser.pause(1000)
        
        await $("._3704LK").setValue("Realme 7 back covers")
        await browser.pause(1000)


        await $(".L0Z3Pu").click()
        await browser.pause(1000)


        await $("[data-id='ACCFX2SU6DXPH8WB']").scrollIntoView()
        await browser.pause(1000)

        await $("[data-id='ACCFX2SU6DXPH8WB']").click()
        // await browser.pause(2000)
        await browser.switchWindow('ZYNK CASE Back Cover for Realme 7, Realme Narzo 20 Pro')
        // await expect(browser).toHaveTitleContaining("ZYNK")

        // await browser.switchWindow('https://www.flipkart.com/zynk-case-back-cover-realme-7-narzo-20-pro/p/itm82b303a242ea0?pid=ACCFX2SU6DXPH8WB&lid=LSTACCFX2SU6DXPH8WBE6I4VP&marketplace=FLIPKART&q=realme+7+back+cover&store=tyy%2F4mr%2Fq2u&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_na&fm=organic&iid=b0e06f68-8d63-4a2f-8952-06bb04351f09.ACCFX2SU6DXPH8WB.SEARCH&ppt=hp&ppn=homepage&ssid=9rm8gpslvk0000001674727301433&qH=529610df07658577')
        // await browser.pause(2000)
        // await browser.url('https://www.flipkart.com/zynk-case-back-cover-realme-7-narzo-20-pro/p/itm82b303a242ea0?pid=ACCFX2SU6DXPH8WB&lid=LSTACCFX2SU6DXPH8WBE6I4VP&marketplace=FLIPKART&q=realme+7+back+cover&store=tyy%2F4mr%2Fq2u&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_2_9_na_na_na&fm=organic&iid=b0e06f68-8d63-4a2f-8952-06bb04351f09.ACCFX2SU6DXPH8WB.SEARCH&ppt=hp&ppn=homepage&ssid=9rm8gpslvk0000001674727301433&qH=529610df07658577')
        await $("[class='_2KpZ6l _2U9uOA _3v1-ww']").click()
        // console.log(btns.length)
        // await btns[0].click()
        const linkss = await $$("._2I9KP_")
        await linkss[0].moveTo()
        await browser.pause(3000)

    })

    it('Hover',async()=>{
        await browser.maximizeWindow()
        await browser.url('https://www.flipkart.com/')
        await browser.pause(1000)


        await $("[class='_2KpZ6l _2doB4z']").click()
        await browser.pause(1000)

        await browser.pause(1000)
        
        await $("._3704LK").setValue("Realme 7 back covers")
        await browser.pause(1000)


        await $(".L0Z3Pu").click()
        await browser.pause(1000)


        const linkss = await $$("._2I9KP_")
        await linkss[0].moveTo()
        console.log(linkss.length)
        await browser.pause(2000)
    })
})