import React from 'react';
import parse from 'html-react-parser';

const NewsDetails = (props) => {
    console.log("Newsdetails page", props.details[0].title);
    let newsdetails = props.details;

    return (
        <div>
            {newsdetails.map((item, index) => {
               return (
            <div className="container"key={index}>
                <h4 className="my-3">{item['title']}</h4>
                <hr className=""/>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                          <img className="w-100" src={item['img1']}/>
                          {parse(`${item['long_des']}`)}
                    </div>
                </div>
            </div>
               )
               })}
        </div>
    );
};

export default NewsDetails;



