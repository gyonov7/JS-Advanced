function roadRadar(speed, type) {
  // •	On the motorway, the limit is 130 km/h
  // •	On the interstate, the limit is 90 km/h
  // •	In the city, the limit is 50 km/h
  // •	Within a residential area, the limit is 20 km/h
  const speedLimitMotorway = 130;
  const speedLimitInterstate = 90;
  const speedLimitCity = 50;
  const speedLimitResidential = 20;

  //   For speeding up to 20 km/h over the limit, the status should be speeding.
  //   For speeding up to 40 km/h over the limit, the status should be excessive speeding.
  //   For anything else, status should be reckless driving.

  switch (type) {
    case "city":
      if (speed > speedLimitCity) {
        if (speed - speedLimitCity <= 20) {
          console.log(
            `The speed is ${
              speed - speedLimitCity
            } km/h faster than the allowed speed of ${speedLimitCity} - speeding`
          );
        } else if (speed - speedLimitCity <= 40) {
          console.log(
            `The speed is ${
              speed - speedLimitCity
            } km/h faster than the allowed speed of ${speedLimitCity} - excessive speeding`
          );
        } else {
          console.log(
            `The speed is ${
              speed - speedLimitCity
            } km/h faster than the allowed speed of ${speedLimitCity} - reckless driving`
          );
        }
      } else {
        console.log(`Driving ${speed} km/h in a ${speedLimitCity} zone`);
      }
      break;

    case "residential":
        if (speed > speedLimitResidential) {
            if (speed - speedLimitResidential <= 20) {
              console.log(
                `The speed is ${
                  speed - speedLimitResidential
                } km/h faster than the allowed speed of ${speedLimitResidential} - speeding`
              );
            } else if (speed - speedLimitResidential <= 40) {
              console.log(
                `The speed is ${
                  speed - speedLimitResidential
                } km/h faster than the allowed speed of ${speedLimitResidential} - excessive speeding`
              );
            } else {
              console.log(
                `The speed is ${
                  speed - speedLimitResidential
                } km/h faster than the allowed speed of ${speedLimitResidential} - reckless driving`
              );
            }
          } else {
            console.log(`Driving ${speed} km/h in a ${speedLimitResidential} zone`);
          }
      break;

    case "interstate":
        if (speed > speedLimitInterstate) {
            if (speed - speedLimitInterstate <= 20) {
              console.log(
                `The speed is ${
                  speed - speedLimitInterstate
                } km/h faster than the allowed speed of ${speedLimitInterstate} - speeding`
              );
            } else if (speed - speedLimitInterstate <= 40) {
              console.log(
                `The speed is ${
                  speed - speedLimitInterstate
                } km/h faster than the allowed speed of ${speedLimitInterstate} - excessive speeding`
              );
            } else {
              console.log(
                `The speed is ${
                  speed - speedLimitInterstate
                } km/h faster than the allowed speed of ${speedLimitInterstate} - reckless driving`
              );
            }
          } else {
            console.log(`Driving ${speed} km/h in a ${speedLimitInterstate} zone`);
          }
      break;

    case "motorway":
        if (speed > speedLimitMotorway) {
            if (speed - speedLimitMotorway <= 20) {
              console.log(
                `The speed is ${
                  speed - speedLimitMotorway
                } km/h faster than the allowed speed of ${speedLimitMotorway} - speeding`
              );
            } else if (speed - speedLimitMotorway <= 40) {
              console.log(
                `The speed is ${
                  speed - speedLimitMotorway
                } km/h faster than the allowed speed of ${speedLimitMotorway} - excessive speeding`
              );
            } else {
              console.log(
                `The speed is ${
                  speed - speedLimitMotorway
                } km/h faster than the allowed speed of ${speedLimitMotorway} - reckless driving`
              );
            }
          } else {
            console.log(`Driving ${speed} km/h in a ${speedLimitMotorway} zone`);
          }

      break;
  }
}

roadRadar(95, "city");
console.log("---");
roadRadar(21, "residential");
console.log("---");
roadRadar(120, "interstate");
console.log("---");
roadRadar(200, "motorway");
