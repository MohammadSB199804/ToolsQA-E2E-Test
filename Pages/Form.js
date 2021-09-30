
import { Selector } from "testcafe";

const genState = require('../Data/GenerateDetails');

class Form {
    constructor(){
        this.formBtn = Selector('div[class="header-text"]').withText('Forms');
        this.formPraItem = Selector('ul[class="menu-list"]').find('li[id="item-0"]').find('span').withText('Practice Form');
        this.formSubTitle = Selector('div[class="practice-form-wrapper"]').find('h5').withText('Student Registration Form');
        this.formFirstName = Selector('input[id="firstName"]');
        this.formLastName = Selector('input[id="lastName"]');
        this.formEmail = Selector('input[id="userEmail"]');
        this.formMale = Selector('input[id="gender-radio-1"]');
        this.formFemale = Selector('input[id="gender-radio-2"]');
        this.formOther = Selector('input[id="gender-radio-3"]');
        this.formPhone = Selector('input[placeholder="Mobile Number"]');
        this.formCal = Selector('input[id="dateOfBirthInput"]');
        this.formSport = Selector('input[id="hobbies-checkbox-1"]');
        this.formReading = Selector('input[id="hobbies-checkbox-2"]');
        this.formMusic = Selector('input[id="hobbies-checkbox-3"]');
        this.formCurrentAddress = Selector('textarea[id="currentAddress"]');
        this.formSelectState = Selector('div[id="state"]');
        this.formSubject = Selector('div[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]');
        this.formSubjectAfterAdd = Selector('div[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi subjects-auto-complete__value-container--has-value css-1hwfws3"]');
        this.uploadImg = Selector('div[class="form-file"]').find('input[id="uploadPicture"]');
        this.formSubmit = Selector('div[class="text-right col-md-2 col-sm-12"]').find('button[id="submit"]');
        this.formResult = Selector('div[class="modal-body"]');
    
    }


}
export default new Form();