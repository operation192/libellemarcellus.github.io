function SendMail() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email_id").value;
  const message = document.getElementById("message").value;

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const params = {
    from_name: fullName,
    email_id: email,
    message: message,
  };

  function isTextareaFilled(textareaId) {
    const textarea = document.getElementById("message");
    if (!"message") {
      return false; // Textarea element not found
    }
    return textarea.value.trim() !== '';
  }

  emailjs.send("service_7pdda3n", "template_xigxrme", params)
    .then((res) => {
      alert("Your email has been sent successfully!");

      // ✅ Clear form fields
      document.getElementById("fullName").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      alert("Failed to send email. Please try again.");
      console.error("EmailJS Error:", err);
    });
}
