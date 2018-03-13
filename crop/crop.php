<?php
// Original image
$filename = 'photo.jpg';
//die(print_r($_POST));
$new_filename = 'photo1.jpg';

// Get dimensions of the original image
list($current_width, $current_height) = getimagesize($filename);

// The x and y coordinates on the original image where we
// will begin cropping the image, taken from the form
$x1    = $_POST['x1'];
$y1    = $_POST['y1'];
$x2    = $_POST['x2'];
$y2    = $_POST['y2'];
$w    = $_POST['w'];
$h    = $_POST['h'];     

//die(print_r($_POST));

// This will be the final size of the image
$crop_width = 100;
$crop_height = 100;

// Create our small image
$new = imagecreatetruecolor($crop_width, $crop_height);
// Create original image
$current_image = imagecreatefromjpeg($filename);
// resamling (actual cropping)
imagecopyresampled($new, $current_image, 0, 0, $x1, $y1, $crop_width, $crop_height, $w, $h);
// creating our new image
imagejpeg($new, $new_filename, 95);