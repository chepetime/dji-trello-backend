function DroneFactory(NAME = "", PORT = 0, HOST = "") {
  this.NAME = NAME;
  this.PORT = PORT;
  this.HOST = HOST;

  this.printData = () => {
    console.log({ NAME: this.NAME });
    console.log({ PORT: this.PORT });
    console.log({ HOST: this.HOST });
  };
}

// const drone = {
//   PORT: null,
//   HOST: null,
//   init: function (PORT, HOST) {
//     this.PORT = PORT;
//     this.HOST = HOST;
//   },
// };
//
module.exports = DroneFactory;
