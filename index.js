// Code your solution in this file!
function distanceFromHqInBlocks(numBlocks){
return Math.abs(numBlocks-42);
}

function distanceFromHqInFeet(numBlocks){
 return 264 * distanceFromHqInBlocks(numBlocks);
}

function distanceTravelledInFeet(start, destination){
    return 264 * Math.abs(destination-start);
}

function calculatesFarePrice (start, destination){
   
    const distance = distanceTravelledInFeet(start, destination)
    
   if (distance <= 400){
    return 0;
   }
   else if( distance <= 2000){
    return (distance-400) * 0.02;
   }
   else if( distance <= 2500){
    return 25;
   }
   else{
    return 'cannot travel that far';
   } 
}