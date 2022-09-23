function rectangle(width, height, color){
    color = color.substring(0,1).toUpperCase() + color.substring(1);
    let current = {
        width: width,
        height: height,
        color: color,
        calcArea() {return height * width;}
    }
    return current;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());