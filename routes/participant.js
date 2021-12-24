const express = require('express');
const {
  getAllParticipant,
  getParticipantById,
  postParticipant,
  patchParticipant,
  deleteParticipant,
} = require('../controllers/participant');
const router = express.Router();

router.get('/participant', getAllParticipant);
router.get('/participant/:id', getParticipantById);
router.post('/participant', postParticipant);
router.patch('/participant/:id', patchParticipant);
router.delete('/participant/:id', deleteParticipant);

module.exports = router;
