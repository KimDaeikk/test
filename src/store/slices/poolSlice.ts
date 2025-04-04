import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PoolState {
  selectedPoolId: string | null
}

const initialState: PoolState = {
  selectedPoolId: null,
}

const poolSlice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    selectPool(state, action: PayloadAction<string>) {
      state.selectedPoolId = action.payload
    },
    clearPool(state) {
      state.selectedPoolId = null
    },
  },
})

export const { selectPool, clearPool } = poolSlice.actions
export default poolSlice.reducer
