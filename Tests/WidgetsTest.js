import Widgets from "../Pages/Widgets";


const genDetails = require('../Data/GenerateDetails');
const genDates = require('../Data/GenerateDates'); 

 export function Widgets_Test() {
    test('Widgets Test' , async t =>{
        const fullDate = genDates.randomDate(new Date(2012, 0, 1), new Date()).toString();
        const dates_1 = fullDate.split(" ");
        const calDate = dates_1[2] + '/' +dates_1[1] + '/' + dates_1[3];
        const dateTime = genDates.randomDateTime(new Date(2012, 0, 1), new Date()).toString();
        const dates_2 = dateTime.split(" ");
        // const timeSplit = dates_2[4].split(':')
        // const calDateTime = dates_2[1] + ' ' + dates_2[2] + ',' + dates_2[3] +' '+timeSplit[2];
        await t 
        .click(Widgets.widgetBtn)
        .click(Widgets.widgetAccItem)
        .click(Widgets.widgetAcc_1)
        .click(Widgets.widgetAcc_2)
        .click(Widgets.widgetAcc_3)
        .click(Widgets.widgetAutoCompItem)
        .typeText(Widgets.widgetMultipleColor,genDetails.gen_color())
        .pressKey('enter')
        .typeText(Widgets.widgetMultipleColorAdd,genDetails.gen_color())
        .pressKey('enter')
        .typeText(Widgets.widgetSingleColor,genDetails.gen_color())
        .pressKey('enter')
        .click(Widgets.widgetDataPickerItem)
        .click(Widgets.widgetDataPicker)
        .pressKey('ctrl+a ')
        .typeText(Widgets.widgetDataPicker,calDate)
        .pressKey('enter')
        .click(Widgets.widgetDataTimePicker)
        .pressKey('ctrl+a ')
        .typeText(Widgets.widgetDataTimePicker,calDate)
        .pressKey('enter')
        .click(Widgets.widgetSliderItem)
        .click(Widgets.widgetSlider)
        .drag(Widgets.widgetSlider,180,0,{offsetX:110,offsetY:10,destinationOffsetX:30})
        .click(Widgets.widgetProgItem)
        .click(Widgets.widgeStartStopBtn)
        .wait(5000)
        .click(Widgets.widgeStartStopBtn)
        .click(Widgets.widgeStartStopBtn)
        .click(Widgets.widgetResetBtn)
        .click(Widgets.widgetTabItem)
        .click(Widgets.widgetUse)
        .click(Widgets.widgetOrigin)
        .click(Widgets.widgetToolTipItem)
        .hover(Widgets.widgetHoverBtn)
        .click(Widgets.widgetMenuItem)
        .hover(Widgets.widgetMenu)
        .hover(Widgets.widgetSubMenu)
        .click(Widgets.widgetSelMenuItem)
        .typeText(Widgets.widgetSelOption,genDetails.gen_menuOptions())
        .pressKey('enter')
        .click(Widgets.widgetSelRolOption)
        .typeText(Widgets.widgetSelRolOption,genDetails.gen_Roles())
        .pressKey('enter')
        .expect(Widgets.widgetoldSelMenu.exists).ok()
        .click(Widgets.widgetoldSelMenu) 
        .click(Widgets.widgetMultiSel)
        .click(Widgets.widgetMultiColor)
        for(var i = 0 ; i<=3 ; i ++){
            await t
            .pressKey('enter');
        }       
    });
}