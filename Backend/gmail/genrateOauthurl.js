
import express from 'express';
import oAuth2Client from './gmailAuth.js';

;

const generateAuthUrl=async (req, res) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/gmail.send',
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  });

  res.json({ url: authUrl });
}




export default generateAuthUrl;