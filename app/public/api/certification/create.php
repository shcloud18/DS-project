<?php

require 'common.php';
//step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();
//Step 2 : Create & run the query
// Note the use of parameterized statements to avoid injection
$stmt = $db->prepare(
  'INSERT INTO Certification  (certificationID, certificationName, certifyingAgency, defaultExpirationPeriod)
  VALUES  (?,?,?,?)'
);

$stmt->execute([
  $_POST['certificationID'],
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultExpirationPeriod']
]);

// If needed, get auto-generated PK from // DB
// $pk = $db->LastInsertId();  //https://www.php.net/manual/en/pdo.Lastinsertid.php

// Step 4: Output
// Here, instead of giving output, I'm redirecting to the SELECT API,
// just in case the data changed by entering it
header('HTTP/1.1 303 See Other');
header('Location: ../certification');
