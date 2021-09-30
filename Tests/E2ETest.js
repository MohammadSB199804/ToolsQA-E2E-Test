const URL = 'https://demoqa.com/elements';
const elementsTest =  require('../Tests/ElementsTest');
const confirmURL = require('../Tests/ConfirmURL');
const formTest = require('../Tests/FormTest');
const widgetsTest = require('./WidgetsTest');
const bookStoreTest = require('../Tests/BookStoreTest');
const interactionTest = require('../Tests/InteractionsTest');

fixture.page(URL)('ToolQac E2E Test')
.beforeEach(async t =>{
    await t 
    .maximizeWindow()
    .setTestSpeed(0.7);
}); 

confirmURL.Confirm_URL();
elementsTest.Elements_Test();
formTest.Form_Test();
interactionTest.Interactions_Test()
widgetsTest.Widgets_Test();
bookStoreTest.BookStore_Test();

