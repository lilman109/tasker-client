"use client";

import { ApolloProvider } from "@apollo/client";
import ApolloClient from "@/lib/apollo-client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <div className="flex flex-col justify-center h-screen">
      <ApolloProvider client={ApolloClient}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ApolloProvider>
    </div>
  );
};

export default HomeLayout;
