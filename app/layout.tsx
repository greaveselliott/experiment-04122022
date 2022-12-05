import { Suspense } from "react";
import {
  LayoutGrid,
  LayoutForm,
  LayoutNavigation,
  LayoutThread,
  ChatNavigation,
} from "shared/components";
import { ChatForm } from "shared/components/chatForm";
import { getCssText } from "shared/components/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <LayoutGrid>
          <LayoutNavigation>
            <Suspense>
              {/* @ts-expect-error Async Server Component */}
              <ChatNavigation />
            </Suspense>
          </LayoutNavigation>
          <LayoutThread>{children}</LayoutThread>
          <LayoutForm>
            <ChatForm />
          </LayoutForm>
        </LayoutGrid>
      </body>
    </html>
  );
}
