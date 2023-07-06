import React from 'react';

export default function ProfileCard({title, handle, image, description}) {
    // const title = props.title
    //    const handle=props.handle
    // this is completely equal to the two line above and instead of making 2 variables in destructing , we can mention these two variables inside the parameters of the function instead of writing props word
    // const {title,handle}=props

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="pda logo"/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">{description}
                </div>
            </div>
        </div>
    );
}