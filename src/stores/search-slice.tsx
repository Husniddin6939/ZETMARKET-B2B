import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISearchState {
  placeholder:string,
  searchType:string
}

const initialState: ISearchState = {
    placeholder:"Enter search text",
    searchType:"Global"
}

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchAction: (state, action:PayloadAction) => {
        switch (action.payload) {
            case '/':state.placeholder='Enter search text...', state.searchType = 'Global'; break;
            case '/orders':state.placeholder='Enter order name', state.searchType = 'New orders'; break;
            case '/order-complated':state.placeholder='Enter order complated name', state.searchType = 'Order complated'; break;
            case '/order-canceled':state.placeholder='Enter order canceled name', state.searchType = 'Order canceled'; break;
            case '/leads':state.placeholder='Enter lead name', state.searchType = 'Leads'; break;
            default:state.placeholder='Enter search text...', state.searchType = 'Global'; break;

        }
    },
  },
})

export const { setSearchAction} = SearchSlice.actions

export default SearchSlice.reducer