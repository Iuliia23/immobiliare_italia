(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    thankYouMessage: document.getElementById('thank-you-message'),
    contactForm: document.getElementById('contact-form'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", clearForm); 

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.contactForm.reset(); 
  }

  function clearForm() {
    refs.modal.classList.add("is-hidden");
    refs.thankYouMessage.style.display = "none"; 
    refs.contactForm.reset(); 
    refs.contactForm.style.display = "block"; 
}})();

function submitForm(event) {
  event.preventDefault(); 
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('thank-you-message').style.display = 'block';
}
