import { pages } from "../../pages/pages";
import data from "../../helpers/data";
/**
 * Perform an click action on the given element
 * @param {string} selector - Element selector
 */
export default async(
    selector: string,
) => {
    const { currentPage } = data;
    const page = pages[currentPage];
    console.log(`click selector "${selector}"`);
    await $(page[selector]).click();
}   