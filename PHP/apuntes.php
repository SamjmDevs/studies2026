<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prácticas PHP</title>
    <style>
        body {
            background-color: lightgray;
        }
    </style>
</head>

<body>
    <?php
    echo "Hola mundo";
    //Comentario de linea
    /*Comentario de bloque*/
    #Comentario de Unix
    $name = "Pache";
    ?>
    </br>
    <?= "Hola $name" ?>
    </br>
    <?= var_dump($name) ?>
    <?php
    #var_dump suelta toda la info de la variable
    ?>
</body>

</html>