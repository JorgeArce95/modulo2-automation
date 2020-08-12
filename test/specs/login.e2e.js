
//las const son como los imports de jav a
const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page')
const DashboardPage = require ('../pageobjects/dashboard.page')
//const wait = require('../helpers/waits')
const wait= require('../pageobjects/articleDetail.page');
const articleDetailPage = require('../pageobjects/articleDetail.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        // tiempo de espeta Timeout
      browser.setTimeout({'pageLoad' : 1000});
        NavigationPage.open();
        NavigationPage.goToSignIn();
        LoginPage.login('jorge.arce.benavides@ucreativa.com', 'Test1234');
         // tiempo de espeta implicit
        browser.setTimeout({'implicit' : 1000});
        expect(browser).toHaveUrl('https://demo.realworld.io/#/')
        expect(browser).toHaveTitle('Home — Conduit')
        //valida que se encuentre el label
       // expect(DashboardPage.getNotArticlesLabel()).toBeDisplayed();




    });
//it('should Your Feed active by default', ()=>{

  //  expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active')
   
//});
it('should open the other tap ', ()=>{

   DashboardPage.getGlobalFeedTap().click();
   browser.setTimeout({'implicit' : 1000});
  -- console.log('GetSize: ' +DashboardPage.getArticleList().length);
   expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', 'nav-link active')
  // expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message: 'no clickable')
   expect(DashboardPage.getGlobalFeedTap()).toBeClickable();
  // expect(DashboardPage.getArticleList()).toBeElementsArrayOfSize({eq: 10 });
});

it('should open read more', ()=>{
DashboardPage.getReadMoreAnchor().click();
browser.pause(5000);


})

it('shoul add a description', () => {

browser.setTimeout({'implicit' : 1000});
articleDetailPage.getDescriptionTextBox().setValue('Hola');

browser.pause(5000);

}

});


