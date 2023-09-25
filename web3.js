const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); // connect to Ganche at 7545

      // Contract ABI and address
     abi=[
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "_CID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_datatype",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_filename",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_fileFormat",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dataVersion",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_sourceOrigin",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_primaryInves",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dataDes",
                    "type": "string"
                }
            ],
            "name": "addFile",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_projecthash",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_projectTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_projectDes",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_projectResults",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_projectDuration",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_projectEthical",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_projectCompliance",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_startdate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_enddate",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_feedback",
                    "type": "string"
                }
            ],
            "name": "addProject",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owneraddress",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "internalType": "string",
                    "name": "_projecttitle",
                    "type": "string"
                },
                {
                    "internalType": "bytes32",
                    "name": "_projecthash",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "_projectDuration",
                    "type": "uint256"
                }
            ],
            "name": "addrequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "projectId",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "questionIndex",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "answerText",
                    "type": "string"
                }
            ],
            "name": "answerQuestion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_publisher",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_CID",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_datatype",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_filename",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_fileFormat",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_dataVersion",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_sourceOrigin",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_primaryInves",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_dataDes",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "_bool",
                    "type": "bool"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_publishername",
                    "type": "string"
                }
            ],
            "name": "depositEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projownerName",
                    "type": "string"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "_projecthash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projectTitle",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projectDes",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_startdate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_enddate",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projectResults",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projectDuration",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_feedback",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projectCompliance",
                    "type": "string"
                }
            ],
            "name": "projectEvent",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_gender",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_dob",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_phone",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "RegisterOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_orgname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_orgaddress",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_testtype",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_turnaroundtime",
                    "type": "string"
                }
            ],
            "name": "RegisterPublisher",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_orgname",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_purpose",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_reqtype",
                    "type": "string"
                }
            ],
            "name": "RegisterRequestor",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                }
            ],
            "name": "removalEvent",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_publisheraddress",
                    "type": "address"
                }
            ],
            "name": "removeFile",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_requestor",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_requestorname",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_projecttitle",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "_projecthash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_projectDuration",
                    "type": "uint256"
                }
            ],
            "name": "requestEvent",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_requestor",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "internalType": "enum Registry.RequestStatus",
                    "name": "_request",
                    "type": "uint8"
                }
            ],
            "name": "respondrequest",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_requestor",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "bytes32",
                    "name": "_hash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_time",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "enum Registry.RequestStatus",
                    "name": "_request",
                    "type": "uint8"
                }
            ],
            "name": "statusEvent",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_type",
                    "type": "string"
                }
            ],
            "name": "typeofidentity",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "projectId",
                    "type": "bytes32"
                },
                {
                    "internalType": "address",
                    "name": "_questionto",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "questionText",
                    "type": "string"
                }
            ],
            "name": "uploadQuestion",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "addrequestMapping",
            "outputs": [
                {
                    "internalType": "enum Registry.RequestStatus",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getIdowner",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "gender",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "dob",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "phone",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "email",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Registry.ownerId",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getIdpublisher",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "orgname",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "orgaddress",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "testtype",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "turnaroundtime",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Registry.publisherId",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "getIdrequestor",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "string",
                            "name": "orgname",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "purpose",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "reqtype",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Registry.requestorId",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "projectId",
                    "type": "bytes32"
                }
            ],
            "name": "getQuestions",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "questionTo",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "questionFrom",
                            "type": "address"
                        },
                        {
                            "internalType": "string",
                            "name": "questionText",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "answerText",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct Registry.Question[]",
                    "name": "",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "hashMapping",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "publisheraddress",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "time",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "CID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_datatype",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "filename",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_fileFormat",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dataVersion",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_sourceOrigin",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_primaryInves",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_dataDes",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "name": "projectMapping",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "projectOwner",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "projectTitle",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "projectDes",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "projectResults",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "projectDuration",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "projectEthical",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "projectCompliance",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "questionMapping",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "questionTo",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "questionFrom",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "questionText",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "answerText",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
     const address = '0x0658C49b3c7fa336dBe5083fE92eef8bf961BB45'; // address of the contract

      // Contract object
      const contract = new web3.eth.Contract(abi, address);