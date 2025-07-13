import elementUtil from "../step-definitions/utils/elementUtil";
const VALIDUSER = process.env.VALIDUSER
const VALIDPASS = process.env.VALIDPASS
const INVALIDUSER = process.env.INVALIDUSER
const INVALIDPASS = process.env.INVALIDPASS

//=====================
//Element Path
//=====================
class LoginPage{
    get btnMakeAppointment () { return $('#btn-make-appointment');}
    get inputUsername () { return $('#txt-username')}
    get inputPassword () { return $('#txt-password')}
    get btnLogin () { return $('#btn-login');}
    get facility() {return('(//*[@id="combo_facility"])')}

//=====================
//Function
//=====================
async login () {
    await elementUtil.getPageTitle()
    console.log('Title is: ', await elementUtil.getPageTitle());
    await elementUtil.clickElement(this.btnMakeAppointment)
    await elementUtil.clickElement(this.inputUsername)
    await elementUtil.clickElement(this.inputPassword)
    await elementUtil.setValueElement(this.inputUsername, VALIDUSER)
    await elementUtil.setValueElement(this.inputPassword, VALIDPASS)
    await elementUtil.clickElement(this.btnLogin)
}
async invalidLogin() {
    await elementUtil.getPageTitle()
    console.log('Title is: ', await elementUtil.getPageTitle());
    await elementUtil.clickElement(this.btnMakeAppointment)
    await elementUtil.clickElement(this.inputUsername)
    await elementUtil.clickElement(this.inputPassword)
    await elementUtil.setValueElement(this.inputUsername, INVALIDUSER)
    await elementUtil.setValueElement(this.inputPassword, INVALIDPASS)
    await elementUtil.clickElement(this.btnLogin)
}

}
export default new LoginPage()

