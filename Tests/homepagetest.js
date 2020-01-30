let landingpage = require("../Pages/landingpage");

describe('Testing landing page buttons', function()
{
    it('testing login button', function()
        {
            landingpage.get("http://172.22.0.72:8085/#/");
            landingpage.clickonlogin();
            landingpage.verifyloginclick();
        }
    );

    it('testing sign up button', function()
        {   
            landingpage.get("http://172.22.0.72:8085/#/");
            landingpage.clickonsignup();
            landingpage.verifysignupclick();
        });

    it('verify logo click', function()
        {   
            landingpage.get("http://172.22.0.72:8085/#/");
            landingpage.logoclick();
            landingpage.verifylogoclick();
        });
});
