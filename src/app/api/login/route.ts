import { NextApiRequest, NextApiResponse } from 'next';
import { LoginType } from '@/app/utils/Types';
import { connectToDatabase } from '@/app/utils/db';
import bcrypt from 'bcrypt';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const db = connectToDatabase();
    const usersCollection = db.collection<LoginType>('users');
  }
}
