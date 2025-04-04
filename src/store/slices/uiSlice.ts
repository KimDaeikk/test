// store/uiSlice.ts
import { createSlice } from '@reduxjs/toolkit'

interface UiState {
  mobileMenuOpen: boolean
  activeDropdown: string | null
}

const initialState: UiState = {
  mobileMenuOpen: false,
  activeDropdown: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
    setActiveDropdown: (state, action) => {
      state.activeDropdown = action.payload
    },
    clearActiveDropdown: (state) => {
      state.activeDropdown = null
    }
  },
})

export const {
  toggleMobileMenu,
  closeMobileMenu,
  setActiveDropdown,
  clearActiveDropdown,
} = uiSlice.actions

export default uiSlice.reducer
