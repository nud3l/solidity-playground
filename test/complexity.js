var Complexity = artifacts.require("Complexity");

contract('Complexity', function(accounts) {
  it("Linear function", function() {
    var a = 10;

    return Complexity.deployed().then(function(instance) {
      return instance.linear.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
  it("Quadratic function", function() {
    var a = 50;

    return Complexity.deployed().then(function(instance) {
      return instance.quadratic.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
  it("Cubic function", function() {
    var a = 50;

    return Complexity.deployed().then(function(instance) {
      return instance.cubic.call(a);
    }).then(function(b) {
      assert.equal(b.valueOf(), (a + 1), "Should be 10");
    });
  });
});
