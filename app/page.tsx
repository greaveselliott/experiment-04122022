import { Suspense } from "react";

import { ChatThread } from "shared/components";

export default async function Page() {
  return (
    <Suspense>
      {/* @ts-expect-error Async Server Component */}
      <ChatThread conversationIndex={0} />
    </Suspense>
  );
}
