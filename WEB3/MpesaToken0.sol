// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MPesaToken is ERC20, Ownable {
    mapping(address => bool) private frozenAccounts;

    event FrozenFunds(address indexed target, bool frozen);

    constructor() ERC20("MPesaToken", "MPT") {
        _mint(msg.sender, 1000000 * 10 ** decimals()); // Mint initial supply to contract owner
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override {
        require(!frozenAccounts[from], "Account is frozen");
        require(!frozenAccounts[to], "Recipient account is frozen");
        super._beforeTokenTransfer(from, to, amount);
    }

    function freezeAccount(address target) external onlyOwner {
        frozenAccounts[target] = true;
        emit FrozenFunds(target, true);
    }

    function unfreezeAccount(address target) external onlyOwner {
        frozenAccounts[target] = false;
        emit FrozenFunds(target, false);
    }
}

