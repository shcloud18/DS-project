<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Certifications
  SET certificationName = ?, certifyingAgency = ?, defaultexpirationPeriod = ? WHERE certificationID = ?'
);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultexpirationPeriod']
]);

header('HTTP/1.1 303 See Other');
