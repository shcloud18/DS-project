use innodb;
drop table Person;
drop table Certifications;
drop table Person_Cert_Info;



CREATE TABLE Person (
    memberID INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    gender ENUM('female', 'male'),
    address VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    phone_num1 INT NULL,
    phone_num2 INT NULL,
    radio_num INT,
    station_num INT,
    isActive TINYINT,
    dob DATE NULL,
    start_date DATE NULL,
    postion VARCHAR(64) NULL
);

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
