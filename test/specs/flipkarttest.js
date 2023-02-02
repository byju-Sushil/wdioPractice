describe('Flipkart Testing Suite',async()=>{
    it('First',async()=>{
        await browser.maximizeWindow()
        await browser.url('https://www.flipkart.com/')


        await $("[class='_2KpZ6l _2doB4z']").click()
        
        await $("._3704LK").setValue("Realme 7 back covers")


        await $(".L0Z3Pu").click()


        await $("[data-id='ACCFX2SU6DXPH8WB']").scrollIntoView()

        await $("[data-id='ACCFX2SU6DXPH8WB']").click()
        // await browser.pause(2000)
        await browser.switchWindow('ZYNK CASE Back Cover for Realme 7, Realme Narzo 20 Pro')
        // await expect(browser).toHaveTitleContaining("ZYNK")

        await $("[class='_2KpZ6l _2U9uOA _3v1-ww']").click()
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