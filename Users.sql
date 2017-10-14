USE IGO2COLLEGE;

CREATE TABLE Users (
id int auto_increment not null,
firstName VARCHAR(30) not null,
lastName VARCHAR(30) not null,
userName VARCHAR(40) COLLATE utf8_unicode_ci not null,
password VARCHAR(15) COLLATE utf8_unicode_ci not null,
primary key (id)
);

INSERT INTO Users (firstName, lastName, userName, password)
VALUES ("Erika", "Yardumian", "eyard", "test");
