function message(input) {
    let pattern =
    /^([$%])(?<name>[A-Z][a-z]{2,})\1: \[(?<first>\d+)\]\|\[(?<second>\d+)\]\|\[(?<third>\d+)\]\|$/g
    let countRequests = Number(input.shift());
   
    for (let i = 0; i < countRequests; i++) {
      let line = input.shift();
      let current = pattern.exec(line);
   
      if (current!= null) {
        let name = current.groups.name;
        let result =
          String.fromCharCode(Number(current.groups.first)) +
          String.fromCharCode(Number(current.groups.second)) +
          String.fromCharCode(Number(current.groups.third));
        console.log(`${name}: ${result}`);
      } else {
        console.log("Valid message not found!");
      }
    }
  }
  message([
    "4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|",
  ]);
  console.log("------");
  message([
    "3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true",
  ]);