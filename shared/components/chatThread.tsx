import { fetchConversations } from "../utils";
import { Thread, Message } from ".";

export const ChatThread = async ({
  conversationIndex,
}: {
  conversationIndex: number;
}) => {
  const { conversations } = await fetchConversations();

  return (
    <Thread>
      {conversations[conversationIndex]?.messages?.map(({ id, ...rest }) => (
        <Message {...rest} key={id} />
      ))}
    </Thread>
  );
};
