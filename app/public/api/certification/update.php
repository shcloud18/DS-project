<?php
require 'common.php';

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Certification
  SET certificationName = ?, certifyingAgency = ?, defaultExpirationPeriod = ? WHERE certificationID = ?'

);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultExpirationPeriod']
]);

header('HTTP/1.1 303 See Other');

header('Location: ../certification')
?>
