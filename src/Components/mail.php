<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $Nom = $_POST['Nom'];
    $Prenom = $_POST['Prenom'];
    $email = $_POST['Email'];
    $pays = $_POST['Pays'];
    $ville = $_POST['Ville'];

    // Construct email message
    $subject = "New form submission";
    $message = "Nom: $Nom\n";
    $message .= "Prenom: $Prenom\n";
    $message .= "Email: $email\n";
    $message .= "Pays: $pays\n";
    $message .= "Ville: $ville\n";
    $message .= "Telephone: $telephone\n";

    // Set recipient email address
    $to = "alami.housni@gmail.com";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        echo "Thank you for your submission!";
    } else {
        // Failed to send email
        echo "Oops! Something went wrong. Please try again later.";
    }
} else {
    // If this page is accessed directly, redirect to the form page
    header("Location: Formulaire.js"); // Replace with the URL of your form page
    exit;
}
