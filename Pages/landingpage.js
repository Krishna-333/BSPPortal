let landingpage = function()
{
    let loginclick = element(by.className("home-login"));
    let signupclick = element(by.className("home-reg"));
    let toplogoclick = element(by.className("top-logo"));

    this.get = function(url)
    {
        browser.get(url)
    };
    
    this.clickonlogin = function()
    {
        loginclick.click();
    };
    this.clickonsignup = function()
    {
        signupclick.click();
    };
    this.logoclick = function()
    {
        toplogoclick.click();
    };

    this.verifyloginclick = function()
    {   
       expect(browser.getCurrentUrl()).toBe("http://172.22.0.72:8085/#/login");
    };
    this.verifysignupclick = function()
    {
        expect(browser.getCurrentUrl()).toBe("http://172.22.0.72:8085/#/register");
    };
    this.verifylogoclick = function()
    {
        expect(browser.getCurrentUrl()).toBe("http://172.22.0.72:8085/#/");
    };

};
module.exports = new landingpage();
