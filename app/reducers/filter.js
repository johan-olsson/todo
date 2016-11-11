

export default function reducer (state = {
  filter: 'all',
  page: 0,
  search: '',
  searching: false
}, action) {
  switch (action.type) {
    case 'APPLY_FILTER': {
      return {...state,
        filter: action.payload,
        page: 0
      }
    }
    case 'SET_PAGE': {
      return {...state,
        page: action.payload
      }
    }
    case 'UPDATE_SEARCH': {
      return {...state,
        search: action.payload,
        page: 0
      }
    }
    case 'TOGGLE_SEARCH': {
      return {...state,
        searching: !state.searching,
        search: ''
      }
    }
  }

  return state
}
