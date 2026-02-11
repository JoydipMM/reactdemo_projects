export const checkValidData = (name, email, password) => {
    const isNameValid = /^[a-zA-Z ]+$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    if(!isNameValid) return "Enter valid name";
    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";
    return null;
}