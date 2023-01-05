import "./card.scss";
import { Fragment, useEffect, useRef } from "react";

const CardImage = ({ src }) => {
  

  return (
    <div className="item">
      <img src={`${src}`} alt="works" width="100%" height="100%" />
    </div>
  );
};

export const Card = ({ data , isLoading}) => {
  return (
    <Fragment>
      {data?.map((d) => (
        <Fragment key={d?.id}>
          {d.work_url?.includes(".mp4") ? (
            <Fragment key={d?.id}>
              <div className="item">
                <video src={`${d?.work_url}`} controls />
              </div>
            </Fragment>
          ) : (
            <Fragment key={d?.id}>
              <CardImage src={d?.work_url}  />
            </Fragment>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};
