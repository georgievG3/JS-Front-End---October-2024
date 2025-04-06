function passwordValidator (password) {

    const length = password =>{ 6 <= password && password <= 10}
    const alphanumericCheck = password => /^[a-zA-Z0-9]+$/.test(password)
    const twoDigitsCheck = password => /\d{2,}/.test(password)

    console.log(length(password))
    console.log(alphanumericCheck(password))
    console.log(twoDigitsCheck(password))

}
