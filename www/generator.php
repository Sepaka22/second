<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);


/*$data = json_decode(stripslashes($_POST['data']));

// here i would like use foreach:

foreach($data as $d){
    echo $d;
}     */
//print_r($_POST['data']);
$arr = [];
$date_arr = $_POST['date_arr'];
foreach($_POST['data'] as $data) {
    $d = explode(",", $data);
    if ( count($d) == 4 ) { // костыль, если в тексте есть запятая :)
      array_shift($d);
      array_shift($d);
      array_unshift($d, ",");
    } 
    $d = [$d[0],$d[1]+268,$d[2]+100]; //сдвигаем на нужную координату
    $arr[] = $d;
} 
$destination_folder = 'generated';
$template_file = 'share.jpg';
$template = imagecreatefromjpeg($template_file);

foreach($arr as $a) {
imageTTFText($template, 23, 0, $a[1], $a[2], 0xFFFFFF, "roombold-webfont.ttf", $a[0]);
}
imagefilledrectangle($template, $date_arr[1]+261, $date_arr[2]+79, $date_arr[1]+390, $date_arr[2]+82, 0x2F2B39 );
imageTTFText($template, 19, 0, $date_arr[1]+268, $date_arr[2]+115, 0xFFFF01, "roombold-webfont.ttf", $date_arr[0]);


//output image direcly on the browser.
//header('Content-Type: image/jpeg');
//imagejpeg($template, NULL , 100);

//Or Save image to the folder
$new_name = mt_rand().'_'.mt_rand().'.jpg';
imagejpeg($template, $destination_folder.'/'.$new_name , 100);
echo $new_name;  

//free up memory
imagedestroy($template);
//imagedestroy($image_resource);
//imagedestroy($image_mom_resource);
//imagedestroy($image_dad_resource);


/*** Data base ***/
include 'safemysql.class.php';
$db     = new SafeMysql();
$table  = "phrase"; 
$fields = ['text', 'date', 'agency'];
//$_POST['b_type'] = '14';
$data = $db->filterArray($_POST, $fields);
//$one = $db->getOne("SELECT b_id FROM ?n WHERE u_id = ?s AND b_type = ?s ",$table, $_POST['u_id'], $_POST['b_type'] );
//if (empty($one)) $db->query("INSERT INTO ?n SET ?u", $table, $data);
$db->query("INSERT INTO ?n SET ?u", $table, $data); 



die();

?>