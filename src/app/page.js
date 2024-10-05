import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";

export default function Home() {
  return (
    <section className="max-h-screen flex justify-center items-center space-y-8">
      <div className=" container w-full px-4 ">
        <p className="mb-2">Playground</p>
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[calc(100vh-120px)]  rounded-lg border w-full"
        >
          <ResizablePanel defaultSize={25}>
            <ResizablePanelGroup
              direction="vertical"
              className="min-h-[calc(100vh-120px)]  rounded-lg border w-full"
            >
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Sidebar</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </section>
  );
}
