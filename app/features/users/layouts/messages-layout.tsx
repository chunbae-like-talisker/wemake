import { Outlet } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarProvider,
} from "~/common/components/ui/sidebar";
import { MessageCard } from "../components/message-card";

export default function MessagesLayout() {
  return (
    <SidebarProvider className="flex max-h-[calc(100vh-14rem)] overflow-hidden h-[calc(100vh-14rem)] min-h-full">
      <Sidebar className="pt-16" variant="floating">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {Array.from({ length: 10 }).map((_, index) => (
                <MessageCard
                  key={index}
                  id={index.toString()}
                  name="John Doe"
                  lastMessage={`Last message ${index}`}
                  avatarUrl="https://github.com/shadcn.png"
                />
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <div className="h-full flex-1">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
