import Header from "@/components/layout/header";
import MessageList from "@/components/layout/message-list";
import SidebarLeft from "@/components/layout/sidebar-left";
import SidebarRight from "@/components/layout/sidebar-right";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="main-layout grow overflow-hidden">
        <SidebarLeft />
        <MessageList />
        <SidebarRight />
      </main>
    </div>
  );
}

export default App;
