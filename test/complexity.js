var Complexity = artifacts.require("Complexity");
var a = 9;

contract('Complexity', function(accounts) {
  it("Linear function", function() {
    var contract;
    return Complexity.deployed().then(function(instance) {
      contract = instance;
      return instance.linear.estimateGas(a);
    }).then(function(gasUsed){
      console.log("Gas used: " + gasUsed);
    }).then(function(){
      return contract.linear.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
  it("Quadratic function", function() {
    var contract;
    return Complexity.deployed().then(function(instance) {
      contract = instance;
      return instance.quadratic.estimateGas(a);
    }).then(function(gasUsed){
      console.log("Gas used: " + gasUsed);
    }).then(function(){
      return contract.quadratic.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
  it("Cubic function", function() {
    var contract;
    return Complexity.deployed().then(function(instance) {
      contract = instance;
      return instance.cubic.estimateGas(a);
    }).then(function(gasUsed){
      console.log("Gas used: " + gasUsed);
    }).then(function(){
      return contract.cubic.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
});
