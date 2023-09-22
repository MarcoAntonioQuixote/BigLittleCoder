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

export { randomNum, shuffleArray }