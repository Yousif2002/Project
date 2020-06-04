<?php 
$json = fopen("cases.json", "w");
$cases = $_POST['cases'];
fwrite($json, 'var covid = '.$cases.';');
fclose($json);
?>
