const express = require("express");

const currentStockService = require("../../services/adminServices/currentStockService");

let currentStockController = {};

currentStockController.fetchCurrentStock = async (req, res) => {
  try {
    console.log("loading current stocks...");

    const result = await currentStockService.fetchCurrentStock();

    res.status(result.status).json({
      message: result.message,
      data: result.data,
      purchaseOrderCreationData:result.purchaseOrderCreationData,
      materials:result.materials,
      vendors:result.vendors,
      userToken: "",
    });
  } catch (error) {
    console.log(
      "An error occurred while fetching stocks in admin controller:",
      error.message
    );
    res.status(500).json({ info: "An error occurred in server" });
  }
};
currentStockController.newCurrentStock = async (req, res) => {
  try {
    console.log("Adding new current stock ");

    const { materialName,materialCode,grn, quantity, unit, price,storageLocation, vendorName, dateRecieved,expiryDate } = req.body;

    const result = await currentStockService.newCurrentStock({
      materialName,
      materialCode,
      grn,
      quantity,
      unit,
      price,
      storageLocation,
      vendorName,
      dateRecieved,
      expiryDate
    });

    res.status(result.status).json({
      message: result.message,
      data: result.data,
      userToken: result.token,
    });
  } catch (error) {
    console.log(
      "An error occurred while adding current stocks in admin controller:",
      error.message
    );
    res.status(500).json({ info: "An error occurred in Server" });
  }
};

currentStockController.editCurrentStock = async (req, res) => {
  try {
    console.log("editing current stock..");

    const {
      authPassword,
      currentStockId,
      materialName,
      materialCode,
      grn,
      quantity,
      unit,
      price,
      storageLocation,
      vendorName,
      dateRecieved,
      expiryDate
    } = req.body;

    // Pass the extracted data to the service function
    const result = await currentStockService.editCurrentStock({
      authPassword,
      currentStockId,
      materialName,
      materialCode,
      grn,
      quantity,
      unit,
      price,
      storageLocation,
      vendorName,
      dateRecieved,
      expiryDate
    });

    res.status(result.status).json({
      message: result.message,
      data: result.data,
      userToken: result.token,
    });
  } catch (error) {
    console.log(
      "An error occurred while adding editing Current Stock in admin controller:",
      error.message
    );
    res.status(500).json({ info: "An error occurred" });
  }
};



currentStockController.removeCurrentStock = async (req, res) => {
  try {
    console.log("deleting current stock...");
const {currentStockId} = req.query;
console.log('soock',currentStockId)
    // Pass the extracted data to the service function
    const result = await currentStockService.removeCurrentStock(currentStockId);

    res.status(result.status).json({
      message: result.message,
      userToken: result.token,
    });
  } catch (error) {
    console.log(
      "An error occurred while removing current stock in admin controller:",
      error.message
    );
    res.status(500).json({ info: "An error occurred in server" });
  }
};

module.exports = currentStockController;
