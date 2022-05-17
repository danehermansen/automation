const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('movie functionality', async () => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Gladiator')
    await driver.findElement(By.xpath(`//button[text()="Add"]`)).click()
    await driver.sleep(3000)

    await driver.findElement(By.xpath(`//li/span[text()='Gladiator']`)).click()
    await driver.sleep(3000)

    await driver.findElement(By.id('Gladiator')).click()
    await driver.sleep(3000)

})