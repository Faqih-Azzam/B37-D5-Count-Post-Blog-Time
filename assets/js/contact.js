function data() {
    // DOM = document object model
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let emailReceiver = "faqih.farhan.778@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${message}, this my phone number ${phone}`
    a.click()
}