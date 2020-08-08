const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashBoardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticlesLabel () { return $('div=No articles are here... yet.') }
  


getNotArticlesLabel()  {
return this.noArticlesLabel;

}

}
module.exports = new DashBoardPage();

 