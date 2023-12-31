//Envio Formulario Contacto
emailjs.init("uHeouF4PmYcgX7Qad");
const btn = document.getElementById("button-contacto");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "default_service";
  const templateID = "template_i5l8u8p";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      Swal.fire({
        icon: "success",
        title: "Se envió el mensaje",
        timer: 2500,
        showConfirmButton: false,
      });

      window.location = "contacto.html";
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
