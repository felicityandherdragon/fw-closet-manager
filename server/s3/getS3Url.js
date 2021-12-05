const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const { S3Client, GetObjectCommand, PutObjectCommand } = require('@aws-sdk/client-s3');
const dotenv = require('dotenv');
const crypto = require('crypto');
const { promisify } = require('util');
const randomBytes = promisify(crypto.randomBytes);

dotenv.config();

const clientParams = {
  region: 'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4'
};

const client = new S3Client(clientParams);

const generateUploadURL = async () => {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString('hex');

  const getObjectParams = {
    Bucket: 'closet-manager-s3-bucket',
    Key: imageName,
  };
  // const command = new GetObjectCommand(getObjectParams);
  const writeCommand = new PutObjectCommand(getObjectParams);
  // const url = await getSignedUrl(client, command, { expiresIn: 3600 });
  const url = await getSignedUrl(client, writeCommand, { expiresIn: 3600 });

  return url;
};

module.exports = generateUploadURL;
