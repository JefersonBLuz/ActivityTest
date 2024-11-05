class resCreateUser {
    constructor(firstName, lastName, mail, password, cpf, nascimento, confirmPassword, numberCard, cvv, dateValid, LowerCase, UpperCase, EightChar, verify, mailmsg, number) {
        this.firstName = firstName ? firstName : '';
        this.lastName = lastName ? lastName : '';
        this.mail = mail ? mail : '';
        this.password = password ? password : '';
        this.cpf = cpf ? cpf : '';
        this.nascimento = nascimento ? nascimento : new Date();
        this.confirmPassword = confirmPassword ? confirmPassword : '';
        this.LowerCase = LowerCase ? LowerCase : '';
        this.UpperCase = UpperCase ? UpperCase : '';
        this.EightChar = EightChar ? EightChar : '';
        this.verify = verify ? verify : '';
        this.number = number ? number : '';
        this.numberCard = numberCard ? numberCard : '';
        this.cvv = cvv ? cvv : '';
        this.dateValid = dateValid ? dateValid : '';
        this.mailmsg = mailmsg ? mailmsg : '';
    }
}
module.exports = resCreateUser