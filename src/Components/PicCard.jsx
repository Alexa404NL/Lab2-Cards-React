import React from "react";

export const PicCard = ({id, author, image}) => {
    return (
        <section style = {{height:200, width: 300}}>
            <h2 className="text-capitalize">#{id} {author}</h2>
            <div>
                <img src={image} alt="image"/>
            </div>
        </section>
    )
}
