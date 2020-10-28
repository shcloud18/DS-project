use dsproject_1;
drop table Member;
drop table Certifications;
drop table Person_Cert_Info;



CREATE TABLE Member (
    memberID INTEGER PRIMARY KEY NOT NULL,
    position VARCHAR(64) NULL,
    firstName VARCHAR(64) NOT NULL,
    lastName VARCHAR(64) NOT NULL,
    gender ENUM('female', 'male'),
    address VARCHAR(64) NOT NULL,
    city VARCHAR(64),
    state VARCHAR(64),
    workPhone INT NULL,
    radioNumber INT,
    stationNumber INT,
    isActive ENUM("Active", "Not Active") Not Null default 'Not Active',
    dob DATE NOT NULL,
    startDate DATE DEFAULT NULL
);
SELECT * FROM Member WHERE memberID = ?;
INSERT INTO Member (memberID, position, firstName, lastName, gender, address, city, state, workPhone, radioNumber, stationNumber, isActive, dob, startDate) VALUES
("001-1000", "Chief", "Kathryn", "Pryde", "Female", "1123 Xavier School Road", "Watkinsville", "GA", "707-555-1234", "A-1", "0", "Active", "12-02-1954", "02-01-2001"),
("002-2000", "Firefighter", "Warren", "Worthington", "Male", "1140 Experimentville Road", "Watkinsville", "GA", "707-555-2222", "A-2", "1", "Active", "04-15-1975", "05-06-2003");
