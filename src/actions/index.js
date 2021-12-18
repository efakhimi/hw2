
let nextTeamId = 0
export const addTeam = (name, id, nationality, post) => ({
  type: 'ADD_PLAYER',
  id: nextTeamId++,
  pName: name,
  pId: id,
  pNationality: nationality,
  pPost: post
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const togglePlayer = player => ({
  type: 'TOGGLE_PLAYER',
  player
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_ATTACKERS: 'SHOW_ATTACKERS',
  SHOW_HALFBACK: 'SHOW_HALFBACK',
  SHOW_DEFENSE: 'SHOW_DEFENSE',
  SHOW_GOALERS: 'SHOW_GOALERS'
}