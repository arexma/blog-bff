import { app, db } from '../index';
import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

app.get('/health-check', (req: Request, res: Response) => {
  res.send('BFF is healthy!');
});

// Create a route for sending messages
app.post('/api/send-message', async (req, res) => {
  try {
    const { message, sender } = req.body;

    // Save message to Firestore
    await db.collection('messages').add({
      text: message,
      sender: sender,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Create a route for retrieving messages
app.get('/api/get-messages', async (req, res) => {
  try {
    const messagesSnapshot = await db.collection('messages').orderBy('timestamp').get();
    const messages = messagesSnapshot.docs.map(doc => doc.data());

    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});
