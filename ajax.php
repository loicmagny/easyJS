<?php
function functionFinder($call, $file, $function, $params)
{
    if ($call) {
        require_once '' . $file . '.php';

        if (isset($params)) {
            echo json_encode('' . $function . '(' . $params . ')');
            // Sinon
        } else {
            echo json_encode($function);
        }
    }
}
