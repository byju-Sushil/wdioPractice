import { expect as expectchai } from 'chai';
describe('Complete practice',async()=>{
    it('Radio testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const radiobtn = await $("input[value='radio1']")
        radiobtn.click()
        console.log(await radiobtn.isSelected())
        
    })

    it('Autocomplete Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const autoComplete = await $("#autocomplete")
        await autoComplete.setValue("aus")
        await browser.pause(2000)

        const cList =await $$("[class='ui-menu-item'] div")

        for(let i=0;i<cList.length;i++){
            if(await cList[i].getText()=='Australia'){
                await cList[i].click()
                console.log(cList[i])
                break
            }
        }
        await browser.pause(2000)
    })

    it('Dropdown Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');
        const dropdown = await $("select")
        await dropdown.click()

        await dropdown.selectByAttribute('value','option1')
        await dropdown.selectByVisibleText("Option2")
        await dropdown.selectByIndex(3)
        console.log(await dropdown.getValue())

        await expectchai(await dropdown.getValue()).to.equal("option3")
    })

    it('Checkbox Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

        const cBox =await  $("#checkBoxOption2")

        await cBox.click()

        console.log(await cBox.isSelected())

        console.log(await $("#checkBoxOption1").isSelected())
    })

    it('New Window Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

        const newBtn = await $("#openwindow")

        await newBtn.click()

        await browser.switchWindow('http://www.qaclickacademy.com/')

        console.log(await browser.getTitle())

        await browser.closeWindow()

        await browser.switchWindow('https://rahulshettyacademy.com/AutomationPractice/')
        console.log(await browser.getTitle())

    })

    it('New Tab Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

        const newTab = await $("#opentab")

        await newTab.click()

        await browser.switchWindow('https://www.rahulshettyacademy.com/')

        console.log(await browser.getTitle())

        await browser.closeWindow()

        await browser.switchWindow('https://rahulshettyacademy.com/AutomationPractice/')
        console.log(await browser.getTitle())        
    })

    it('Back button testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

        const bText = await $(".blinkingText")

        await bText.click()
        console.log(await browser.getTitle())

        await browser.back()

        console.log(await browser.getTitle())


    })

    it('Alert Testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/');

        const box = await $("#name")

        await box.setValue("Sushil")

        const alertBtn = await $("#alertbtn")

        await alertBtn.click()
        await browser.pause(2000)
        console.log(await browser.isAlertOpen())

        expectchai(await browser.isAlertOpen()).to.be.true

        expectchai(await browser.getAlertText()).to.equal("Hello Sushil, share this practice page and share your knowledge")

        await browser.acceptAlert()

        await browser.pause(2000)

        const confirmBtn = await $("#confirmbtn")

        await confirmBtn.click()
        await browser.pause(2000)
        expectchai(await browser.isAlertOpen()).to.be.true

        // expectchai(await browser.getAlertText()).to.equal("Hello Sushil, share this practice page and share your knowledge")

        await browser.acceptAlert()

        await browser.pause(2000)

        await confirmBtn.click()
        await browser.pause(2000)

        await browser.dismissAlert()
    })

    it('Table testing',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await browser.maximizeWindow()
        await $("//body[1]/div[3]/div[1]/fieldset[1]/table[1]/tbody[1]").scrollIntoView()
        const tList =await $$("(//tbody)[1]/tr")
        console.log(tList.length)
        var sum=0
        for(var i=2;i<=tList.length;i++){
            const row = tList[i]
        }
        // console.log(sum)

    })

    xit('mouse hover',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice/')
        await browser.maximizeWindow()
        await $("#mousehover").scrollIntoView
        await browser.pause(2000)

        await $("#mousehover").moveTo()
        await browser.pause(2000)
    })
})