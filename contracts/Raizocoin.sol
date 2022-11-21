//SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
contract Raizocoin is ERC20 {
  
    constructor() ERC20("Raizocoin", "RZO"){
        _mint(msg.sender, 5000*10**18);
    }
}


