export default new class elementUtils {
    async clickElement(element: any) {
        await element.scrollIntoView({ behavior: "smooth" });
        await element.waitForDisplayed({ timeout: 10000 });
        await element.click();
    }

    async setValueElement(element: any, value: any) {
        await element.waitForDisplayed({ timeout: 10000 });
        await element.setValue(value);
    }

    async getTextElement(element: any) {
        await element.waitForDisplayed({ timeout: 10000 });
        return element.getText();
    }

    async isDisplayedElement(element: any) {
        await element.waitForDisplayed({ timeout: 10000 });
        return element.isDisplayed();
    }

    async getPageTitle() {
        return browser.getTitle();
    }

    async pause(ms: number) {
        await browser.pause(ms * 1000);
    }

    async verifyElement(
        type: 'text'|'button',
        selector: any,
        method: 'exist'|'not exist',
    ) {
        console.log('Selector is: ', selector)

        const element = type === 'text'
            ? `//*[contains(text(),"${selector}")]`
            : selector
        
        const expectation = method === 'exist'
            ? expect($(element)).toExist()
            : expect($(element)).not.toExist()

        return expectation
    }
}