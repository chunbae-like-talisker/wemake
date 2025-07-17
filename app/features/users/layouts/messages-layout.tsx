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
    <SidebarProvider className="h-[calc(100vh-14rem)] max-h-[calc(100vh-14rem)] overflow-hidden min-h-full">
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
      <div className="h-full w-full">
        <Outlet />
      </div>
    </SidebarProvider>
  );
}
