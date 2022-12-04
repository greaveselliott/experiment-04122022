export async function fetchConversations() {
    const res = await fetch('/api/conversations');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }