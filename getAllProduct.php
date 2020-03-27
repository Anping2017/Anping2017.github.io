<?php //check the errors
ini_set("error_reporting", E_ALL);
ini_set("log_errors", "1");
ini_set("error_log", "php_errors.txt");
?>
<?php
//call the initialise and set variables
//require_once ("reset.php");
require_once ("data.php");
?>
<?php 
require_once("data.php");
$query = "select * from stock";
$result = mysqli_query($conn,$query);
//$test_row = mysql_fetch_assoc($result);
echo"<table id = 'porduct_list' class='product-list'>";
while($test_row = mysqli_fetch_assoc($result)){
    $name = $test_row['name'];
    echo"<tr>";
    echo"<td>".$test_row['name']."</td>";
    echo"<td>".$test_row['price']."</td>";
    echo"<td>".$test_row['unit']."</td>";
    echo"<td><button onclick= 'minors(this)'>-</button><input value = '0' readonly><button onclick = 'plus(this)'>+</button></td>";
    echo"</tr>";
}
echo"</table>";
echo "<button onclick= 'next()'>下一步</button>";
?>
                