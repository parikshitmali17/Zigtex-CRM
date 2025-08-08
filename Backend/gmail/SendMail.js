const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

await gmail.users.messages.send({
  userId: 'me',
  requestBody: {
    raw: base64EncodedEmail,
  },
});

