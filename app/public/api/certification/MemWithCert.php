<?php
require 'common.php';

$db = DbConnection::getConnection();


$sql = "SELECT m.firstName, m.lastName, c.certificationName, mca.expirationDate, mca.memberID FROM Certification AS c, Member AS m, MemberCertAssociation AS mca WHERE m.memberID = mca.memberID AND c.certificationID = mca.certificationID";
$vars = [];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$certification = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($certification, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
?>
