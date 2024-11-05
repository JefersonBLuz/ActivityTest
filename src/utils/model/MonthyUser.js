const users = require("../../database/model/Users");

class monthyUser {
    constructor(firstName, lastName, email, password, cpf, nascimento, numberCard, ccv, dateValid) {
        this.cpf = cpf;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nascimento = nascimento;
        this.userActivity = true;
        this.userBlock = false;
        this.tryPassword = 0;
        this.password = password;
        this.dateCreate = String(new Date());
        this.numberCard = numberCard,
        this.ccv = ccv,
        this.dateValid = dateValid
    }

    create() {
        users.create({
            cpf: this.cpf,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            nascimento: this.nascimento,
            userActivity: this.userActivity,
            userBlock: this.userBlock,
            tryPassword: this.tryPassword,
            password: this.password,
            dateCreate: this.dateCreate,
            numberCard: this.numberCard,
            ccv: this.ccv,
            dateValid: this.dateValid,
        })
    }
}
module.exports = monthyUser
