# SDSP: Blockchain-Based Secured Data Sharing Platform

Welcome to the SDSP repository! This project aims to facilitate secure and transparent sharing of genomic data using blockchain technology. This README provides instructions for setting up the development environment, running the project, and understanding its components. Please refere to the follwoing paper for the architecture of the SDSP https://ieeexplore.ieee.org/document/10577693

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
   1. [Prerequisites](#prerequisites)
   2. [Ganache Network](#ganache-network)
   3. [Hyperledger Besu Network](#hyperledger-besu-network)
   4. [MetaMask](#metamask)
3. [JavaScript Code](#javascript-code)
   1. [Changes for Hyperledger Besu](#changes-for-hyperledger-besu)
4. [Integrate Web3.storage in Your Project](#integrate-web3storage-in-your-project)
5. [Smart Contracts](#smart-contracts)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

SDSP is a patient-centric consent management system designed for sharing genomic data. The platform enables patients to control how their genomic data is shared and used within precision oncology initiatives. It allows patients to make informed decisions and modify their consent at any time through dynamic informed consent. SDSP also integrates a decentralized access control mechanism to establish a robust and patient-centric framework.

Key components include:

1. **Local Blockchain Network**: A local blockchain network setup using Ganache for initial testing.
2. **MetaMask Integration**: MetaMask for managing accounts and transactions.
3. **JavaScript Frontend**: JavaScript code for the frontend web pages.
4. **Smart Contracts**: Smart contracts for managing consent and access control on the blockchain.
5. **IPFS**: Use of IPFS (InterPlanetary File System) to store data.
6. **Hyperledger Besu Network**: An Ethereum-compatible blockchain platform for more extensive testing and deployment after initial tests with Ganache.

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed to run JavaScript webpages.
- **Ganache or Hyperledger Besu**: Choose between setting up a local blockchain using Ganache or deploying a more extensive network using Hyperledger Besu.
- **Remix IDE**: Online or desktop IDE for compiling, deploying, and testing smart contracts.
- **MetaMask**: Browser extension for managing blockchain accounts and transactions.

### Ganache Network

1. **Install Ganache**: Download and install Ganache from the [official website](https://www.trufflesuite.com/ganache).
2. **Start Ganache**: Open Ganache and create a new workspace. This will start a local Ethereum blockchain with pre-funded accounts.
3. **Note the Network Details**: Make a note of the RPC server URL (usually `http://127.0.0.1:7545`) and port number.
4. **Configure the Network Settings**:  
   - Number of Accounts: `20`  
   - Gas Limit: `999999999999999`  
   - Gas Price: `200`  
   - Hard Fork: `Muir Glacier`  

### Hyperledger Besu Network

After initial testing on Ganache, you can deploy the project to a more extensive Hyperledger Besu network.

1. **Install Hyperledger Besu**: Follow the installation instructions on the [Hyperledger Besu documentation page](https://besu.hyperledger.org/en/stable/HowTo/Get-Started/Installation/).
   # SDSP: Blockchain-Based Secured Data Sharing Platform

Welcome to the SDSP repository! This project aims to facilitate secure and transparent sharing of genomic data using blockchain technology. This README provides instructions for setting up the development environment, running the project, and understanding its components. Please refere to the follwoing paper for the architecture of the SDSP https://ieeexplore.ieee.org/document/10577693



### MetaMask

1. **Install MetaMask**: Add the MetaMask extension to your browser from the [MetaMask website](https://metamask.io/).
2. **Create or Import an Account**: Follow the instructions to create a new wallet or import an existing one.
3. **Connect to Ganache or Hyperledger Besu**:  
   - Open MetaMask and click on the network dropdown at the top of the MetaMask window.
   - Select **Custom RPC** and enter the RPC server URL from either Ganache or Hyperledger Besu.
   - Save the network settings.

## JavaScript Code

The JavaScript code for the webpages is located in the `webpages/` directory. This code handles the user interface and interacts with the blockchain.

### Installation

1. **Install Dependencies**: Navigate to the `webpages/` directory and run:
    ```bash
    npm install
    ```

2. **Run the Web Server**: Start the local development server with:
    ```bash
    npm start
    ```

### Changes for Hyperledger Besu

To connect the frontend JavaScript code to Hyperledger Besu, make the following changes:

1. **Update the RPC URL**:  
   Modify the connection URL in your JavaScript files to point to the Besu RPC endpoint:
   ```javascript
   const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

markdown
Copy code
## IPFS Integration

To manage and store genomic data using IPFS, we use the Web3.storage API. Web3.storage provides a simple and scalable way to interact with the IPFS network.

### Setup Web3.storage

1. **Sign Up and Get API Token**
   - Sign up for an account at [Web3.storage](https://web3.storage/).
   - Once registered, navigate to the [API Tokens](https://web3.storage/tokens) page to create a new API token. This token is required to authenticate requests to the Web3.storage API.

2. **Install the Web3.storage SDK**
   - Install the Web3.storage JavaScript client library via npm:
     ```bash
     npm install web3.storage
     ```

### Integrate Web3.storage in Your Project

1. **Initialize Web3.storage Client**
   - In your JavaScript code, initialize the Web3.storage client with your API token:
     ```javascript
     import { Web3Storage } from 'web3.storage'

     // Replace 'YOUR_API_TOKEN' with your Web3.storage API token
     const client = new Web3Storage({ token: 'YOUR_API_TOKEN' })
     ```


## Smart Contracts

The smart contracts are located in the `contracts/` directory. These contracts define the logic for managing genomic data on the blockchain.

## Smart Contract: `Registry.sol`

The `Registry` smart contract serves as the core of the SDSP (Secured Data Sharing Platform) and manages the registration and interaction of three types of users: owners, requestors, and publishers. It also handles the management and sharing of genomic data files and project-related information.

### Features

1. **User Registration**
   - The contract allows three types of users to register:
     - **Owners**: Individuals whose genomic data is being shared. Owners can register with their details like name, age, gender, and cancer type.
     - **Requestors**: Organizations or entities requesting access to genomic data. They can register with details like organization name, purpose, and request type.
     - **Publishers**: Entities responsible for publishing genomic data, such as labs or data centers. They can register with details like organization name, address, test type, and turnaround time.

2. **Data Storage and Management**
   - Owners can store genomic data files on the platform by providing a unique hash for each file along with metadata such as CID (Content Identifier), filename, file format, genome build, and genome coverage.
   - The contract maintains a mapping (`hashMapping`) to store the relationship between the file owner, the file hash, and its associated metadata.

3. **Data Removal**
   - Owners have the ability to remove files they have uploaded. The removal process verifies the ownership before deleting the data to ensure that only the rightful owner can remove their data.

4. **Data Access Requests**
   - Requestors can request access to specific genomic data by submitting a request, which includes a project title and a unique project hash.
   - Owners can approve or reject access requests made by requestors. The request status is tracked using an enumerated `RequestStatus` that can be `pending`, `approved`, or `rejected`.

5. **Project Management**
   - Owners can create and manage projects on the platform. Projects are stored with details like title, description, purpose, results, duration, ethical considerations, and compliance status.
   - A mapping (`projectMapping`) is used to associate each project with its owner and a unique project hash.

6. **Q&A for Projects**
   - The contract includes a question and answer system where project stakeholders can ask and answer questions related to specific projects.
   - Users can upload questions, and only the intended recipient can provide answers, ensuring secure communication.

### Events

The contract emits several events to notify off-chain applications of important actions:

- **`typeofidentity`**: Emitted whenever a new user (owner, requestor, or publisher) registers on the platform.
- **`depositEvent`**: Emitted when a new genomic data file is uploaded, indicating successful storage.
- **`removalEvent`**: Emitted when a genomic data file is removed by its owner.
- **`requestEvent`**: Emitted when a requestor requests access to a specific genomic data file.
- **`statusEvent`**: Emitted when an owner responds to a data access request.
- **`projectEvent`**: Emitted when a new project is created on the platform.

### Functions

- **User Registration Functions:**
  - `RegisterOwner(string memory _name, uint _age, string memory _gender, string memory _cancertype)`: Registers a new owner.
  - `RegisterRequestor(string memory _orgname, string memory _purpose, string memory _reqtype)`: Registers a new requestor.
  - `RegisterPublisher(string memory _orgname, string memory _orgaddress, string memory _testtype, string memory _turnaroundtime)`: Registers a new publisher.

- **Data Management Functions:**
  - `addFile(bytes32 _hash, address _address, string memory _CID, string memory _filename, string memory _fileFormat, string memory _genomeBuild, string memory _genomeCoverage)`: Adds a genomic data file with metadata.
  - `removeFile(bytes32 _hash, address _publisheraddress)`: Removes a genomic data file owned by the user.

- **Data Access Request Functions:**
  - `addrequest(address _owneraddress, bytes32 _hash, string memory _projecttitle, bytes32 _projecthash)`: Submits a request for access to a genomic data file.
  - `respondrequest(address _requestor, bytes32 _hash, RequestStatus _request)`: Responds to a data access request (approve or reject).

- **Project Management Functions:**
  - `addProject(bytes32 _projecthash, string memory _projectTitle, string memory _projectDes, string memory _projectPurpose, string memory _projectResults, string memory _projectDuration, string memory _projectEthical, string memory _projectCompliance, uint256 _startdate, uint _enddate)`: Creates a new project and stores its details.

- **Question and Answer Functions:**
  - `uploadQuestion(bytes32 projectId, address _questionto, string memory questionText)`: Allows stakeholders to upload a question related to a project.
  - `getQuestions(bytes32 projectId)`: Retrieves all questions related to a specific project.
  - `answerQuestion(bytes32 projectId, uint256 questionIndex, string memory answerText)`: Allows the intended recipient to answer a question.

### Security Considerations

- **Ownership Verification**: The contract verifies the ownership of data before allowing deletion, ensuring that only the rightful owner can remove their files.
- **Access Control**: Request status and access rights are strictly managed through the functions provided, preventing unauthorized access to data.
- **Data Integrity**: Uses hashing techniques to maintain the integrity of genomic data files stored on the platform.

### Usage

Deploy the `Registry` smart contract using Remix IDE or Truffle to either a local development network (Ganache) or a more extensive blockchain network (Hyperledger Besu). Follow the instructions provided in the [Setup Instructions](#setup-instructions) section to get started.
 **Access the Web App**: Open your browser and navigate to `http://localhost:3000` (or the port specified by your development server).
**Interact with the Blockchain**: Use the web interface to interact with the smart contracts and manage genomic data.





