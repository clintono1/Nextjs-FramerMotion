// SPDX-License-Identifier: MIT

// Amended by Clinton Oka

pragma solidity ^0.8.0;

import "./ERC721A.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SoxialPug is Ownable, ERC721A, ReentrancyGuard{
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    //supply and price configuration
    uint256 public maxSupply = 8888;
    uint256 public cost = 0.025 ether;
    uint256 public maxWL = 2;
    uint256 public maxPublic = 10; //max total for public mint

    //sale configuration
    bool public paused = false;
    bool public presaleActive = false;
    bool public revealed = false;

    /// Merkle Root
    bytes32 public merkleRoot;

    //METADATA
    string public uriPre = "";
    string public uriSuf = ".json";
    string public hiddenMetadataUri;

    constructor() ERC721A("SoxialPug", "SOXIALPUG") {
      setHiddenMetadataUri("ipfs://QmaCTXxNZpTyWs3GJjgNqqmQFUa3oLAcdsvpaHGZNup4A3/hidden.json");
    }

    modifier mintCheck(uint256 _mintAmount) {
    require(_mintAmount > 0 && _mintAmount <= maxPublic, "Mint amount error");
    require(supply.current() + _mintAmount <= maxSupply, "Supply max reached!");
    _;
  }
    modifier mintCheckWL(uint256 _mintAmount) {
    require(_mintAmount > 0 && _mintAmount <= maxWL, "Mint amount error");
    require(supply.current() + _mintAmount <= maxSupply, "Supply max reached!");
    _;
  }

  function mint(uint256 _mintAmount ) public payable mintCheck(_mintAmount) {
    require(!paused, "The contract is paused!");

    if (msg.sender != owner()) {
    require(msg.value >= cost * _mintAmount, "Insufficient funds!");
    }
    
    _mintLoop(msg.sender, _mintAmount);
  }
  function mintForAddress(uint256 _mintAmount, address _receiver) public mintCheck(_mintAmount) onlyOwner {
    _mintLoop(_receiver, _mintAmount);
  }

  function mintWhitelist(uint256 _mintAmount, bytes32[] calldata merkleProof)
        public
        payable
        isValidMerkleProof(merkleProof, merkleRoot)
        mintCheckWL(_mintAmount)
    {
    require(!paused, "The contract is paused!");
    _mintLoop(msg.sender, _mintAmount);
    }
  
  modifier isValidMerkleProof(bytes32[] calldata merkleProof, bytes32 root) {
        require(
            MerkleProof.verify(
                merkleProof,
                root,
                keccak256(abi.encodePacked(msg.sender))
            ),
            "Address does not exist in list"
        );
        _;
    }
    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    
  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
    uint256 currentTokenId = 1;
    uint256 ownedTokenIndex = 0;

    while (ownedTokenIndex < ownerTokenCount && currentTokenId <= maxSupply) {
      address currentTokenOwner = ownerOf(currentTokenId);

      if (currentTokenOwner == _owner) {
        ownedTokenIds[ownedTokenIndex] = currentTokenId;

        ownedTokenIndex++;
      }

      currentTokenId++;
    }

    return ownedTokenIds;
  }

    function _startTokenId() 
        internal 
        view 
        virtual 
        override 
        returns (uint256) 
    {
        return 1;
    }

  function tokenURI(uint256 _tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(_tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    if (revealed == false) {
      return hiddenMetadataUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), uriSuf))
        : "";
  }
    //Set Hidden Metadata
  function setHiddenMetadataUri(string memory _hiddenMetadataUri) public onlyOwner {
    hiddenMetadataUri = _hiddenMetadataUri;
  }
    //Set URI Prefix
  function setUriPrefix(string memory _uriPre) public onlyOwner {
    uriPre = _uriPre;
  }
    //Set URI Suffix
  function setUriSuffix(string memory _uriSuf) public onlyOwner {
    uriSuf = _uriSuf;
  }
    //Metadata reveal function.
    function setRevealed(bool _state) public onlyOwner {
    revealed = _state;
  }
    //Pause Contract Function
    function setPaused(bool _state) public onlyOwner {
    paused = _state;
  }
    // supply counter
    function _mintLoop(address _receiver, uint256 _mintAmount) internal {
    for (uint256 i = 0; i < _mintAmount; i++) {
      supply.increment();
      _safeMint(_receiver, supply.current());
    }
  }
  function _baseURI() internal view virtual override returns (string memory) {
    return uriPre;
  }
    function withdraw() public onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }
}



