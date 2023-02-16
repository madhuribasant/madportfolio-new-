import React, { Fragment, useRef, useEffect, Suspense } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGlobalContext } from "../components/Context";
import { Lists } from "../components/lists/Lists";

gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {
  const { transition, setTransition, loaderEnd } = useGlobalContext();

  console.log(loaderEnd);

  const infoRef = useRef([]);

  const { isLoading, error, data, isFetching } = useQuery(
    "client",
    () =>
      fetch(
        `https://tmgomzcxkxtwnlmxxduy.supabase.co/rest/v1/clients?select=*`,
        {
          headers: {
            apikey: import.meta.env.VITE_ANON_KEY,
            Authorization: "Bearer" + import.meta.env.VITE_ANON_KEY,
          },
        }
      ).then((res) => res.json(), { keepPreviousData: false }),
    { staleTime: 50, cacheTime: 10000 }
  );

  useEffect(() => {
    if (loaderEnd) {
      let tl3 = gsap.timeline();
      tl3
        .to("#hero .reveal-heading .child", {
          y: 0,
          duration: 1.5,
          delay: 0.4,
          stagger: 0.5,
          ease: "power3.inOut",
        })
        .from("#hero .reveal-heading:nth-child(2) .child span:nth-child(1)", {
          x: -600,
          duration: 1.5,
          ease: "power3.inOut",
        });
    }
  }, [loaderEnd]);

  useEffect(() => {
    try {
      const reveal = document.querySelector(".reveal-heading");
      reveal.childNodes[1].remove();
    } catch (error) {
      console.log(error);
    }
  }, [transition]);

  const handleEnter = (index) => {
    gsap.to(infoRef.current[index], {
      duration: 1.2,
      bottom: "130px",
      ease: "power3.inOut",
    });
  };

  const handleLeave = (index) => {
    gsap.to(infoRef.current[index], {
      duration: 1.2,
      bottom: "60px",
      ease: "power3.out",
    });
  };

  return (
    <>
      <section id="hero">
        <h1 className="reveal-heading">
          <span className="parent">
            <span className="child">Creative</span>
          </span>
          creative
        </h1>
        <h1 className="reveal-heading">
          {" "}
          <span className="parent">
            <span className="child">
              <span>graphics</span> <span>designer</span>
            </span>
          </span>{" "}
        </h1>
      </section>

      <section id="intro">
        <span className="section-heading">
          {" "}
          About <span className="mazius">me</span>{" "}
        </span>
        <p>
          I am a creative <span className="mazius">graphic</span> designer with
          innovative ideas and a unique approach to visuals.
        </p>
        <p>
          Great attention to details and a talent for creating memorable visual
          designs. Passion for keeping clients satisfied with each project.
        </p>
      </section>

      <div className="heading">
        <h1>
          Clients I<span>'ve</span> dealt {"  "}
          <span>(click on the images)</span>
        </h1>
          
      </div>
      <section id="clients">
        <div className="reveal"></div>

        {data?.map((d, index) => {
          return (
            <Fragment key={d.client_id}>
              <Suspense fallback={<h1>Loading .....</h1>}>
                <Link
                  to={`/clients/${d.client_id}`}
                  onClick={() => setTransition(true)}
                >
                  <div
                    className="item"
                    onMouseEnter={() => handleEnter(index)}
                    onMouseLeave={() => handleLeave(index)}
                  >
                    <div
                      ref={(elem) => infoRef.current.push(elem)}
                      className="client client_info"
                    >
                      {d.company_does}
                    </div>
                    <div className="client client_name">{d.client_name}</div>
                    <Suspense fallback={<h1>Loading..</h1>}>
                      {isLoading ? (
                        <h1>Loading..</h1>
                      ) : (
                        <>
                          <img
                            src={`${d.cover_image}`}
                            alt={`${d.client_name}`}
                          />
                        </>
                      )}
                    </Suspense>
                  </div>
                </Link>
              </Suspense>
            </Fragment>
          );
        })}
      </section>

      <div className="heading">
        <h1>
          Service<span>s</span>
        </h1>
      </div>

      <section id="services">
        <Lists />
      </section>
    </>
  );
};

export default Home;
