const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
var should = require('chai').should();



//describe block
describe('Second Test with Search the iphones on searchbox', function () {

    //it block
    it('successfully search iphone', async function () {


        //launch browser 
        let driver = await new Builder().forBrowser("firefox").build();

        //navigate to our applicaton
        await driver.get("https://www.hepsiburada.com")

        //search a keyword
        await driver.findElement(By.xpath("//input[@class='desktopOldAutosuggestTheme-input']")).sendKeys('iphone 11', Key.ENTER);
        //await driver.findElement(By.xpath("//div[@class='iblpc']")).click();


        var searchTextElement = driver.wait(until.elementLocated(By.xpath('//*[@id="SearchResultSummary"]')));



        let searchText = await searchTextElement.getText().then(function (value) {
            return value
        });
        //assert using node assertion
        //assert.strictEqual(searchText, 'iphone 11 ile ilgili 10000+ ürün bulduk');

        //assert using chai should
        searchText.should.contains('iphone 11 ile ilgili 10000+ ürün bulduk');


        console.log(searchText);
        //close the browser
        await driver.quit();

    });



});
















