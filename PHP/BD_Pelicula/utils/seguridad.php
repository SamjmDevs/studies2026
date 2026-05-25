<?php
//Constantes de base de datos
define("BD_HOST", "localhost");
define("BD_USER", "jose");
define("BD_PASSWD", "josefa");
define("BD_NAME", "videoclub");
//Creamos la conexión
$conection = mysqli_connect(BD_HOST, BD_USER, BD_PASSWD, BD_NAME);
//Control de fallo de conexión
