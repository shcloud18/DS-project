use innodb;
drop table Person;
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
    radio_num INT,
    station_num INT,
    isActive ENUM("Active", "Not Active") Not Null default 'Not Active',
    dob DATE NOT NULL,
    start_date DATE DEFAULT NULL,
);

INSERT INTO Member (memberID, position, firstName, lastName, gender, address, city, state, workPhone, radio_num, station_num, isActive, dob, start_date) VALUES
("001-1000", "Chief", "Kathryn", "Pryde", "Female", "1123 Xavier School Road", "Watkinsville", "GA", "707-555-1234", "A-1", "0", "Active", "12-02-1954", "02-01-2001"),
("002-2000", "Firefighter", "Warren", "Worthington", "Male", "1140 Experimentville Road", "Watkinsville", "GA", "707-555-2222", "A-2", "1", "Active", "04-15-1975", "05-06-2003");


CREATE TABLE Certifications (
    Certification_ID INT NOT NULL,
    Certifying_Agency VARCHAR(45) NULL,
    Certification_Name VARCHAR(45) NULL,
    Default_Expiration_Period INT NULL,
    PRIMARY KEY (Certification_ID)
);

CREATE TABLE Person_Cert_Info (
    memberID INT NOT NULL,
    Certification_ID INT NOT NULL,
    Exp_Date DATETIME NULL,
    Person_MemberID INT NOT NULL,
    Certifications_Certification_ID INT NOT NULL,
    PRIMARY KEY (memberID , Certification_ID , Person_MemberID , Certifications_Certification_ID),
    CONSTRAINT fk_Person_Cert_Info_Person FOREIGN KEY (Person_MemberID)
        REFERENCES Person (memberID)
        ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT fk_Person_Cert_Info_Certifications FOREIGN KEY (Certifications_Certification_ID)
        REFERENCES Certifications (Certification_ID)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);
