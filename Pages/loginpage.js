let loginpage = function()
{
    let emailfield = element(by.css("[placeholder='Email']"));
    let passwordfield = element(by.css("[placeholder='Password']"));
    let loginbutton = element(by.className("button btn-main expanded"));
    let signupbutton = element(by.className('ml20 not-signup'));

    let loginclick = element(by.className("home-login"));
    let signupclick = element(by.className("home-reg"));
    let toplogoclick = element(by.className("top-logo"));

    this.get = function(url)
    {
        browser.get(url)
    };
    this.enteremail = function(email)
    {
        emailfield.sendKeys(email);
    };
    this.enterpassword = function(password)
    {
        passwordfield.sendKeys(password)
    };
    this.clicklogin = function()
    {
        loginbutton.click();
    };
    this.verifylogin = function()
    {
        expect(browser.getTitle().toBe("BSP Portal-Home"))
    }
    this.verifysignupbutton = function()
    {
        expect(browser.getCurrentUrl().toBe("http://172.22.0.72:8085/#/register"))
    }
    this.clickontoplogo = function()
    {
        toplogoclick.click();
    }
};