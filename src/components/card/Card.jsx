import "./card.scss";
import { Fragment,  Suspense } from "react";


const Loading = ()=>{
  console.log("Loading ...")
  return(
    <>

    </>
  )
}

const CardImage = ({ src }) => {
  return (
    <div className="item">
      <Suspense fallback={<Loading/>}>
        <img src={`${src}`} alt="works" width="100%" height="100%"  />
      </Suspense>
    </div>
  );
};

export const Card = ({ data, isLoading }) => {

  return (
    <Fragment>
      {data?.map((d) => (
        <Fragment key={d?.id}>
          {d.work_url?.includes(".mp4") ? (
            <Fragment key={d?.id}>
              <div className="item">
                <Suspense fallback={<h1>Loading...</h1>}>
                  <video src={`${d?.work_url}`} controls />
                </Suspense>
              </div>
            </Fragment>
          ) : (
            <Fragment key={d?.id}>

              <CardImage src={d?.work_url} />
            </Fragment>
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};
