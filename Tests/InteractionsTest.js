import Interactions from "../Pages/Interactions";

const gen_Details = require('../Data/GenerateDetails');

export function Interactions_Test() {
    test('Widgets Test' , async t =>{
        await t
        .click(Interactions.interactionBtn)
        .click(Interactions.interactionSortItem)
        for(var i = 0 ; i <= 5 ; i ++ ){
        await t
            .drag(Interactions.checkwithNumStatusList(),gen_Details.gen_randomPic(0,360),gen_Details.gen_randomPic(0,360),{offsetX:10,offsetY:10});
        }
        await t
        .click(Interactions.interactionGrid)
        .expect(Interactions.interactionGridNum.exists).ok()
        for(var j = 0 ; j <= 2 ; j ++ ){
        await t
            .drag(Interactions.checkwithNumStatus(),gen_Details.gen_randomPic(0,360),gen_Details.gen_randomPic(0,360),{offsetX:10,offsetY:10});
        }
        await t 
        .click(Interactions.interactionSelectItem)
        for(var j = 1 ; j <= gen_Details.gen_randomPic(1,2) ; j ++ ){
            await t
            .click(Interactions.checkwithSelectableStatus());
        }
        await t 
        .click(Interactions.interactionMultiSelectGrid)
        for(var j = 1 ; j <= gen_Details.gen_randomPic(1,9) ; j ++ ){
            await t
         .click(Interactions.checkwithSelectableGridOp());
        } 
        await t
        .click(Interactions.interactionResaizableItem)
        .drag(Interactions.interactionResaizableWin,gen_Details.gen_randomPic(150,800),gen_Details.gen_randomPic(0,360),{offsetX:10,offsetY:10})
        .drag(Interactions.interactionResaizableWin2,gen_Details.gen_randomPic(150,800),gen_Details.gen_randomPic(0,360),{offsetX:10,offsetY:10});
    });
}