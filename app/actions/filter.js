export function applyFilter(filter) {

  return {
    type: 'APPLY_FILTER',
    payload: filter
  }
}

export function setPage(page) {

  return {
    type: 'SET_PAGE',
    payload: page
  }
}

export function toggleSearch() {

  return {
    type: 'TOGGLE_SEARCH'
  }
}

export function updateSearch(search) {

  return {
    type: 'UPDATE_SEARCH',
    payload: search
  }
}
