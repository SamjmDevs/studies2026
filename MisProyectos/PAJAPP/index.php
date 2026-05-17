<?php
//Conexión a la BBDD
define("SERVER", "localhost");
define("USUARIO", "jose");
define("CONTRASENA", "josefa");
define("BD_NAME", "pajapp");
//
$conect = mysqli_connect(SERVER, USUARIO, CONTRASENA, BD_NAME);
// Control conexión
if (!$conect) {
    die("Error de conexión: " . mysqli_connect_error());
}
//Control de errores 
if (isset($_POST["btnEntrar"])) {
    //Errores de usuario
    $err_no_name = $_POST["username"] == "";
    $err_name_short = strlen($_POST["username"]) <= 5;
    $err_name_long = strlen($_POST["username"]) > 20;
    //
    $error_name = $err_no_name || $err_name_short || $err_name_long;
    //
    $err_no_pass = $_POST["passwd"] == "";
}
mysqli_close($conect);
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAJAPP</title>
    <style>
        .error {
            text-decoration: underline;
            color: #f14;
        }
    </style>
</head>

<body>
    <header>
        <h1>Bienvenido a PAJAPP</h1>
    </header>
    <main>
        <form action="index.php" method="post" enctype="multipart/form-data">
            <label for="username">Nombre de Usuario:</label>
            <input type="text" name="username" id="username" value="<?php if (isset($err_no_name)) echo $_POST["username"]; ?>">
            <?php
            if (isset($_POST["btnEntrar"]) && $error_name) {
                if ($err_no_name) {
                    echo "<p class='error'>* Introduzca un nombre de usuario *</p>";
                } else if ($err_name_short) {
                    echo "<p class='error'>* Nombre de usuario demasiado corto, debe contener al menos 5 caracteres *</p>";
                } else if ($err_name_long) {
                    echo "<p class='error'>* Nombre de usuario demasiado largo, máximo 20 caracteres *</p>";
                }
            }
            ?>
            <label for="passwd">Contraseña: </label>
            <input type="password" name="passwd" id="passwd">
            <?php
            if (isset($err_no_pass) && $err_no_pass == true) {
                echo "<p class='error'>Debe introducir una contraseña</p>";
            }
            ?>
            <button type="submit" name="btnEntrar" id="btnEntrar">Enviar</button>
        </form>

    </main>
    <footer></footer>

</body>

</html>