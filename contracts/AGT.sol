//SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
contract AGT is ERC20 {
  
    constructor() ERC20("AGT", "AGT"){
        _mint(msg.sender, 1000000*10**18);
    }
}
