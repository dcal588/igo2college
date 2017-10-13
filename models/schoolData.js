 //salary
 module.exports = function(sequelize, DataTypes) {
 var College = sequelize.define("College", {
   schoolName: DataTypes.STRING,
   undergraduateMajor: DataTypes.STRING,
   startingMedianSalary: DataTypes.STRING,
   midCareerMedianSalary: DataTypes.STRING,
   midCareer10thPercentileSalary: DataTypes.STRING,
   midCareer25thPercentileSalary: DataTypes.STRING,
   midCareer75thPercentileSalary: DataTypes.STRING,
   midCareer90thPercentileSalary: DataTypes.STRING
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
  return College, Region, Degree;
 }
 console.log("hi");







// //region
