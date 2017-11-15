export default (sequelize, DataTypes) => {
 const Colleges = sequelize.define("College", {
   schoolName: DataTypes.STRING,
   undergraduateMajor: DataTypes.STRING,
   startingMedianSalary: DataTypes.STRING,
   midCareerMedianSalary: DataTypes.STRING,
   midCareer10thPercentileSalary: DataTypes.STRING,
   midCareer25thPercentileSalary: DataTypes.STRING,
   midCareer75thPercentileSalary: DataTypes.STRING,
   midCareer90thPercentileSalary: DataTypes.STRING
    });

  const Regions = sequelize.define("Region", {
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

  const Degrees = sequelize.define("Degree", {
    undergraduateMajor: DataTypes.STRING,
    startingMedianSalary: DataTypes.STRING,
    midCareerMedianSalary: DataTypes.STRING,
    percentchangefromStartToMidCareer: DataTypes.DECIMAL(5,1),
    midCareer10thPercentile: DataTypes.STRING,
    midCareer25thPercentile: DataTypes.STRING,
    midCareer75thPercentile: DataTypes.STRING,
    midCareer90thPercentile: DataTypes.STRING
  });
  return Colleges, Regions, Degrees;
 };
