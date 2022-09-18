import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const CardSkele = () => {
  return (
    <>
      <article className="card-skeleton">
        <div className="imgSkele">
          <Skeleton width={250} height={210} />
        </div>
        <div className="info">
          <h4>
            <Skeleton width={100} />
          </h4>
          <span>
            <Skeleton width={70} />
          </span>
          <h6>
            <Skeleton width={50} />
          </h6>
          <span>
            <Skeleton width={80} />
          </span>
        </div>
      </article>
      <article className="card-skeleton">
        <div className="imgSkele">
          <Skeleton width={230} height={210} />
        </div>
        <div className="info">
          <h4>
            <Skeleton width={100} />
          </h4>
          <span>
            <Skeleton width={70} />
          </span>
          <h6>
            <Skeleton width={50} />
          </h6>
          <span>
            <Skeleton width={80} />
          </span>
        </div>
      </article>
      <article className="card-skeleton">
        <div className="imgSkele">
          <Skeleton width={230} height={210} />
        </div>
        <div className="info">
          <h4>
            <Skeleton width={100} />
          </h4>
          <span>
            <Skeleton width={70} />
          </span>
          <h6>
            <Skeleton width={50} />
          </h6>
          <span>
            <Skeleton width={80} />
          </span>
        </div>
      </article>
      <article className="card-skeleton">
        <div className="imgSkele">
          <Skeleton width={230} height={210} />
        </div>
        <div className="info">
          <h4>
            <Skeleton width={100} />
          </h4>
          <span>
            <Skeleton width={70} />
          </span>
          <h6>
            <Skeleton width={50} />
          </h6>
          <span>
            <Skeleton width={80} />
          </span>
        </div>
      </article>
    </>
  );
};

export default CardSkele;
