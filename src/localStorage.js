// create two functions to get data from the local storage and to save data there
export const loadState = () => {
  try {
    // getting
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

// saving data
export const saveState = (state) => {
  try {
    // setting
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (error) {}
};
