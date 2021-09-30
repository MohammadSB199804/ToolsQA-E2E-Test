import { Selector } from "testcafe";

const genDetails = require('../Data/GenerateDetails');

class Interactions{
    constructor(){
        this.interactionBtn = Selector('div[class="header-text"]').withText('Interactions');
        this.interactionSortItem = Selector('ul[class="menu-list"]').find('li[id="item-0"]').find('span').withText('Sortable')
        this.interactionListNum = Selector('div[id="demo-tabpane-list"]').find('div[class="vertical-list-container mt-4"]').find('div[class="list-group-item list-group-item-action"]');
        this.interactionGrid = Selector('a[id="demo-tab-grid"]');
        this.interactionGridNum = Selector('div[class="create-grid"]').find('div[class="list-group-item list-group-item-action"]');
        this.interactionSelectItem = Selector('ul[class="menu-list"]').find('li[id="item-1"]').find('span').withText('Selectable');
        this.interactionMultiSelect = Selector('ul[id="verticalListContainer"]').find('li[class="mt-2 list-group-item list-group-item-action"]');
        this.interactionMultiSelectGrid = Selector('a[id="demo-tab-grid"]');
        this.interactionMultiSelectGridOp = Selector('li[class="list-group-item list-group-item-action"]');
        this.interactionResaizableItem = Selector('ul[class="menu-list"]').find('li[id="item-2"]').find('span').withText('Resizable');
        this.interactionResaizableWin = Selector('div[id="resizableBoxWithRestriction"]').find('span[class="react-resizable-handle react-resizable-handle-se"]');
        this.interactionResaizableWin2 = Selector('div[id="resizable"]').find('span[class="react-resizable-handle react-resizable-handle-se"]');

    }
    
    checkwithSelectableGridOp(){
        return this.interactionMultiSelectGridOp.withText(genDetails.gen_Number());  
    }

    checkwithSelectableStatus(){
        return this.interactionMultiSelect.withText(genDetails.gen_MultiSelectM());  
    }
    checkwithNumStatusList(){
        return this.interactionListNum.withText(genDetails.gen_Number_2());  
    }
    checkwithNumStatus(){
        return this.interactionGridNum.withText(genDetails.gen_Number());  
    }

}

export default new Interactions();