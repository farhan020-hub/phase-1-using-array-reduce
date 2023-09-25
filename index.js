const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Calculate the total batteries using reduce

const totalBatteries = batteryBatches.reduce((accumulator, currentBatch) => {

    return accumulator + currentBatch;

  } 
  );
  
  