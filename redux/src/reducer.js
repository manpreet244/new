let lastId = 0;
export  function reducer(state = [], action) {
  switch (action.type) {
    case "bugAdded":
      return [
        ...state,
        {
          description: action.payload.description,
          resolved: false,
        },
      ];
    case "bugRemoved":
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
  if (action.type === "bugAdded") {
    return [
      ...state,
      {
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "bugRemoved") {
    //return all bugs  except the bug with given id
    return state.filter((bug) => bug.id !== action.payload.id);
  }
  //if we dispatch the action that doesnot exist
  return state;
}
