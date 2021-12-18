const Team = (state = [], action) => {
  // console.log(action);
  // console.log(state);
    switch (action.type) {
      case 'ADD_PLAYER':
        return [
          ...state,
          {
            id: action.id,
            playerName: action.pName,
            playerId: action.pId,
            playerNationality: action.pNationality,
            playerPost: action.pPost
          }
        ]
      case 'TOGGLE_PLAYER':
        console.log("start")
        console.log(action);
        console.log(state);
        console.log("end")
        return state.filter((id,player) =>
            (id.id !== action.player)
        )
      default:
        return state
    }
  }
  
  export default Team
  