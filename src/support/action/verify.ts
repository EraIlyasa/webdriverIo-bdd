import data from "../../helpers/data";
import { pages } from "../../pages/pages";
import { expect } from "chai";
/** 
 * @param text - The value to set. 
 * @param selector - Element selector
 */
export default async(
    selector: string,
    text: string
) => {
    const { currentPage } = data;
    const page = pages[currentPage];

    console.log(`Alert: ${selector}`);
    try {
        await browser.waitUntil(async() => {
            return await $(page[selector]).isExisting();
        },{
            timeout:15000,
            timeoutMsg: 'Alert is not existing'
        })
        let assertion = await $(page[selector]).getText();
        let actualText = assertion.replace(/\n/g, ' ').replace(/×/g, '').trim()
        expect(await actualText).to.equal(text);   
        console.log(`Message: "${text}"`)

    }catch (err) {
        console.log('No flash alert found', err);
    }
}