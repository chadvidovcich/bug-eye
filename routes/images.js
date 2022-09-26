const express = require('express')
const router = express.Router()

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const { ensureAuth } = require('../middleware/auth')
const { uploadFileS3 } = require('../middleware/s3')

const AWS = require('aws-sdk')

router.post('/', upload.single('image'), async (req, res, next) => {
    const file = req.file
    console.log(file);
    const result = await uploadFileS3(file)
    console.log(result);
    const description = req.body.description
    res.send('Nice!')
})

module.exports = router