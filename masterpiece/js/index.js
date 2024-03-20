function sendMail() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validation
    if (name === "" || email === "" || message === "") {
        // If any of the fields are empty, throw an error with red color
        bootstrapAlert("Please fill in all fields", "error");
        return; // Exit the function
    }

    const serviceID = "service_8dbve1k";
    const templateID = "template_6uhumak";
    const params = {
        name: name,
        email: email,
        message: message
    };

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";

                console.log(res);
                bootstrapAlert("Mail Sent Successfully", "success"); // Call the bootstrapAlert function after successful submission
            })
        .catch((err) => {
            console.log(err);
            bootstrapAlert("Error Sending Mail", "error"); // Call the bootstrapAlert function to show error alert
        });
}


function submitForm(event) {
    event.preventDefault(); // Prevent default form submission
    sendMail();
}

function bootstrapAlert(message, messageType) {
    $(".bootstrap-growl").remove();
    var type, delay;

    // Determine type and delay based on messageType
    if (messageType === "error") {
        type = "danger"; // Set type to danger (red) for error messages
        delay = 5000;    // Longer delay for error messages
    } else if (messageType === "success") {
        type = "success"; // Set type to success (green) for success messages
        delay = 3000;     // Shorter delay for success messages
    } else {
        console.error("Invalid message type:", messageType);
        return; // Exit function if messageType is neither error nor success
    }


    $.bootstrapGrowl(message, {
        type: type,
        offset: { from: "top", amount: 250 },
        align: "right",
        delay: delay,
        allow_dismiss: true,
        stackup_spacing: 10
    });
}

document.getElementById("download-badge-link").addEventListener("click", function(event) {
    event.preventDefault();
    var link = document.createElement("a");
    link.target = "_blank";
    link.href = "Emmanuel.pdf"; // Replace with the actual path to your CV
    link.download = "Emmanuel-Okikiola.pdf"; // Specify the file name for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
