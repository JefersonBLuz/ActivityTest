//Senha
//Verificar se a senha é identica a confirmação de senha
function veriftPassword(password: string, passwordConfirmation: string): boolean {
    return password === passwordConfirmation
}
//Verificar se a senha contém número
function hasNumber(password: string): boolean {
    return /\d/.test(password)
}
//Verificar se a senha contém letra maíscula
function hasUpperCase(password: string): boolean {
    return /\[A-Z]/.test(password)
}
//Verificar se a senha contém letra minuscula
function hasLowerCase(password: string): boolean {
    return /\[a-z]/.test(password)
}
//Verificar se a senha contém nó mínimo 8 caracter.
function hasEightChar(password: string): boolean {
    return password.length >= 8
}

// async function verificarEmailExiste(email: string, ): boolean {
//     try {
//         const user = await User.findOne({ email });
//         return !!user; // Retorna true se o usuário foi encontrado, false caso contrário
//     } catch (error) {
//         console.error('Erro ao verificar email:', error);
//         return false;
//     }
// }

function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

export { hasEightChar, hasLowerCase, hasNumber, hasUpperCase, veriftPassword, validateEmail }