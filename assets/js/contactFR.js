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
        contactMessage.textContent = "Message envoyé avec succès ✅";

        // Remove message after 3 second
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);

        // comment
        contactForm.reset();
      },() => {
        // Show error message
        contactMessage.textContent = "Message non envoyé (erreur de service) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);
