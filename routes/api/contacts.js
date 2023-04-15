const express = require("express");

const router = express.Router();
const {
  getAllCtrl,
  addContactCtrl,
  updateContactCtrl,
  deleteContactCtrl,
} = require("../../controllers/contacts/contactsControllers");

router.get("/", getAllCtrl);

router.post("/", addContactCtrl);

router.put("/:contactId", updateContactCtrl);

router.delete("/:contactId", deleteContactCtrl);

module.exports = router;
