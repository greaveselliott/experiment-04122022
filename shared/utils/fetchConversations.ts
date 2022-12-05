import type { ConversationData } from '../../pages/api/chat';

export async function fetchConversations(): Promise<ConversationData> {
    const res = await fetch('http://localhost:3000/api/chat');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }