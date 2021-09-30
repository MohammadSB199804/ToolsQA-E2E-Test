import Elements from '../Pages/Elements';

const genNames = require('../Data/GenerateNames');
const genEmails = require('../Data/GenerateEmails');
const genAddress = require('../Data/GenerateAddresses');
const genDetails = require('../Data/GenerateDetails');


 export function Elements_Test() {

    test('Elements Test' , async t =>{
        const fullName = genNames.generateName();
    await t 
        .expect(Elements.subTitle.exists).ok()
        .click(Elements.elementBtn)
        .click(Elements.elementBtn)
        .expect(Elements.textBoxItem.exists).ok()
        .click(Elements.textBoxItem)
        .typeText(Elements.fullName,fullName)
        .typeText(Elements.email,genEmails.generateEmails(fullName))
        .typeText(Elements.currentAddress,genAddress.getRandomAddress())
        .typeText(Elements.perAddress,genAddress.getRandomAddress())
        .click(Elements.subBtn)
        .expect(Elements.res.exists).ok()
        .click(Elements.checkBoxItem)
        .click(Elements.checkExpand)
        .click(Elements.checkLess)
        .click(Elements.checkAll)
        .click(Elements.checkExpand)
        .click(Elements.checkAll)
        .click(Elements.radioBtnItem)
        .click(Elements.yRadioBtn)
        .click(Elements.impressiveRadio)
        .click(Elements.webTableItem)
        .expect(Elements.tableAddBtn.exists).ok()
    for(var i=0 ; i<=1; i ++){
        const fullName_1 = genNames.generateName();
        const Names = fullName.split(" ");
        const regFirstName_1 = Names[0];
        const regLirstName_2 = Names[1]; 
    await t
        .click(Elements.tableAddBtn)
        .typeText(Elements.regTableFirstName,regFirstName_1)
        .typeText(Elements.regTableLastName,regLirstName_2)
        .typeText(Elements.regTableEmail,genEmails.generateEmails_2(fullName_1))
        .expect(Elements.regTableAge.exists).ok()
        .typeText(Elements.regTableAge,genDetails.gen_age())
        .typeText(Elements.regTableSalary,genDetails.gen_salary())
        .typeText(Elements.regTableDept,genDetails.gen_dept())
        .click(Elements.regTableSubBtn);
        await Elements.search(regFirstName_1);
    }
    await t
    
    .click(Elements.regTablePages)
    .click(Elements.regTablePages20)
    .expect(Elements.regTableBody.exists).ok()
    .click(Elements.ButtonsItem)
    .doubleClick(Elements.doubleClick)
    .rightClick(Elements.rightClick)
    .click(Elements.linksItem)
    .expect(Elements.LinkItemSubTitle.exists).ok()
    .click(Elements.LinkItemHome)
    .closeWindow()
    .click(Elements.LinkItemHPUSJ)
    .closeWindow()
    .click(Elements.LinkItemAPI_1)
    .click(Elements.LinkItemAPI_4)
    .click(Elements.LinkItemAPI_7)
    .click(Elements.uploadFileItem)
    .setFilesToUpload(Elements.uploadItem,'../UploadFiles/1.jpg')
    .clearUpload(Elements.uploadItem)
    .click(Elements.uploadItemDownloadBtn)
    .click(Elements.dynamicPropItem)
    .wait(5000)
    .click(Elements.dynamicPropVisible);
    });
 }
 