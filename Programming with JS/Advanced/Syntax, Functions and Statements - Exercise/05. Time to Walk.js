function timeToWalk (distanceInSteps,footPrintLengthInMeters, speedInKm){

    let distanceInMeters = distanceInSteps*footPrintLengthInMeters;

    let speedMetersInSec = speedInKm/3.6;

    let time = distanceInMeters/speedMetersInSec;

    let rest = Math.floor(distanceInMeters/500);

    let timeMin = Math.floor(time/60);
    let timeSec = Math.round(time - timeMin*60);


let timeHour = Math.floor(time/3600);

console.log((timeHour < 10 ? "0":"")+timeHour + ":" + (timeMin+rest < 10? "0":"")+(timeMin+rest)+":"+ (timeSec<10? "0":"" + timeSec));
    
}

timeToWalk(4000, 0.60, 5);