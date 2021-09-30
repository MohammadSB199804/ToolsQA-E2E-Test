import {ClientFunction} from 'testcafe';

const URL = 'https://demoqa.com/elements';
const confirmURL = ClientFunction(() => window.location.href);

export function Confirm_URL() {
    test ("Confirm URL" , async t => {
        await t 
        .expect(confirmURL()).eql(URL);
        // .expect(Elements.subTitle.exists).ok();
    });
    
}
