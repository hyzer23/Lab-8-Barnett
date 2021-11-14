
function cycleBackPictures() {
    let path = document.getElementById('slide').src // gets full path to image
    let filename = path.replace(/^.*[\\\/]/, ''); // remove the full path name but leave 'imgX.jpg'
    let imgNumber = filename.slice(3,4); // capture the number of the image
    
    if(imgNumber - 1 == 0)
    {
        imgNumber = 5;
    }
    else {
        imgNumber = parseInt(imgNumber) - 1;
    }
    let newSource = 'images/img' + imgNumber + '.jpg';
    console.log(newSource);
    document.getElementById('slide').src = newSource;
}

function cycleForwardPictures() {
    let path2 = document.getElementById('slide').src 
    let filename2 = path2.replace(/^.*[\\\/]/, ''); 
    let imgNumber2 = filename2.slice(3,4); 

    if(imgNumber2 == 5){
        imgNumber2 = 1;
    }
    else {
        imgNumber2 = parseInt(imgNumber2) + 1;
    }

    let newSource2 = 'images/img' + imgNumber2 + '.jpg';
    console.log(newSource2);
    document.getElementById('slide').src = newSource2;
}