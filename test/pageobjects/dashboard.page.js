const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashBoardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticlesLabel () { return $('div=No articles are here... yet.') }
   // elemento con selector className y text
    get yourFeedTap () { return $('.nav-link=Your Feed')}
    get globalFeedTap () { return $('.nav-link=Global Feed')}
    get articlesRows() {  return $('<article-list />').$$('<article-preview />')}


   


getNotArticlesLabel()  {
return this.noArticlesLabel;

}
getYourFeedTap()  {

    return this.yourFeedTap;
    
    }

    getGlobalFeedTap()  {

        return this.globalFeedTap;
        
        }

        getArticleList()  {

            return this.articlesRows;
            
            }
        }


module.exports = new DashBoardPage();

 