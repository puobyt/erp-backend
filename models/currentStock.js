const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    mainStockId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainStock",
    },
    materialName: {
      type: String,
    },
    materialCode: {
      type: String,
    },
    grn: {
      type: String,
    },
    quantity: {
      type: String,
    },
    unit: {
      type: String
    },
    price: {
      type: String,
    },
    storageLocation: {
      type: String,
    },
    vendorName: {
      type: String,
    },
    vendorId: {
      type: String,
      default: "Unknown",
    },
    quantityReceived: {
      type: String,
    },
    quantityUsed: {
      type: Number,
    },
    dateRecieved: {
      type: Date,
    },
    expiryDate: {
      type: Date,
    },

    createdBy: { type: mongoose.Schema.ObjectId, ref: "Admin" },
    assigned: { type: mongoose.Schema.ObjectId, ref: "Admin" },

    removed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

schema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("CurrentStock", schema);
