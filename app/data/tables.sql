USE member_data;

CREATE TABLE IF NOT EXISTS `mydb`.`Person` (
  `MemberID` INT NOT NULL,
  `First_Name` VARCHAR(45) NULL,
  `Last_Name` VARCHAR(45) NULL,
  `radioNumber` VARCHAR(45) NULL,
  `stationNumber` INT NULL,
  `isActive` TINYINT NULL,
  `Address` VARCHAR(45) NULL,
  `Email` VARCHAR(45) NULL,
  `Phone_Number(s)` INT NULL,
  `DOB` DATE NULL,
  `Start_Date` DATE NULL,
  `Gender` VARCHAR(45) NULL,
  `Position` VARCHAR(45) NULL,
  PRIMARY KEY (`MemberID`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`Member/Cert Info` (
  `MemberID` INT NOT NULL,
  `Certification_ID` INT NOT NULL,
  `Exp_Date` DATETIME NULL,
  `Person_MemberID` INT NOT NULL,
  `Certifications_Certification_ID` INT NOT NULL,
  PRIMARY KEY (`MemberID`, `Certification_ID`, `Person_MemberID`, `Certifications_Certification_ID`),
  INDEX `fk_Member/Cert Info_Person_idx` (`Person_MemberID` ASC) VISIBLE,
  INDEX `fk_Member/Cert Info_Certifications1_idx` (`Certifications_Certification_ID` ASC) VISIBLE,
  CONSTRAINT `fk_Member/Cert Info_Person`
    FOREIGN KEY (`Person_MemberID`)
    REFERENCES `mydb`.`Person` (`MemberID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Member/Cert Info_Certifications1`
    FOREIGN KEY (`Certifications_Certification_ID`)
    REFERENCES `mydb`.`Certifications` (`Certification_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`Certifications` (
  `Certification_ID` INT NOT NULL,
  `Certifying_Agency` VARCHAR(45) NULL,
  `Certification_Name` VARCHAR(45) NULL,
  `Default_Expiration_Period` INT NULL DEFAULT (years),
  PRIMARY KEY (`Certification_ID`))
ENGINE = InnoDB
