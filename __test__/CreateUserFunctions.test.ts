const {veriftPassword, hasNumber, hasUpperCase, hasLowerCase, hasEightChar, validateEmail} =  require ('../src/utils/CreateUserFunctions')

describe ("Testing function veriftPassword", () => {
    it("Check if password is the same passwordConfirmation", () => {
        expect(veriftPassword ('123', '123')).toBe(true)
    })
    it("Check if password is the same passwordConfirmation", () => {
        expect(veriftPassword("12345678","abc")).toBe(false)
    })
})

describe ("Testing function hasNumber",() =>{
    it("Check if password has number", () => {
        expect(hasNumber ('abc123')).toBe(true)
    })
    it("Check if password has number", () => {
        expect(hasNumber("abc")).toBe(false)
    })
})

describe("Testing function hasUpperCase", () => {
    it("Check if password has upper case", () => {
        expect(hasUpperCase ("ABC")).toBe(true)
    })
    it('Check if passsword has upper case', () => {
        expect(hasUpperCase("Abc")).toBe(true)
    })
    it("Check if password has upper case", () => {
        expect(hasUpperCase("abc")).toBe(false)
    })
})

describe ("Testing function hasLowerCase", () => {
    it("Check if password has lower case", () => {
        expect(hasLowerCase('abc')).toBe(false)
    })
    it("Check if password has lower case", () => {
        expect(hasLowerCase("Abc")).toBe(false)
    })
    it("Check if password has lower case", () => {
        expect(hasLowerCase("ABC")).toBe(false)
    })
})

describe ("Testing function hasEightChar", () => {
    it("Check if password has at least eight characters", () => {
        expect(hasEightChar('12345678')).toBe(true)
    })
    it("Check if password has at least eight characters", () => {
        expect(hasEightChar('12345')).toBe(false)
    })
    it("Check if password has at least eight characters", () => {
        expect(hasEightChar("12345678910")).toBe(true)
    })
})

describe ("Testing function validateEmail", () => {
    it("Check email validation", () => {
        expect(validateEmail('rafael@mail.com')).toBe(true)
    })
    it("Check email validation", () => {
        expect(validateEmail('rafael.mail.com')).toBe(false)
    })
})

