import { render } from "@testing-library/react";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";


const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient(ui: any) {
  const testQueryClient = createTestQueryClient();
  const {rerender, ...result} = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: any) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}


const queryClient = new QueryClient();

// @ts-ignore
export const createWrapper = ({children}) => {
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
}
