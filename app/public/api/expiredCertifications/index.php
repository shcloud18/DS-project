<?php

require 'common.php';

//get database connection from helper class
$db = DbConnection::getConnection();

//create and run query
$sql = 'SELECT * FROM Member INNER JOIN MemberCertAssociation ON Member.memberID = MemberCertAssociation.memberID
INNER JOIN Certification ON MemberCertAssociation.certificationID = Certification.certificationID
WHERE MemberCertAssociation.certStatus = "expired"
';
$vars = [];

if (isset($_GET['memberID'])) {
  //this is a peramiterized query
  $sql = 'SELECT * FROM Member WHERE memberID = ?';
  $vars = [ $_GET['memberID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expiredcerts = $stmt->fetchAll();

//convert to JSON
$json = json_encode($expiredcerts, JSON_PRETTY_PRINT);

//output
header('Content-Type: application/json');
echo $json;
