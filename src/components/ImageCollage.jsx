import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import '../style/TWImport.css';

const ImageCollage = () => (
    <div className="grid gap-y-1">
        <div className="columns-3 gap-x-1">
            <img src={img1} />
            <img src={img2} />
            <img src={img4} />
        </div>
        <img src={img3} className="w-full"/>
        <div className="columns-2 gap-x-1">
            <img src={img5} />
            <img src={img6} />
        </div>
    </div>
);

export default ImageCollage;