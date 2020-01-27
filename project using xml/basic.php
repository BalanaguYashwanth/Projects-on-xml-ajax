<?php

echo '<response>';

$food = $_GET['food'];

$foodArray=array('egg','rice','dal','chips');

if(in_array($food,$foodArray))
{
    echo "item is there".$food.!;
}
elseif($food=="")
{
    echo "enter the item";
}
else
{
    echo "any food item is not avaliable".$food.'!';
}


echo '</response>';

?>

