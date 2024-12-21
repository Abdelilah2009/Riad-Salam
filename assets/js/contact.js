/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_ewhvbj8', 'template_hdg2o2i', '#contact-form', 'bvntG-oaLC9_LOnwA')
}

contactForm.addEventListener('submit', sendEmail)