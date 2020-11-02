<?php
require 'common.php';

$db = DbConnection::getConnection();
$certificationName = $_POST['certificationName'];
$certifyingAgency = $_POST['certifyingAgency'];
$defaultExpirationPeriod = $_POST['defaultExpirationPeriod'];
$certificationID = $_POST['certificationID'];
$stmt = $db->prepare(
  "UPDATE Certification
  SET certificationName = '$certificationName',
      certifyingAgency = '$certifyingAgency',
      defaultExpirationPeriod = '$defaultExpirationPeriod'
      WHERE certificationID = '$certificationID'");



$stmt->execute([

]);

header('Content-Type: application/json');

header('Location: ../certification')
?>
