import { fetchConversations } from "../utils";
import { Navigation, NavigationLink } from ".";

export const ChatNavigation = async () => {
  const { conversations } = await fetchConversations();

  return (
    <Navigation>
      {conversations?.map(({ id, name }, index) => (
        <NavigationLink href={`/${index ? index : ""}`} key={id}>
          {name}
        </NavigationLink>
      ))}
    </Navigation>
  );
};
