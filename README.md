# App Structure layout.

-> Header

- --logo
- --Nav items

-> Body

- --Search
- --RestaurantContainer
- --RestaurantCard

-> Footer

- --copyright
- --Links
- --Address
- --Contact

# Redux Toolkit

- Install @reduxjs/toolkit and react-redux
- Build the store
- Connect the store to the app
- Slice(cardSlice)
- dispatch(action)
- Selector

# Vanilla (Older Redux ==> DON'T MUTATE STATE, returning was mandatory...)

const newState = [...state];
newState.items.push(action.payload);
return newState

# Redux Toolkit ==> We have to MUTATE the state and return is not mandatory...

- Redux uses Immer BTS
  state.items.push(action.payload);
