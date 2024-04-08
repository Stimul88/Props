import {Star} from "./Star";
import {ICount} from "../types";
import React from "react";

export const Stars = (props: ICount) => {
  const { count } = props;

  if(count < 1 || count > 5) return;

    return (
      <ul className="card-body-stars u-clearfix">
          {[...Array(count).keys()].map(item => <Star key={item} />)}
      </ul>
  )
}

Stars.defaultProps = {
  count: 0,
};
