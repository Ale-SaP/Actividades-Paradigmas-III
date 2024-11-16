<?php 
    include("./conection/ansp_connection.php"); 
    conection_database();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guia de PHP</title>

    <link rel="stylesheet" href="./Styles/styles.css">
</head>
<body>
    <header class="header">
        <h1>Guia de Ejercicios de PHP</h1>
    </header>
    
    <div class="container">
        <nav class="navbar">
        <ul>
            <li><a href="index.php">Inicio</a></li>
            <?php
            $sql = "SELECT nombre_item, nombre_modulo FROM menu";
            if (!$resultados = $con->query($sql)) {
                printf("Falló en la obtención de datos\n");
                exit();
            }

            $components = $resultados->fetch_all(MYSQLI_ASSOC);
            foreach ($components as $component) {
                echo "<li><a href=\"index.php?modulo=$component[nombre_modulo]\">$component[nombre_item]</a></li>";
            }

            ?>
        </ul>
        </nav>
        
        <main class="content">
        <?php

            if (isset($_GET["modulo"])) {
            include("components/$_GET[modulo].php");
            } else {
            ?>
                <h2>Bienvenido a la Guía PHP</h2>
                <p>Este es la pagina principal</p> 
                <p>Esta pagina contiene los ejercicios de la guía 20 y 22 de php.</p>
            <?php
            }

        ?>
        </main>
    </div>

</body>
</html>