"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div className="flex flex-col justify-center h-screen">
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default HomeLayout;
