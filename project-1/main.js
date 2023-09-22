function resizeImg(img, txt) {img.addEventListener("click", () => {
    if (img.style.width === '1200px') {
        img.style.width = '120px';
        txt.style.display = 'none';
    } 
    else if (img.style.width === '120px') {
        img.style.width = '1200px';
        txt.style.display = 'block';
    } else {
        img.style.width = '1200px';
        txt.style.display = 'block';
    }
})};

resizeImg(image1, text1);
resizeImg(image2, text2);
resizeImg(image3, text3);
resizeImg(image4, text4);
resizeImg(image5, text5);