<?php
require __DIR__ . "/utils/seguridad.php";
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BD Películas</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
    if (!$conection) {
        echo "<p>Algo malo pasa, no se pudo realizar la conexión</p>";
    } else {
        echo "<p>Todo bien</p>";
    }

    ?>
    <!---->
    <?php
    //Cerramos la conexión
    mysqli_close($conection);
    ?>
</body>

</html>