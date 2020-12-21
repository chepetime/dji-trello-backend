const dgram = require("dgram");
const wait = require("waait");

//  const DroneFactory = require("./drone");
const commandDelays = require("./commandDelays");

const PORT_CONTROLLER = 8889;
const HOST = "192.168.10.1";

function handleError(err) {
  if (err) {
    console.log("Error", { err });
  }
}

// Start drone
const exerciseSequence = ["command", "battery?", "takeoff", "land"];

async function go() {
  console.log("🏁 Start!");

  const drone = dgram.createSocket("udp4");

  drone.bind(PORT_CONTROLLER);

  drone.on("message", (message) => {
    console.log(`🤖: ${message}`);
  });

  for (const command of exerciseSequence) {
    const delay = commandDelays[command];
    console.log(`🛎 Running command: ${command}`);
    drone.send(command, 0, command.length, PORT_CONTROLLER, HOST, handleError);
    console.log(`⏲ Wait: ${delay / 1000}s`);
    await wait(delay);
  }
  console.log("Done!");
}

go();
