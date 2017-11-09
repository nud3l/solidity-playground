pragma solidity ^0.4.17;

contract Complexity {
  function linear(uint a) public pure returns (uint b){
    for (uint i = 0; i < a; i++) {
      b = 1;
      b = b + a;
    }
  }

  function quadratic(uint a) public pure returns (uint b){
    for (uint i = 0; i < a; i++) {
      for (uint j = 0; j < a; j++) {
        b = 1;
        b = b + a;
      }
    }
  }

  function cubic(uint a) public pure returns (uint b){
    for (uint i = 0; i < a; i++) {
      for (uint j = 0; j < a; j++) {
        for (uint k = 0; k < a; k++) {
          b = 1;
          b = b + a;
        }
      }
    }
  }
}
