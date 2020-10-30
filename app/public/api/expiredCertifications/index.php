<?php

require 'common.php';

$db = DbConnection::getConnection();

$sql = 'SELECT M.firstName, M.lastName, M.position, C.certificationName, P.renewedDate, P.expirationDate, P.status,
cast(date_add(P.renewedDate, INTERVAL CAST(C.defaultExpirationPeriod AS Unsigned) YEAR) as DATE)  as expirationDate,
Case When (date_add(P.renewedDate, INTERVAL CAST(C.defaultExpirationPeriod AS Unsigned) YEAR)<=sysdate()) then "Expired" else "Not Expired" end as overdue
from Member as M, Certifications as C, Person_Cert_Info as P
where C.certificationID=P.certificationID and M.memberID=P.memberID ';
$vars = [];

if (isset($_GET['memberID'])) {
  // This is an example of a parameterized query
  $sql = 'SELECT * FROM Member WHERE memberID = ?';
  $vars = [ $_GET['memberID'] ];
}

$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expiredcerts = $stmt->fetchAll();

$json = json_encode($expiredcerts, JSON_PRETTY_PRINT);

header('Content-Type: application/json');
echo $json;
