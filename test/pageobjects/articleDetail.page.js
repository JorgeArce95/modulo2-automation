
const Page = require('./page')
class articleDetails extends Page {
get descriptionTextBox () { return $('<textarea />')}

getdescriptionTextBox() {

    return this.descriptionTextBox;
}

}
module.exports = new articleDetails();