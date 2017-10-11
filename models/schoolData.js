 //salary
 module.exports = function(sequelize, DataTypes) {
 var Salary = sequelize.define("Salary", {
   undergraduateMajor: DataTypes.STRING,
   startingMedianSalary: DataTypes.STRING,
   midCareerMedianSalary: DataTypes.STRING,
   percentChangeStartToMidCareer: DataTypes.DECIMAL(5,1),
   midCareer10thPercentile: DataTypes.STRING,
   midCareer25thPercentile: DataTypes.STRING,
   midCareer75thPercentile: DataTypes.STRING,
   midCareer90thPercentile: DataTypes.STRING
    });

  var Region = sequelize.define("Region", {
    region: DataTypes.STRING,
    schoolName: DataTypes.STRING,
    undergraduateMajor: DataTypes.STRING,
    startingMedianSalary: DataTypes.STRING,
    midCareerMedianSalary: DataTypes.STRING,
    midCareer10thPercentile: DataTypes.STRING,
    midCareer25thPercentile: DataTypes.STRING,
    midCareer75thPercentile: DataTypes.STRING,
    midCareer90thPercentile: DataTypes.STRING
  });

  var Degree = sequelize.define("Degree", {
    undergraduateMajor: DataTypes.STRING,
    startingMedianSalary: DataTypes.STRING,
    midCareerMedianSalary: DataTypes.STRING,
    percentchangefromStartToMidCareer: DataTypes.DECIMAL(5,1),
    midCareer10thPercentile: DataTypes.STRING,
    midCareer25thPercentile: DataTypes.STRING,
    midCareer75thPercentile: DataTypes.STRING,
    midCareer90thPercentile: DataTypes.STRING
  });
  return Salary, Region, Degree;
 }







// //region
