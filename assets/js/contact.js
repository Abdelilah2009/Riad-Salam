/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_ewhvbj8",
      "template_hdg2o2i",
      "#contact-form",
      "bvntG-oaLC9_LOnwA"
    )
    .then(
      () => {
        // Show send message
        contactMessage.textContent = "Message send successfully ✅";

        // Remove message after five second
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);

        // comment
        contactForm.reset();
      },() => {
        // Show error message
        contactMessage.textContent = "Message not send (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
