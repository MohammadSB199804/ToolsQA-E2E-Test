import Form from '../Pages/Form';

const genNames = require('../Data/GenerateNames');
const genEmails = require('../Data/GenerateEmails');
const genAddress = require('../Data/GenerateAddresses');
const genDetails = require('../Data/GenerateDetails');
const genDates = require('../Data/GenerateDates');

const phoneNumber = Math.floor(Math.random() * 10000000);

export function Form_Test(){
    test("Form Test" , async t => {
        const fullName = genNames.generateName();
        const Names = fullName.split(" ");
        const regFirstName_1 = Names[0];
        const regLastName_2 = Names[1];
        const fullDate = genDates.randomDate(new Date(2012, 0, 1), new Date()).toString();
        const dates_1 = fullDate.split(" ");
        const calDate = dates_1[2] + ' ' +dates_1[1] + ' ' + dates_1[3];
        const rndInt = genDetails.gen_randomPic(1, 4);
        console.log(rndInt)
        await t 
        .click(Form.formBtn)
        .click(Form.formPraItem)
        .expect(Form.formSubTitle.exists).ok()
        .typeText(Form.formFirstName,regFirstName_1)
        .typeText(Form.formLastName,regLastName_2)
        .typeText(Form.formEmail,genEmails.generateEmails_2(fullName))
        .typeText(Form.formPhone,'00970' + phoneNumber)
        .click(Form.uploadImg)
        .setFilesToUpload(Form.uploadImg,'../UploadFiles/'+ rndInt +'.jpg')
        .typeText(Form.formSubject,genDetails.gen_subject())
        .pressKey('enter')
        .typeText(Form.formSubjectAfterAdd,genDetails.gen_subject())
        .pressKey('enter')
        await t
        .typeText(Form.formCurrentAddress,genAddress.getRandomAddress())
        .click(Form.formCal)
        .pressKey('ctrl+a ')
        .typeText(Form.formCal,calDate)
        .click(Form.formFemale)
        .click(Form.formMale)
        .click(Form.formSport)
        .click(Form.formReading)
        .click(Form.formMusic)
        .click(Form.formSubmit)
        .expect(Form.formResult.exists).ok();

     
    });
    
}
