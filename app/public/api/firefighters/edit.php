<?php
require 'common.php';

$db = DbConnection::getConnection();
$position = $_POST['position'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$startDate = $_POST['startDate'];
$address = $_POST['address'];
$radio = $_POST['radioNumber'];
$station = $_POST['stationNumber'];
$email = $_POST['email'];
$phone = $_POST['workPhone'];
$isActive = $_POST['isActive'];
$gender = $_POST['gender'];
$dob = $_POST['dob'];
$memberID = $_POST['memberID'];
$city = $_POST['city'];
$state = $_POST['state'];
$stmt = $db->prepare(
  "UPDATE Member
  SET
  position = '$position',
  firstName = '$firstName',
  lastName = '$lastName',
  startDate = '$startDate',
  dob = '$dob',
  gender = '$gender',
  isActive = '$isActive',
  workPhone = '$phone',
  email = '$email',
  stationNumber = '$station',
  radioNumber = '$radio',
  address = '$address',
  city = '$city',
  state = '$state'
  WHERE memberID = '$memberID'");


  $stmt->execute([

  ]);

    header('Content-Type: application/json');

    header('Location: ../firefighters/index.php')
?>
