import { Selector } from "testcafe";

const genDetails = require('../Data/GenerateDetails');

class Widgets{
    constructor(){
        this.widgetBtn = Selector('div[class="header-text"]').withText('Widgets');
        this.widgetAccItem = Selector('ul[class="menu-list"]').find('li[id="item-0"]').find('span').withText('Accordian');
        this.widgetAcc_1 = Selector('div[id="section1Heading"]');
        this.widgetAcc_2 = Selector('div[id="section2Heading"]');
        this.widgetAcc_3 = Selector('div[id="section3Heading"]');
        this.widgetAutoCompItem = Selector('ul[class="menu-list"]').find('li[id="item-1"]').find('span').withText('Auto Complete');
        this.widgetMultipleColor = Selector('div[class="auto-complete__value-container auto-complete__value-container--is-multi css-1hwfws3"]');
        this.widgetMultipleColorAdd = Selector ('div[class="auto-complete__value-container auto-complete__value-container--is-multi auto-complete__value-container--has-value css-1hwfws3"]');
        this.widgetSingleColor = Selector('div[id="autoCompleteSingle"]').find('div[class="auto-complete__value-container css-1hwfws3"]');
        this.widgetDataPickerItem= Selector('ul[class="menu-list"]').find('li[id="item-2"]').find('span').withText('Date Picker');
        this.widgetDataPicker = Selector('input[id="datePickerMonthYearInput"]');
        this.widgetDataTimePicker = Selector('input[id="dateAndTimePickerInput"]');
        this.widgetSliderItem = Selector('ul[class="menu-list"]').find('li[id="item-3"]').find('span').withText('Slider');
        this.widgetSlider = Selector('input[class="range-slider range-slider--primary"]');
        this.widgetSliderT = Selector('div[class="range-slider__tooltip__arrow"]');
        this.widgetProgItem = Selector('ul[class="menu-list"]').find('li[id="item-4"]').find('span').withText('Progress Bar');
        this.widgeStartStopBtn = Selector('button[id="startStopButton"]');
        this.widgetResetBtn = Selector('button[id="resetButton"]');
        this.widgetTabItem = Selector('ul[class="menu-list"]').find('li[id="item-5"]').find('span').withText('Tabs');
        this.widgetOrigin = Selector('a[id="demo-tab-origin"]');
        this.widgetUse = Selector('a[id="demo-tab-use"]');
        this.widgetToolTipItem = Selector('ul[class="menu-list"]').find('li[id="item-6"]').find('span').withText('Tool Tips');
        this.widgetHoverBtn = Selector('button[id="toolTipButton"]');
        this.widgetMenuItem = Selector('ul[class="menu-list"]').find('li[id="item-7"]').find('span').withText('Menu');
        this.widgetMenu = Selector('div[class="nav-menu-container"]').find('ul[id="nav"]').find('a').withText('Main Item 2');
        this.widgetSubMenu = Selector('ul[id="nav"]').find('ul').find('li').withText('SUB SUB LIST »');
        this.widgetSelMenuItem = Selector('ul[class="menu-list"]').find('li[id="item-8"]').find('span').withText('Select Menu');
        this.widgetSelOption = Selector('div[class="col-md-6 col-sm-12"]').find('div[id="withOptGroup"]');
        this.widgetSelRolOption = Selector('div[id="selectOne"]');
        this.widgetoldSelMenu = Selector('select[id="oldSelectMenu"]');
        this.widgetOldMenuOption = this.widgetoldSelMenu.find('option').withText(genDetails.gen_color());
        this.widgetMultiSel = Selector('div[class="row"').find('div[class="col-md-6 col-sm-12"]').find('select[id="cars"]');
        this.widgetMultiColor = Selector('div[class=" css-2b097c-container"]').find('div[class=" css-yk16xz-control"]').find('div[class=" css-1hwfws3"]').find('div[class=" css-1wa3eu0-placeholder"]').withText('Select...');
    }        
}
export default new Widgets();