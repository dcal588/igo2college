
DROP DATABASE IF EXISTS IGO2COLLEGE;

CREATE DATABASE IGO2COLLEGE;

USE IGO2COLLEGE;

CREATE TABLE Salary(
id int auto_increment not null,
undergraduateMajor VARCHAR(36)not null,
startingMedianSalary VARCHAR(10) not null,
midCareerMedianSalary VARCHAR(11) not null,
percentChangeStartToMidCareer DECIMAL (5,1) not null,
midCareer10thPercentile VARCHAR(10) not null,
midCareer25thPercentile  VARCHAR(10) not null,
midCareer75thPercentile  VARCHAR(11) not null,
midCareer90thPercentile  VARCHAR(11) not null,
primary key (id)
);
INSERT INTO Salary (undergraduateMajor, startingMedianSalary, midCareerMedianSalary, percentChangeStartToMidCareer, midCareer10thPercentile, midCareer25thPercentile, midCareer75thPercentile, midCareer90thPercentile)
values 
('Accounting','$46,000.00','$77,100.00',67.6,'$42,200.00','$56,100.00','$108,000.00','$152,000.00'),
('Aerospace Engineering','$57,700.00','$101,000.00',75.0,'$64,300.00','$82,100.00','$127,000.00','$161,000.00'),
('Agriculture','$42,600.00','$71,900.00',68.8,'$36,300.00','$52,100.00','$96,300.00','$150,000.00'),
('Anthropology','$36,800.00','$61,500.00',67.1,'$33,800.00','$45,500.00','$89,300.00','$138,000.00'),
('Architecture','$41,600.00','$76,800.00',84.6,'$50,600.00','$62,200.00','$97,000.00','$136,000.00'),
('Art History','$35,800.00','$64,900.00',81.3,'$28,800.00','$42,200.00','$87,400.00','$125,000.00'),
('Biology','$38,800.00','$64,800.00',67.0,'$36,900.00','$47,400.00','$94,500.00','$135,000.00'),
('Business Management','$43,000.00','$72,100.00',67.7,'$38,800.00','$51,500.00','$102,000.00','$147,000.00'),
('Chemical Engineering','$63,200.00','$107,000.00',69.3,'$71,900.00','$87,300.00','$143,000.00','$194,000.00'),
('Chemistry','$42,600.00','$79,900.00',87.6,'$45,300.00','$60,700.00','$108,000.00','$148,000.00'),
('Civil Engineering','$53,900.00','$90,500.00',67.9,'$63,400.00','$75,100.00','$115,000.00','$148,000.00'),
('Communications','$38,100.00','$70,000.00',83.7,'$37,500.00','$49,700.00','$98,800.00','$143,000.00'),
('Computer Engineering','$61,400.00','$105,000.00',71.0,'$66,100.00','$84,100.00','$135,000.00','$162,000.00'),
('Computer Science','$55,900.00','$95,500.00',70.8,'$56,000.00','$74,900.00','$122,000.00','$154,000.00'),
('Construction','$53,700.00','$88,900.00',65.5,'$56,300.00','$68,100.00','$118,000.00','$171,000.00'),
('Criminal Justice','$35,000.00','$56,300.00',60.9,'$32,200.00','$41,600.00','$80,700.00','$107,000.00'),
('Drama','$35,900.00','$56,900.00',58.5,'$36,700.00','$41,300.00','$79,100.00','$153,000.00'),
('Economics','$50,100.00','$98,600.00',96.8,'$50,600.00','$70,600.00','$145,000.00','$210,000.00'),
('Education','$34,900.00','$52,000.00',49.0,'$29,300.00','$37,900.00','$73,400.00','$102,000.00'),
('Electrical Engineering','$60,900.00','$103,000.00',69.1,'$69,300.00','$83,800.00','$130,000.00','$168,000.00'),
('English','$38,000.00','$64,700.00',70.3,'$33,400.00','$44,800.00','$93,200.00','$133,000.00'),
('Film','$37,900.00','$68,500.00',80.7,'$33,900.00','$45,500.00','$100,000.00','$136,000.00'),
('Finance','$47,900.00','$88,300.00',84.3,'$47,200.00','$62,100.00','$128,000.00','$195,000.00'),
('Forestry','$39,100.00','$62,600.00',60.1,'$41,000.00','$49,300.00','$78,200.00','$111,000.00'),
('Geography','$41,200.00','$65,500.00',59.0,'$40,000.00','$50,000.00','$90,800.00','$132,000.00'),
('Geology','$43,500.00','$79,500.00',82.8,'$45,000.00','$59,600.00','$101,000.00','$156,000.00'),
('Graphic Design','$35,700.00','$59,800.00',67.5,'$36,000.00','$45,500.00','$80,800.00','$112,000.00'),
('Health Care Administration','$38,800.00','$60,600.00',56.2,'$34,600.00','$45,600.00','$78,800.00','$101,000.00'),
('History','$39,200.00','$71,000.00',81.1,'$37,000.00','$49,200.00','$103,000.00','$149,000.00'),
('Hospitality & Tourism','$37,800.00','$57,500.00',52.1,'$35,500.00','$43,600.00','$81,900.00','$124,000.00'),
('Industrial Engineering','$57,700.00','$94,700.00',64.1,'$57,100.00','$72,300.00','$132,000.00','$173,000.00'),
('Information Technology (IT)','$49,100.00','$74,800.00',52.3,'$44,500.00','$56,700.00','$96,700.00','$129,000.00'),
('Interior Design','$36,100.00','$53,200.00',47.4,'$35,700.00','$42,600.00','$72,500.00','$107,000.00'),
('International Relations','$40,900.00','$80,900.00',97.8,'$38,200.00','$56,000.00','$111,000.00','$157,000.00'),
('Journalism','$35,600.00','$66,700.00',87.4,'$38,400.00','$48,300.00','$97,700.00','$145,000.00'),
('Management Information Systems (MIS)','$49,200.00','$82,300.00',67.3,'$45,300.00','$60,500.00','$108,000.00','$146,000.00'),
('Marketing','$40,800.00','$79,600.00',95.1,'$42,100.00','$55,600.00','$119,000.00','$175,000.00'),
('Math','$45,400.00','$92,400.00',103.5,'$45,200.00','$64,200.00','$128,000.00','$183,000.00'),
('Mechanical Engineering','$57,900.00','$93,600.00',61.7,'$63,700.00','$76,200.00','$120,000.00','$163,000.00'),
('Music','$35,900.00','$55,000.00',53.2,'$26,700.00','$40,200.00','$88,000.00','$134,000.00'),
('Nursing','$54,200.00','$67,000.00',23.6,'$47,600.00','$56,400.00','$80,900.00','$98,300.00'),
('Nutrition','$39,900.00','$55,300.00',38.6,'$33,900.00','$44,500.00','$70,500.00','$99,200.00'),
('Philosophy','$39,900.00','$81,200.00',103.5,'$35,500.00','$52,800.00','$127,000.00','$168,000.00'),
('Physician Assistant','$74,300.00','$91,700.00',23.4,'$66,400.00','$75,200.00','$108,000.00','$124,000.00'),
('Physics','$50,300.00','$97,300.00',93.4,'$56,000.00','$74,200.00','$132,000.00','$178,000.00'),
('Political Science','$40,800.00','$78,200.00',91.7,'$41,200.00','$55,300.00','$114,000.00','$168,000.00'),
('Psychology','$35,900.00','$60,400.00',68.2,'$31,600.00','$42,100.00','$87,500.00','$127,000.00'),
('Religion','$34,100.00','$52,000.00',52.5,'$29,700.00','$36,500.00','$70,900.00','$96,400.00'),
('Sociology','$36,500.00','$58,200.00',59.5,'$30,700.00','$40,400.00','$81,200.00','$118,000.00'),
('Spanish','$34,000.00','$53,100.00',56.2,'$31,000.00','$40,000.00','$76,800.00','$96,400.00');