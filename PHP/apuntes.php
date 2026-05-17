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
    $age = 32;
    $isOld = $age > 40;
    ?>
    <?php
    #Variable
    $name = "Pache";
    #Constantes
    const REALNAME = "Samu";
    define("SECONDNAME", "Alejandro");
    //No se usan en tiempo de ejecución, nada de bucles
    ?>
    </br>
    <?= "Hola $name" ?>
    </br>
    <?= "Hola " . REALNAME . " " . SECONDNAME ?>
    </br>

    <?php
    #var_dump suelta toda la info de la variable
    ?>

    <?php
    #Dos formas de if-else-if
    if ($name == "Samu") {
        #code 1
    } elseif ($name == "Alejandro") {
        #code 2
    } else {
        #code3
    }
    ?>
    <?php if ($name == "Samu"): ?>
        <!-- code 1 -->
    <?php elseif ($name == "Alejandro"): /* Como pongas else if error de token*/ ?>
        <!-- code 2 -->
    <?php else: ?>
        <!-- code 3 -->
    <?php endif; ?>

    <?php
    #Hay ternarias evidentemente
    $esName = $name == "Jorge" ? "Sep" : "Nope";
    ?>

    <?php
    #vemos match
    $outputAge = match ($age) {
        0, 1, 2 => "Eres un baby ",
        3, 4, 5, 6, 7, 8, 9, 10 => "Eres un niño",
        11, 12, 13, 14, 15, 16, 17 => "Eres un joven",
        default => "Eres un adulto ya"
    };
    #Mejoramos
    $outputAge2 = match (true) {
        $age <= 2 => "Eres un baby ",
        $age <= 10 => "Eres un niño",
        $age <= 17 => "Eres un joven",
        default => "Eres un adulto ya"
    };
    #Es excluyente, solo entra 1 vez
    ?>

    <?php
    #Arrays
    $languages = array("PHP", "JS", "Python");
    #$languages2 = ["Kotlin", "Dart", "Java"];
    #Añadir al final
    $languages[] = "Ruby";
    #Si pones [num] siendo num cualquier número, cambia el valor guardado en ese índice
    ?>
    <ul>
        <?php foreach ($languages as $ind => $lang) : ?>
            <li><?= $ind . " - " . $lang ?></li>
        <?php endforeach; ?>
    </ul>

    <?php
    #Array asociativo
    $yo = [
        "nombre" => "Samuel",
        "alias" => "Pache",
        "edad" => 32,
        "oficio" => "Estudiante",
        "lenguajes" => ["PHP", "JS", "Python"]
    ];
    ?>
    <ol>

        <?php foreach ($yo as $key => $value) : ?>
            <li><?php
                if (is_array($value)) {
                    echo "<ul>";
                    echo "Lenguajes";
                    foreach ($value as $subkey => $subvalue) {
                        echo "<li> " . $subvalue . "</li>";
                    }
                    echo "</ul>";
                } else {
                    echo  $key . " - " . $value;
                }

                ?></li>
        <?php endforeach; ?>
    </ol>
    <p>Actualizamos</p>

    <?php
    $yo["nombre"] = "Samuel Alejandro";
    $yo["lenguajes"][] = "Java";
    ?>
    <ol>

        <?php foreach ($yo as $key => $value) : ?>
            <li><?php
                if (is_array($value)) {
                    echo "<ul>";
                    echo "Lenguajes";
                    foreach ($value as $subkey => $subvalue) {
                        echo "<li> " . $subvalue . "</li>";
                    }
                    echo "</ul>";
                } else {
                    echo  $key . " - " . $value;
                }

                ?></li>
        <?php endforeach; ?>
    </ol>
</body>

</html>