let loginpage = require("../pages/loginpage");

describe('testing login page', function()
{
    it('tetsing login form', function()
    {
        loginpage.get("http://172.22.0.72:8085/#/");
    });
});