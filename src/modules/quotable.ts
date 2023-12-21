import { restApi, AxiosResponse } from '@mornya/restful-libs';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type State = {
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
};

type Actions = {
  getRandom(): Promise<void>;
};

const initialState = (): State => ({
  content: '',
  author: '',
  tags: [],
  authorSlug: '',
  length: 0,
  dateAdded: '',
  dateModified: '',
});

export const useRandomStore = create<State & Actions>()(
  devtools(
    (set) => ({
      // state
      ...initialState(),
      // methods
      async getRandom() {
        try {
          const response: AxiosResponse<State> | null = await restApi({
            baseURL: process.env.REACT_APP_API_URL,
            url: '/random',
            cache: true,
            withCredentials: false,
          });
          set(response?.data ?? initialState());
        } catch (e) {
          console.error(e);
        }
      },
    }),
    { enabled: process.env.NODE_ENV !== 'production' },
  ),
);
