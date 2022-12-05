import { Suspense } from "react";

import { ChatThread } from "shared/components/chatThread";

export default async function Page({ params }: { params: { id: number } }) {
  return (
    <Suspense>
      {/* @ts-expect-error Async Server Component */}
      <ChatThread conversationIndex={params.id} />
    </Suspense>
  );
}
