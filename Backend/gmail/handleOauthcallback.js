import oAuth2Client from './gmailAuth.js';
// import User from '../models/User.js'; // Mongoose user model

const handleOauthCallback = async (req, res) => {

     const { code } = req.query;

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

//   // 🔐 Optional: Get user email from token info
//   const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
//   const { data } = await oauth2.userinfo.get();
//   const gmail = data.email;

//   // Save tokens to DB for the logged-in user
//   await User.findByIdAndUpdate(req.user.id, {
//     gmail,
//     gmailTokens: tokens, // access_token + refresh_token
//   });

  res.send('Gmail Connected Successfully. You can close this tab.');
}

export default handleOauthCallback;

// router.get('/api/gmail/callback', async (req, res) => {
//   const { code } = req.query;

//   const { tokens } = await oAuth2Client.getToken(code);
//   oAuth2Client.setCredentials(tokens);

// //   // 🔐 Optional: Get user email from token info
// //   const oauth2 = google.oauth2({ version: 'v2', auth: oAuth2Client });
// //   const { data } = await oauth2.userinfo.get();
// //   const gmail = data.email;

// //   // Save tokens to DB for the logged-in user
// //   await User.findByIdAndUpdate(req.user.id, {
// //     gmail,
// //     gmailTokens: tokens, // access_token + refresh_token
// //   });

//   res.send('Gmail Connected Successfully. You can close this tab.');
// });
