function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  if (speed < speedLimit) {
    return "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints > 12) {
      return "License suspended";
    } else {
      return "Points: " + demeritPoints;
    }
  }
}

const carSpeed = parseInt(prompt("Enter the car's speed (in km/h):"));
const result = calculateDemeritPoints(carSpeed);
console.log(result);