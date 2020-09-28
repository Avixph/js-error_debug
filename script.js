{
  //6.8.1. Debugging Practice

  //1. Run this code first and examine the error message.
  //Fix the syntax error then run the code again to check your work.
  //link to repl.it: https://repl.it/@Avixph/Debug1stSyntaxError
  let launchReady = false;
  let fuelLevel = 17000;

  if (fuelLevel >= 20000) {
    //original was missing the ")" in beginning of if statement.
    console.log("Fuel level cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Insufficient fuel!");
    launchReady = false;
  }

  //2. This block of code hides two syntax errors.
  // Run the code and find the mistakes.
  // Only ONE error will be flagged at a time.
  // Fix that ONE problem, and then re-run the code to check yer work.
  //  Avoid trying to fix multiple issues at once.
  //link to repl.it: https://repl.it/@Avixph/DebugSyntaxErrors2
  let launchReady = false;
  let crewStatus = true;
  let computerStatus = "green";

  if (
    crewStatus /*Used incorrect AND operator, &&& instead of &&. */ &&
    computerStatus === "green"
  ) {
    console.log("Crew & computer cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Crew or computer not ready!");
    launchReady = false;
  }

  if (launchReady) {
    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
    console.log("Fed parrot...");
    console.log("Ignition...");
    console.log("Liftoff!"); //Used mismatched quotation marks.
    //Must use either "" or '', but not one of each.
  } else {
    console.log("Launch scrubbed.");
  }

  //3. Run this code first and examine the error message.
  //Pay close attention to any line numbers mentioned in the message
  // - these will help locate and repair the mistake in the code.
  //link to repl.it: https://repl.it/@Avixph/DebugRuntimeErrors1-1#index.js
  let launchReady = false;
  let fuelLevel = 17000;

  if (fuelLevel >= 20000) {
    //Used incorrect syntax, fuellevel instead of fuelLevel.
    console.log("Fuel level cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Insufficient fuel!");
    launchReady = false;
  }

  //4. Now find and fix the runtime error in a longer code sample.
  //Pay close attention to any line numbers mentioned in the message
  //  - these will help locate and repair the mistake in the code.
  //link to repl.it: https://repl.it/@Avixph/DebugRuntimeErrors2#index.js
  let launchReady = false;
  let fuelLevel = 27000;

  if (fuelLevel >= 20000) {
    console.log("Fuel level cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Insufficient fuel!");
    launchReady = false;
  }

  if (launchReady) {
    console.log("10, 9, 8...");
    console.log("Fed parrot...");
    console.log("6, 5, 4...");
    console.log("Ignition...");
    console.log("3, 2, 1..."); //Spelled console.log wrong as consoul.log
    //causing the to code to just log until "Ignition...".
    console.log("Liftoff!");
  } else {
    console.log("Launch scrubbed.");
  }

  //5.a. Run this sample code as-is and examine the output.
  // Should the shuttle have launched?
  // Did it?
  // Do not worry about fixing the code yet,
  // we will do that in the next series of exercises.
  //link to repl.it: https://repl.it/@Avixph/DebugLogicErrors1
  let launchReady = false;
  let fuelLevel = 17000;
  let crewStatus = true;
  let computerStatus = "green";

  if (fuelLevel >= 20000) {
    console.log("Fuel level cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Insufficient fuel!");
    launchReady = false;
  }

  if (crewStatus && computerStatus === "green") {
    console.log("Crew & computer cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Crew or computer not ready!");
    launchReady = false;
  }

  if (launchReady) {
    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
    console.log("Liftoff!");
  } else {
    console.log("Launch scrubbed."); //This shouldn't have launched since a few things weren't defined/declared.
  }

  //5.b. Let’s break the code down into smaller chunks.
  // Consider the first if/else block below.
  // Add console.log(launchReady) after this block, then run the program.
  //Given the fuelLevel value, should launchReady be true or false after the check?
  //  Is the program behaving as expected?
  // link to repl.it: https://repl.it/@Avixph/DebugLogicErrors2#index.js
  let launchReady = false;
  let fuelLevel = 17000;
  // let crewStatus = true;
  // let computerStatus = 'green';

  if (fuelLevel >= 20000) {
    console.log("Fuel level cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Insufficient fuel!");
    launchReady = false;
  }
  console.log(launchReady); //Given the fuel level, the program is behaving as expected.

  //5.c. Let’s break the code down into smaller chunks.
  // Now consider the second if/else block.
  // Add another console.log(launchReady) after this
  // block and run the program.
  // Given the values for crewStatus and computerStatus,
  // should launchReady be true or false after the check ?
  // Is the program behaving as expected?
  // link to repl.it: https://repl.it/@Avixph/DebugLogicErrors3
  let launchReady = false;
  // let fuelLevel = 17000;
  let crewStatus = true;
  let computerStatus = "green";

  // if (fuelLevel >= 20000) {
  //    console.log('Fuel level cleared.');
  //    launchReady = true;
  // } else {
  //    console.log('WARNING: Insufficient fuel!');
  //    launchReady = false;
  // }

  if (crewStatus && computerStatus === "green") {
    console.log("Crew & computer cleared.");
    launchReady = true;
  } else {
    console.log("WARNING: Crew or computer not ready!");
    launchReady = false;
  }

  //5.fix. he value of launchReady assigned in the first if/else block
  // gets changed in the second if/else block. Dangerous waters...
  // Since the issue is with launchReady, ONE way to fix the logic error is
  // to use a different variable to store the fuel check result.
  // Refactor the code to do this. Verify that your change works by updating the console.log statements.
  // link to repl.it: https://repl.it/@Avixph/DebugLogicErrors5#index.js
  /*let launchReady = false;
let fuelLevel = 17000;
let fuelReady = false; 
let crewStatus = true;
let computerStatus = 'green';
let systemReady = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = !launchReady;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelReady = launchReady;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   systemReady = !launchReady;
} else {
   console.log('WARNING: Crew or computer not ready!');
   systemReady = launchReady;
}

if (fuelReady === true  && systemReady === true ){ 
  launchReady = true;
  console.log("launchReady = ", launchReady);
  console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
  console.log('Liftoff!');
}else {
   console.log("launchReady = ", launchReady);
   console.log('Launch scrubbed.');
}*/

  let launchReady = false;
  let fuelLevel = 17000;
  let fuelReady = false;
  let crewStatus = true;
  let computerStatus = "green";
  let systemReady = false;

  if (fuelLevel >= 20000) {
    console.log("Fuel level cleared.");
    fuelReady = !launchReady;
  } else {
    console.log("WARNING: Insufficient fuel!");
    fuelReady = launchReady;
  }

  if (crewStatus && computerStatus === "green") {
    console.log("Crew & computer cleared.");
    systemReady = !launchReady;
  } else {
    console.log("WARNING: Crew or computer not ready!");
    systemReady = launchReady;
  }

  if (fuelReady && systemReady) {
    launchReady = true;
    console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
    console.log("Liftoff!");
  } else {
    console.log("Launch scrubbed.");
  }
}
