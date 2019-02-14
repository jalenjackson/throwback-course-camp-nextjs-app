const express = require('express');
const VerifyAuthenticationStrict = require('../middleware/verifyAuthenticationStrict');
const reorderSections = require('./sections/reorderSections');
const router = express.Router();

router.post('/reorder-sections', VerifyAuthenticationStrict.verify, reorderSections.call);

module.exports = router;
