function interpolate(start,end,t) {
    return start * (1 - t) + end * t;
}

function rotateOnWidth(width) {
    let minWidth = 3; //3.5
    let maxWidth = 17; //16.2
    let zForMin = 3.7;
    let zForMax = 4.5;

    const t = (width - minWidth) / (maxWidth - minWidth);

    return interpolate(zForMin,zForMax,t);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
    
    while (currentIndex > 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    
    return array;
    //borrowed from stackoverflow
}

export { randomNum, shuffleArray, rotateOnWidth }