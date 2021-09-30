import { Selector , t } from "testcafe";

class ElementsPage {
    constructor(){
        this.subTitle = Selector('div[class="col-12 mt-4 col-md-6"]').withText('Please select an item from left to start practice.');
        this.elementBtn = Selector('div[class="header-text"]').withText('Elements');
        this.textBoxItem = Selector('ul[class="menu-list"]').find('li[id="item-0"]').find('span').withText('Text Box');
        this.fullName =  Selector('input[id="userName"]');
        this.email = Selector('input[id="userEmail"]');
        this.currentAddress = Selector('textarea[id="currentAddress"]');
        this.perAddress = Selector('div[id="permanentAddress-wrapper"]');
        this.subBtn = Selector('button[id="submit"]');
        this.res = Selector('div[id="output"]');
        this.checkBoxItem = Selector('ul[class="menu-list"]').find('li[id="item-1"]').find('span').withText('Check Box');
        this.checkExpand = Selector('button[class="rct-option rct-option-expand-all"]');
        this.checkLess = Selector('button[class="rct-option rct-option-collapse-all"]');
        this.checkAll = Selector('span[class="rct-checkbox"]').find('svg');
        this.radioBtnItem = Selector('ul[class="menu-list"]').find('li[id="item-2"]').find('span').withText('Radio Button');
        this.yRadioBtn = Selector('div[class="custom-control custom-radio custom-control-inline"]').find('input[id="yesRadio"]');
        this.impressiveRadio = Selector('div[class="custom-control custom-radio custom-control-inline"]').find('input[id="impressiveRadio"]');
        this.webTableItem = Selector('ul[class="menu-list"]').find('li[id="item-3"]').find('span').withText('Web Tables');
        this.tableAddBtn = Selector('button[id="addNewRecordButton"]');
        this.regTableFirstName = Selector('div[class="col-md-6 col-sm-6"]').find('input[placeholder="First Name"]');
        this.regTableLastName = Selector('div[class="col-md-6 col-sm-6"]').find('input[placeholder="Last Name"]');
        this.regTableEmail = Selector('div[class="col-md-9 col-sm-12"]').find('input[placeholder="name@example.com"]');
        this.regTableAge = Selector('div[class="col-md-2 col-sm-12"]').find('input[placeholder="Age"]');
        this.regTableSalary = Selector('div[class="col-md-9 col-sm-12"]').find('input[placeholder="Salary"]');
        this.regTableDept = Selector('div[class="col-md-6 col-sm-6"]').find('input[placeholder="Department"]');
        this.regTableSubBtn = Selector('div[class="text-right col-md-2 col-sm-12"]').find('button[id="submit"]');
        this.regTableSearch = Selector('div[class="mb-3 input-group"]').find('input[placeholder="Type to search"]');
        this.regTablePages = Selector('div[class="-pagination"]').find('div[class="-center"]').find('select[aria-label="rows per page"]');
        this.regTablePages20= this.regTablePages.withText('20 rows');
        this.regTableBody = Selector('div[class="rt-tbody"]').find('div[class="rt-tr-group"]');//must complete delete and edit from regTable
        this.ButtonsItem = Selector('ul[class="menu-list"]').find('li[id="item-4"]').find('span').withText('Buttons');
        this.doubleClick = Selector('button[id="doubleClickBtn"]');
        this.rightClick = Selector('button[id="rightClickBtn"]');
        this.linksItem = Selector('ul[class="menu-list"]').find('li[id="item-5"]').find('span').withText('Links');
        this.LinkItemSubTitle = Selector('div[id="linkWrapper"]').withText('Following links will open new tab');
        this.LinkItemHome = Selector('a[id="simpleLink"]');
        this.LinkItemHPUSJ = Selector('a[id="dynamicLink"]');
        this.LinkItemAPI_1 = Selector('a[id="created"]');
        this.LinkItemAPI_4 = Selector('a[id="bad-request"]');
        this.LinkItemAPI_7 = Selector('a[id="invalid-url"]');
        this.uploadFileItem = Selector('ul[class="menu-list"]').find('li[id="item-7"]').find('span').withText('Upload and Download');
        this.uploadItem = Selector('input[id="uploadFile"]');
        this.uploadItemDownloadBtn = Selector('a[id="downloadButton"]');
        this.dynamicPropItem = Selector('ul[class="menu-list"]').find('li[id="item-8"]').find('span').withText('Dynamic Properties');
        this.dynamicPropVisible = Selector('button[id="visibleAfter"]');
        
    }
    get RegSearch(){
        return Selector('input[placeholder="Type to search"]');
    }

    async search(sItem){
        await t
            .typeText(this.RegSearch,sItem)
            .wait(2000)
            .pressKey('enter')
            .wait(1000)
            .pressKey('ctrl+a delete')
    }

}

export default new ElementsPage();