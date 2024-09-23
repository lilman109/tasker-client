"use client";

import { ApolloProvider } from "@apollo/client";
import ApolloClient from "@/lib/apollo-client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <ApolloProvider client={ApolloClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ApolloProvider>
  );
};

export default TasksLayout;
