// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(
      (driver) => driver.toLowerCase() === name.toLowerCase()
    );
  };
  
  const fuzzyMatch = (drivers, pattern) => {
    return drivers.filter((driver) => driver.slice(0, 2) === pattern);
  };
  
  const matchName = (drivers, name) => {
    return drivers.filter((driver) => driver.name === name);
  };