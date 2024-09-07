"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TasksLayout;
