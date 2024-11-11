import { pages } from "../../pages/pages";
import data from "../../helpers/data";
import clickElement from "./click-element";

/**
 * Perform an click action on the given element
 * @param text - The value to set.
 * @param selector - Element selector
 */

export default async(
    selector: string,
    text: string,
) => {
    if (!pages) {
        throw new Error(`"${pages}" object is undefined`);
    }
    const { currentPage } = data;
    const page = pages[currentPage];

    if (!page) {
        throw new Error(`Page "${currentPage}" is not found`);
    }

    // await clickElement(selector);
    await $(page[selector]).setValue(text);
    // const element = login[selector];
    // console.log(`selector: "${selector}"`)

    // if (!element) {
    //     throw new Error(`Element with selector '${selector}' is not found`);
    // }
    // await clickElement(selector)
    // await element.setValue(text)
}