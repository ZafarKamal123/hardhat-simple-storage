//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SimpleStorage {
    uint256 _storedNumber;

    // Updates the stored number.
    function set(uint256 x) public {
        _storedNumber = x;
    }

    // Retrieves the stored number.
    function get() public view returns (uint256) {
        return _storedNumber;
    }

    // Resets the stored number.
    function reset() public {
        _storedNumber = 0;
    }
}
