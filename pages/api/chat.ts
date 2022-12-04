// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import chatMockData from './chat-mock-data.json';

type ConversationData = {
  conversations: typeof chatMockData
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConversationData>
) {
  res.status(200).json({ conversations: chatMockData })
}
