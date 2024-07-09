function distanceFromHqInBlocks(pickupBlock) {
    const headquartersBlock = 42;
    //////The Math. abs() function is a built-in JavaScript function that returns the absolute value of a number. The absolute value of a number is its distance from zero on a number line, so it always returns a positive number. javascript.
    return Math.abs(pickupBlock - headquartersBlock);
  }
  
  function distanceFromHqInFeet(pickupBlock) {
    const blocks = distanceFromHqInBlocks(pickupBlock);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }