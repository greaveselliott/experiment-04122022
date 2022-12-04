import { fetchConversations } from "../shared/utils";
import {
  LayoutGrid,
  LayoutForm,
  LayoutNavigation,
  LayoutThread,
} from "../shared/components";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversatons = fetchConversations();

  return (
    <html>
      <head />
      <body>
        <LayoutGrid>
          <LayoutNavigation></LayoutNavigation>
          <LayoutThread>{children}</LayoutThread>
          <LayoutForm></LayoutForm>
        </LayoutGrid>
      </body>
    </html>
  );
}
