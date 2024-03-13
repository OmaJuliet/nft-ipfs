const hre = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmatYW5GiYa76s5MX1yPJJBTANamxohwgyVxRXizALgsYZ";
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  // here we deploy the contract
 const julsContract = await hre.ethers.deployContract("Juls", [
   metadataURL
 ]);

  await julsContract.waitForDeployment();

 // print the address of the deployed contract
  console.log("Juls Contract Address:", julsContract.target);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });