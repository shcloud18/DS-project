<?php
require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Certification
  SET certificationName = ?, certifyingAgency = ?, defaultexpirationPeriod = ? WHERE certificationID = ?'

);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultexpirationPeriod']
]);

header('Content-Type: application/json');
echo $json;
