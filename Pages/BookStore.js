import { Selector } from "testcafe";



class BookStore{
    constructor(){
        this.bookStoretBtn = Selector('div[class="header-text"]').withText('Book Store Application');
        this.bookStoreLoginItem = Selector('ul[class="menu-list"]').find('li[id="item-0"]').find('span').withText('Login');
        this.bookStoreBSItem = Selector('ul[class="menu-list"]').find('li[id="item-2"]').find('span').withText('Book Store');
        this.bookStoreProfileItem = Selector('ul[class="menu-list"]').find('li[id="item-3"]').find('span').withText('Profile');
        this.bookStoreBSAPIItem = Selector('ul[class="menu-list"]').find('li[id="item-4"]').find('span').withText('Book Store API');
        this.bookStoreNewUserBtn = Selector('button[id="newUser"]');
        this.bookStoreFirstRegName = Selector('input[id="firstname"]');
        this.bookStoreLastRegName = Selector('input[id="lastname"]');
        this.bookStoreUserRegName = Selector('input[id="userName"]');
        this.bookStoreUserRegPass = Selector('input[id="password"]');
        this.bookStoreRecap = Selector('div[id="rc-anchor-alert"]');
        this.bookStoreLogInUser = Selector('input[id="userName"]');
        this.bookStoreLogInPass = Selector('input[id="password"]');
        this.bookStoreLogInBtn = Selector('button[id="login"]');
        this.bookStoreSearch = Selector('input[id="searchBox"]');
        this.bookStoreRes = Selector('div[class="rt-td"]').find('div[class="action-buttons"]');
        this.bookStoreAddCol = Selector('button[id="addNewRecordButton"]').withText('Add To Your Collection');
        this.bookStoreBack = Selector('button[id="addNewRecordButton"]').withText('Back To Book Store');
        this.bookStoreDelBooks = Selector('div[class="mt-2 buttonWrap row"]').find('div[class="text-right button di"]').find('button[id="submit"]').withText('Delete All Books');
        this.bookStoreGoBSBooks = Selector('div[class="mt-2 buttonWrap row"]').find('div[class="text-left button"]').find('button[id="gotoStore"]').withText('Go To Book Store');
        this.bookStoreConfirmDelBks = Selector('div[class="modal-footer"]').find('button[id="closeSmallModal-ok"]'); 
        this.bookStorePageNum = Selector('div[class="-pagination"]').find('div[class="-center"]').find('span[class="select-wrap -pageSizeOptions"]').find('select[aria-label="rows per page"]');
        this.bookStorePageNumOp = this.bookStorePageNum.find('option[value="20"]');
        this.bookStoreLogOut = Selector('div[id="loading-wrapper"]').find('div[class="text-right col-md-4 col-sm-12"]').find('button[id="submit"]').withText('Log out');
    }
    
checkwithbookText(bookName){
    return this.bookStoreRes.find('a').withText(bookName);
    }
}
export default new BookStore();