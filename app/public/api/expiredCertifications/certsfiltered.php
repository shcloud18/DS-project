<?php

require 'common.php';

//get database connection from helper class
$db = DbConnection::getConnection();

//create and run query
$sql = 'SELECT * FROM Member INNER JOIN MemberCertAssociation ON Member.memberID = MemberCertAssociation.memberID
INNER JOIN Certification ON MemberCertAssociation.certificationID = Certification.certificationID
WHERE MemberCertAssociation.certStatus = "expired"
';

if (isset($_POST['submit'])) {
  $q = $db->real_escape_string($_POST['q']);
  $column = $db->real_escape_string($_POST['column']);

  $sql = $db->query(query: "SELECT firstName FROM Member WHERE $column LIKE '%$q%'");
  if ($sql->num_rows > 0) {
    while ($data = $sql->fetch_array())
        echo $data['firstName']
  } else {
    echo "Your search query doesn't match any data!";
  }
}



$vars = [$_POST['certificationName']];


$stmt = $db->prepare($sql);
$stmt->execute($vars);

$expiredcerts = $stmt->fetchAll();

//convert to JSON
$json = json_encode($expiredcerts, JSON_PRETTY_PRINT);

//output
header('Content-Type: application/json');
echo $json;
