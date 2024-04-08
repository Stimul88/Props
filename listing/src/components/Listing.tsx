import React from "react";
import reformatCurrency from "../js/reformatCurrency.js";
import getColorQuantity from "../js/getColorQuantity.js";
import shortingText from "../js/shortingText.js";


export default function Listing ({objs}){
     interface JsonInfo {
        listing_id: number,
         url: string,
        url_570xN: string,
        title: string,
        price: number,
        quantity: number,
        currency_code: number,
        MainImage:any
    }
    return (
      <div
        className="item-list">
        {objs.map((item: JsonInfo) =>
          <div className="item"
               key={item.listing_id}
          >
          <div className="item-image">
            <a href={item.url}>
              <img src={item.MainImage === undefined ? '' : item.MainImage.url_570xN} alt={item.title}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{shortingText(item.title)}</p>
            <p className="item-price">{reformatCurrency(item.currency_code)}{item.price}</p>
            <p className={`item-quantity ${getColorQuantity(item.quantity)}`}>{item.quantity} left</p>
          </div>
        </div>)
        }
      </div>
    )
};
