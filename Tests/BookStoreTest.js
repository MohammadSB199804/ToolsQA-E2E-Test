import BookStore from '../Pages/BookStore';
import Elements from '../Pages/Elements';


const genNames = require('../Data/GenerateNames');
const genEmails = require('../Data/GenerateEmails');
const genAddress = require('../Data/GenerateAddresses');
const genDetails = require('../Data/GenerateDetails');
 
 export function BookStore_Test() {

    test('Book Store Test' , async t =>{
        // const fullName_1 = genNames.generateName();
        // const Names = fullName_1.split(" ");
        // const regFirstName_1 = Names[0];
        // const regLastName_2 = Names[1]; 

        await t
        .click(Elements.elementBtn)
        .click(BookStore.bookStoretBtn)
        .click(BookStore.bookStoreLoginItem)
        // .click(BookStore.bookStoreNewUserBtn)
        // .typeText(BookStore.bookStoreFirstRegName,regFirstName_1)
        // .typeText(BookStore.bookStoreLastRegName,regLastName_2)
        // .typeText(BookStore.bookStoreUserRegName , genNames.generateUserName(fullName_1))
        // .typeText(BookStore.bookStoreUserRegPass,genDetails.gen_Pass())
        .typeText(BookStore.bookStoreLogInUser,"mohammadSB_1")
        .typeText(BookStore.bookStoreLogInPass,"x7zh9g95@#A")
        .click(BookStore.bookStoreLogInBtn)
        .click(BookStore.bookStoreBSItem)
        .click(BookStore.bookStorePageNum)
        .click(BookStore.bookStorePageNumOp)
        for(var i=0 ; i<=2 ; i++ ){
        const bookName = genDetails.gen_Books();
        await t
        .typeText(BookStore.bookStoreSearch,bookName)
        .pressKey('enter')
        .click(BookStore.checkwithbookText(bookName))
        .setNativeDialogHandler(() => true)
        .click(BookStore.bookStoreAddCol)
        .navigateTo('https://demoqa.com/books');
        }    
        await t
        .click(BookStore.bookStoreProfileItem)
        .click(BookStore.bookStoreDelBooks)
        .click(BookStore.bookStoreConfirmDelBks)
        .click(BookStore.bookStoreGoBSBooks)
        .click(BookStore.bookStoreLoginItem)
        .click(BookStore.bookStoreLogOut)
    });
}