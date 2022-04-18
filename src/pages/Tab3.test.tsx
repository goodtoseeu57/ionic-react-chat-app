import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen, within } from '@testing-library/react';
import Tab3 from "./Tab3";
import { createWrapper, renderWithClient } from "./utils";
import App from "../App";
// import * as graphqlrequest from './graph-ql-request';
import { QueryClient, QueryClientProvider } from 'react-query';
import { usePosts } from './graph-ql-request';

const useQueryData = [
  {
    "id": "1",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    "id": "2",
    "title": "qui est esse"
  },
  {
    "id": "3",
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
  },
  {
    "id": "4",
    "title": "eum et est occaecati"
  },
  {
    "id": "5",
    "title": "nesciunt quas odio"
  },
  {
    "id": "6",
    "title": "dolorem eum magni eos aperiam quia"
  },
  {
    "id": "7",
    "title": "magnam facilis autem"
  },
  {
    "id": "8",
    "title": "dolorem dolore est ipsam"
  },
  {
    "id": "9",
    "title": "nesciunt iure omnis dolorem tempora et accusantium"
  },
  {
    "id": "10",
    "title": "optio molestias id quia eum"
  }
]

const mockedUseQuery = usePosts as jest.Mock<any>;

jest.mock('./graph-ql-request');

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;

  mockedUseQuery.mockImplementation(() => ({isLoading: false, data: useQueryData}))
})

test('renders without crashing', async () => {

  const {getByText} = renderWithClient(<Tab3/>);

  expect(getByText('dolorem eum magni eos aperiam quia')).toBeTruthy();

  const queryClient = new QueryClient();
  // @ts-ignore
  const wrapper = ({children}) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

});

test('tests the custom hook', async () => {
  const {baseElement} = renderWithClient(<Tab3/>);
  expect(baseElement).toBeDefined();
});


