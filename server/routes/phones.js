const express = require('express');
const router = express.Router();
const phonesData = require('../data/phones.json');

router.get('/', (req, res) => {
  res.json(phonesData);
});
router.get('/:id', (req, res) => {
  const { id } = req.params
  const phoneFind = phonesData.find(phone => phone.id.toString() === id.toString());
  if (phoneFind) {
    res.status(200).json(phoneFind)
  }
  res.status(404).json({ msg: "phone not found" })
});

module.exports = router;