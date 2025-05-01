// src/layouts/default.tsx (or your layout file)
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // The main container setup is likely fine
    <div className="relative flex flex-col h-screen bg-[#171717]">
      {/* Navbar is rendered, but its fixed position takes it out of the layout flow */}
      <Navbar />

      {/* Main content area - REMOVE any top padding (like pt-16) */}
      {/* It should now start from the top edge, behind the fixed Navbar */}
      <main className="flex-grow bg-[#171717]">
        {children}
      </main>

      {/* Footer remains at the bottom */}
      <Footer />
    </div>
  );
}