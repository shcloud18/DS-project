<?php

require 'common.php';


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Member
  (memberID, position, firstName, lastName, email, gender, address, city, state, workPhone, radioNumber, stationNumber, isActive, dob, startDate)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
);


$stmt->execute([
  $_POST['memberID'],
  $_POST['position'],
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['email'],
  $_POST['gender'],
  $_POST['address'],
  $_POST['city'],
  $_POST['state'],
  $_POST['workPhone'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['dob'],
  $_POST['startDate']
]);


header('HTTP/1.1 303 See Other');
header('Location: ../firefighters');
