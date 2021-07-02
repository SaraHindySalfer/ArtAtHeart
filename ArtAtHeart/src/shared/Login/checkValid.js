const hasContent = (value) => {
    return value !== ''
}

const isValidEmail = (email) => {
    let regex = /^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/;
    return regex.test(email)
}

const isValidPassword = (pswd) => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(pswd)
}


const isValidName = (name) => {
    let regex = /^([a-zA-Z \u05D0-\u05EA]{2,20})$/
    return (regex.test(name));
}



const checkEmail = (emailEntry) => {
    if (!hasContent(emailEntry)) {
        return 'This field is required';
    } if (!isValidEmail(emailEntry)) {
        return 'Email address is invalid';
    } return "";
}

const checkName = (nameEntry) => {
    if (!hasContent(nameEntry)) {
        return 'This field is required';
    } if (!isValidName(nameEntry)) {
        return 'Name is invalid'
    } return ""
}

const checkPswd = (password) => {
    if (!hasContent(password)) {
        return 'This field is required';
    } if (!isValidPassword(password)) {
        return 'Password should contain Minimum eight characters, at least one letter, one number and one special character:'
    } return ''
}
const validateValues = (values) => {
    const errors = {};
    const emailError = checkEmail(values.email);
    if (emailError !== '')
        errors.email = emailError;

    const nameError = checkName(values.name);
    if (nameError !== '')
        errors.name = nameError;

    const passwordError = checkPswd(values.password);
    if (passwordError !== '')
        errors.password = passwordError;
    return errors;
}

export { validateValues }