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

- Example
  const newState = [...state];
  newState.items.push(action.payload);
  return newState

# Redux Toolkit ==> We have to MUTATE the state and return is not mandatory...

- Redux uses Immer BTS
  state.items.push(action.payload);

# Types of Testing (Developer)

- Unit Testing
- Integration Testing
- End to End Testing / E2E Testing

# Setting Up Testing

- Install React Testing Library
- Install Zest
- Using Zest along with Babel should include additional dependencies ---> "npm install --save-dev babel-jest @babel/core @babel/preset-env"
- Configure Babel file "Babel.config.js"
- Configure Parcel Config file to disable default babel transpilation ".parcelrc"
- Jest Configuration
- Install JSDOM library ---> "npm install --save-dev jest-environment-jsdom"
- Install "@babel/preset-react" library ---> to make JSX works in test cases.
- Include "@babel/preset-react" inside my babel config. #syntax --->["@babel/preset-react", { runtime: "automatic" }]
- Install @testing-library/jest-dom
