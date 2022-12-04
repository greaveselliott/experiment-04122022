import React, { ReactNode } from "react";

export const Thread: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ul>{children}</ul>;
};

type MessageProps = {
  id: string;
  text: string;
  last_updated: string;
};

const formatMessageDateTime = (() => {
  const dateTimeFormat = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (timestamp: string) => dateTimeFormat.format(new Date(timestamp));
})();

export const Message: React.FC<MessageProps> = ({ id, text, last_updated }) => (
  <section>
    <time dateTime={last_updated}>{formatMessageDateTime(last_updated)}</time>
  </section>
);

export const Form: React.FC<HTMLFormElement> = ({ onSubmit }) => (
  <form method="post" onSubmit={onSubmit}>
    <input type="text" />;
    <input type="submit" />
  </form>
);
