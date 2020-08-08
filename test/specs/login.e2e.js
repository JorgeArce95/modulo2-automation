
//las const son como los imports de jav a
const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')
const DashboardPage = require ('../pageobjects/dashboard.page')

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        NavigationPage.open();
        NavigationPage.goToSignIn();
        // espera
        browser.pause(5000);
        expect(browser).toHaveUrl('https://demo.realworld.io/#/login')
        LoginPage.login('jorge.arce.benavides@ucreativa.com', 'Test1234');
        expect(browser).toHaveUrl('https://demo.realworld.io/#/')
        expect(browser).toHaveTitle('Home — Conduit')
        //valida que se encuentre el label
        expect(DashboardPage.getNotArticlesLabel()).toBeDisplayed();




    });
it('should dispplay empty dashboard', ()=>{

    expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active')
   
})

});


