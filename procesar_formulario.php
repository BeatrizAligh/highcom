<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "luisaleaccott5@gmail.com"; // Reemplaza con tu dirección de correo
    $asunto = "Nuevo mensaje de contacto de $nombre";

    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Teléfono: $telefono\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    // Para enviar el correo electrónico
    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        // Mensaje enviado con éxito
        echo "Mensaje enviado con éxito.";
    } else {
        // Error al enviar el mensaje
        echo "Hubo un problema al enviar el mensaje.";
    }
}
?>