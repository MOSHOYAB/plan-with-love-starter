import { useState } from "react";

function Cards({id, image, info, price, name,removeTour}) {

    const [readmore, setReadmore] = useState(false)
    const description = readmore ? info :`${info.substring(0,200)}....`
    

    function readmorehandler() {
        setReadmore(!readmore);
    }

    

    return (
        <div className="card">
            <img src={image} className="image"></img>
           
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="decription">
                    {description}
                    <span className="read-more" onClick={readmorehandler}>
                        {readmore ? 'show less' : 'read more'}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Intersted
            </button>
        </div>
    );
}
export default Cards;