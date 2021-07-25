#!/usr/bin/env php

<?php

$numberList = array();

for ($x = 0; $x < 100; $x++) {
    $y = $x + 1;
    array_push($numberList, $y);
}

print_r($numberList);

//function to check numbers
function checkNumber($v)
{
    if ($v % 5 === 0 && $v % 3 === 0) {
        $v = 'foobar';
        return $v;
    } elseif ($v % 5 === 0) {
        $v = 'bar';
        return $v;
    } elseif ($v % 3 === 0) {
        $v = 'foo';
        return $v;
    } else {
        return $v;
    }
}

print_r(array_map("checkNumber", $numberList));

?>