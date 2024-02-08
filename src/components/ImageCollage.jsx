const placeholder = "https://placehold.co/600x400";
const ImageCollage = () => (
    <div className="grid gap-y-1">
        <div className="columns-3 gap-x-1">
            <img src={placeholder} />
            <img src={placeholder} />
            <img src={placeholder} />
        </div>
        <img src={placeholder} className="w-full"/>
        <div className="columns-2 gap-x-1">
            <img src={placeholder} />
            <img src={placeholder} />
        </div>
    </div>
);

export default ImageCollage;