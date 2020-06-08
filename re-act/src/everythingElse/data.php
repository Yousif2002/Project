/*
	Save data to cases.json, whenever script.js gets a new version of data.
*/
<?php 
# open cases.json to edit.
$json = fopen("cases.json", "w");
# the text we want to save in cases.json
$cases = $_POST['cases'];
# writing data into cases.json
fwrite($json, 'var covid = '.$cases.';');
# close the file
fclose($json);
?>
