var Functional = artifacts.require("Functional");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Functional);
};
