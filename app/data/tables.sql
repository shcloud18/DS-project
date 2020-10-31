create database dsproject_1;
use dsproject_1;
drop table Member;
drop table Certifications;
drop table Person_Cert_Info;

CREATE TABLE Member (
  `memberID` VARCHAR(64) NOT NULL,
  `position` VARCHAR(45) NOT NULL,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `state` VARCHAR(45) NOT NULL,
  `workPhone` VARCHAR(45) NOT NULL,
  `radioNumber` VARCHAR(45) NOT NULL,
  `stationNumber` VARCHAR(45) NOT NULL,
  `isActive` ENUM('Active', 'Not Active') Not null default 'Not Active',
  `dob` DATE NOT NULL,
  `startDate` DATE NOT NULL,
  PRIMARY KEY (`memberID`));

  INSERT INTO Member (memberID, position, firstName, lastName, email, gender, address, city, state, workPhone, radioNumber, stationNumber, isActive, dob, startDate) VALUES
  ("001", "Chief", "Kathryn", "Pryde", "kpryde@ocfr.org", "Female", "1123 Xavier School Road", "Watkinsville", "GA", "707-555-1234", "A-1", "1", "Active", "1954-12-01", "2001-02-01"),
  ("002", "Firefighter", "Warren", "Worthington", "wworthington@ocfr.org", "Male", "1140 Experimentville Road", "Watkinsville", "GA", "707-555-2222", "A-2", "2", "Active", "1975-06-04", "2003-11-14");

show tables;


CREATE TABLE Certification (
certificationID VARCHAR(64) PRIMARY KEY NOT NULL,
certificationName VARCHAR(64) NOT NULL,
certifyingAgency VARCHAR(64) NOT NULL,
defaultExpirationPeriod VARCHAR(4) NOT NULL
);

INSERT INTO Certification (certificationID, certificationName, certifyingAgency, defaultExpirationPeriod) VALUES
("C0001-X001-0001", "CPR", "CPR for Healthcare Providers/American Heart Association", "2"),
("C0002-X002-0002", "CPR", "CPR for the Professional Rescuer/American Red Cross", "2"),
("C0003-X003-0003", "Firefighter I", "Athens Technical College", "3"),
("C0004-X004-0004", "Firefighter I", "Ivy Technical College", "3"),
("C0005-X005-0005", "POST", "Georgia POST Academy", "5");



CREATE TABLE MemberCertAssociation (
certassocID VARCHAR(64) PRIMARY KEY NOT NULL,
memberID VARCHAR(64) references Member(memberID),
certificationID VARCHAR(64) REFERENCES Certification(certificationID),
renewedDate DATE DEFAULT NULL,
expirationDate DATE DEFAULT NULL,
certStatus ENUM("valid", "expired", "enter status") default "enter status");

INSERT INTO MemberCertAssociation (certassocID, memberID, certificationID, renewedDate, expirationDate, certStatus) VALUES
("MCA001", "001", "C0001-X001-0001", "2016-11-04", "2022-05-06", "valid"),
("MC002", "002", "C0005-X005-0005", "2017-06-19", "2024-12-03", "valid"),
("MC003", "001", "C0004-X004-0004", "2018-11-02", "2021-03-13", "valid");
