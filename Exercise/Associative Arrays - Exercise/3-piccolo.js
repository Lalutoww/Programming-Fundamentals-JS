function piccolo(input) {
  let parkingLot = {};
  input.forEach((car) => {
    let [command, carNum] = car.split(", ");
    if (command === "IN") {
      parkingLot[carNum] = 1;
    } else if (command === "OUT") {
      delete parkingLot[carNum];
    }
  });
  let size = Object.keys(parkingLot).length;
  let sortedObj = Object.entries(parkingLot).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  if (size <= 0) {
    console.log("Parking Lot is Empty");
  } else if (size > 0) {
    for (const car of sortedObj) {
      console.log(`${car[0]}`);
    }
  }
}
piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
