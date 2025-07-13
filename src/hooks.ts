import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

BeforeAll(async () => {

});

AfterAll(async () => {
    console.log('Teardown: Setelah semua scenario');

});

Before(async () => {
    await browser.url('https://katalon-demo-cura.herokuapp.com/profile.php#login');
    await browser.maximizeWindow()
});

After(async () => {   
    await browser.reloadSession();
});

