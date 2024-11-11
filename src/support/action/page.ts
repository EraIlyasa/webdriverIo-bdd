import link from "../../pages/URL/link"
export default async(
    dashboard: string,
) =>{
    const url = await link.dasboard();
    await browser.url(url)
    await browser.pause(2000)
}