# SDSP: Blockchain-Based Secured Data Sharing Platform

Welcome to the SDSP repository! This project aims to facilitate secure and transparent sharing of genomic data using blockchain technology. This README provides instructions for setting up the development environment, running the project, and understanding its components.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Ganache Network](#ganache-network)
   - [Hyperledger Besu Network](#hyperledger-besu-network)
   - [MetaMask](#metamask)
3. [JavaScript Code](#javascript-code)
   - [Changes for Hyperledger Besu](#changes-for-hyperledger-besu)
4. [Smart Contracts](#smart-contracts)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

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
   
2. **Run a Besu Node**: Start a Besu node by running the following command:
    ```bash
    besu --network=dev --rpc-http-enabled --rpc-http-api=ETH,NET,WEB3,ADMIN --rpc-http-port=8545 --rpc-http-cors-origins="all"
    ```
   This command sets up a local Ethereum-compatible development network with an HTTP RPC endpoint enabled on port `8545`.

3. **Connect MetaMask to Hyperledger Besu**:  
   - Open MetaMask and click on the network dropdown at the top of the MetaMask window.
   - Select **Custom RPC** and enter the following details:  
     - **Network Name**: `Hyperledger Besu`  
     - **New RPC URL**: `http://127.0.0.1:8545`  
     - **Chain ID**: `1337` (or the default provided by Besu)  
     - **Currency Symbol**: `ETH`  
     - **Block Explorer URL**: Leave this field blank (optional).  
   - Save the network settings.

4. **Deploy Smart Contracts to Besu**: Use Remix IDE or Truffle to compile and deploy your smart contracts to the Besu network. Ensure the RPC endpoint in Remix or Truffle points to the Besu RPC URL (`http://127.0.0.1:8545`).

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


## Smart Contracts

The smart contracts are located in the `contracts/` directory. These contracts define the logic for managing genomic data on the blockchain.

### Deployment

1. **Install Truffle**: If you haven't already, install Truffle globally with:
    ```bash
    npm install -g truffle
    ```

2. **Compile Contracts**: Navigate to the `contracts/` directory and run:
    ```bash
    truffle compile
    ```

3. **Migrate Contracts**: Deploy the contracts to your local Ganache network with:
    ```bash
    truffle migrate
    ```

## Usage

1. **Access the Web App**: Open your browser and navigate to `http://localhost:3000` (or the port specified by your development server).
2. **Interact with the Blockchain**: Use the web interface to interact with the smart contracts and manage genomic data.

## Contributing

We welcome contributions to this project! Please fork the repository, make your changes, and submit a pull request. Be sure to include clear descriptions of your changes and any relevant issue numbers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
