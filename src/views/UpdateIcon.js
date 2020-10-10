export const updateIcon = (iconID, iconDOM) => {
    if (iconID >= 200 && iconID <= 232) {
        iconDOM.src = 'http://openweathermap.org/img/wn/10d@2x.png';
    } else {
        iconDOM.src = 'http://openweathermap.org/img/wn/13d@2x.png';
    }
};