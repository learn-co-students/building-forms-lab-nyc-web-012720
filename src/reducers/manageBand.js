export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let newBand = {name: action.payload}
      return {bands: state.bands.concat(newBand)}
    default:
      return state
  }
};
