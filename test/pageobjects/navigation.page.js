const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class navigationPage extends Page {
    /**
     * define selectors using getter methods
     */

    //css query
    get conduitLabel () { return $('a.navbar-brand.ng-binding') }
   //lintext
    get signInLink () { return $('a=Sign in') }
    //partialLinkText
    get signUpLink () { return $('*=up') }



    // metodos
    goToSignIn() {

   this.signInLink.click();

    }

    getConduitText() {

  return this.conduitLabel.getText();

    }

    open () {
        return super.open('');
    }

}

module.exports = new navigationPage();
