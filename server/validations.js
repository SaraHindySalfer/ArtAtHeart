(function (exports) {
    exports.EmailAddressValidation = (EmailAddress) => {
        if (EmailAddress.length == 0) return "field needed";
        if (!/^\w+@[a-zA-Z_.]+?\.[a-zA-Z]{2,3}$/.test(EmailAddress))
            return "not valid email address";
        return "";
    };
    exports.NameValidation=(name)=>{
        if(name.length==0)return "field needed"
        if(!/^([a-zA-Z \u05D0-\u05EA]{2,20})$/.test(name))
            return "name is invalid"
        return ""
    }
    exports.passwordValidation=(pswd)=>{
        if(pswd.length==0) return "field needed"
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(pswd))
            return "password invalid"
        return ""
    }
})(typeof exports === "undefined" ? (this.share = {}) : exports);