import uni01 from '../images/uni01.jpg';
import uni02 from '../images/uni02.jpg';
import uni03 from '../images/uni03.jpg';
import uni04 from '../images/uni04.jpg';
import uni05 from '../images/uni05.jpg';
import uni06 from '../images/uni06.jpg';
import uni07 from '../images/uni07.jpg';
import uni08 from '../images/uni08.jpg';
import uni09 from '../images/uni02.jpg';
import uni10 from '../images/uni02.jpg';
import uni11 from '../images/uni02.jpg';
import uni12 from '../images/uni02.jpg';

let imgs = {
    uni01,
    uni02,
    uni03,
    uni04,
    uni05,
    uni06,
    uni07,
    uni08,
    uni09,
    uni10,
    uni11,
    uni12
}

const getImage = (key) => {
    return imgs[key];
}

export default getImage;