import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';

export const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const serviceAccount = require('../gatchagameblog-firebase-adminsdk-8darc-8ce3094eb0.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

export const db = admin.firestore();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
