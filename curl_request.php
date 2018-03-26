<?php
  if (file_exists('./cache_file.txt') && (filemtime('./cache_file.txt') > (time() - 60 * 10 ))) {
    $file = file_get_contents('./cache_file.txt');
    echo $file;
  } else {
    $file = file_get_contents('http://rentcafe.com/rentcafeapi.aspx?requestType=apartmentavailability&APIToken=NDY5OTI%3d-XDY6KCjhwhg%3d&propertyCode=p0155985');
    file_put_contents('./cache_file.txt', $file, LOCK_EX);
    echo $file;
  }
?>