# SDSP: Blockchain-Based Secured Data Sharing Platform

Welcome to the SDSP repository! This project aims to facilitate secure and transparent sharing of genomic data using blockchain technology. This README provides instructions for setting up the development environment, running the project, and understanding its components.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
   - [Ganache Network](#ganache-network)
   - [MetaMask](#metamask)
3. [JavaScript Code](#javascript-code)
4. [Smart Contracts](#smart-contracts)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

SDSP is a patient-centric consent management system designed for sharing genomic data. The platform enables patients to control how their genomic data is shared and used within precision oncology initiatives. It allows patients to make informed decisions and modify their consent at any time through dynamic informed consent. SDSP also integrates a decentralized access control mechanism to establish a robust and patient-centric framework.

Key components include:

- A local blockchain network setup using Ganache or Hyperledger Besu.
- Integration with MetaMask for managing accounts and transactions.
- JavaScript code for the frontend web pages.
- Smart contracts for managing consent and access control on the blockchain.
- Use of IPFS (InterPlanetary File System) to store data.

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

### MetaMask

1. **Install MetaMask**: Add the MetaMask extension to your browser from the [MetaMask website](https://metamask.io/).
2. **Create or Import an Account**: Follow the instructions to create a new wallet or import an existing one.
3. **Connect to Ganache**:  
   - Open MetaMask and click on the network dropdown at the top of the MetaMask window.
   - Select **Custom RPC** and enter the RPC server URL from Ganache.
   - Save the network settings.

**Add a Custom RPC Network in MetaMask:**

- Open MetaMask and click on the network dropdown at the top.
- Select **Custom RPC** and enter the following details:  
  - **Network Name**: `Ganache`  
  - **New RPC URL**: Enter the RPC server URL from Ganache (e.g., `http://127.0.0.1:7545`).  
  - **Chain ID**: `1337` (or as provided by Ganache).  
  - **Currency Symbol**: `ETH`  
  - **Block Explorer URL**: Leave this field blank (optional).  
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
