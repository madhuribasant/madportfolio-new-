
import { Suspense } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Card } from "../components/card/Card";

export const Clients = () => {
  const params = useParams();

  const { data ,isLoading } = useQuery("works", () =>
    fetch(
      `https://tmgomzcxkxtwnlmxxduy.supabase.co/rest/v1/works?client=eq.${params.id}&select=*`,
      {
        headers: {
          apikey: import.meta.env.VITE_ANON_KEY,
          Authorization: "Bearer" + import.meta.env.VITE_ANON_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((val) => val),{cacheTime:10}
  );

  

      
  return (
    <>
      <section className="clients-section">
        <section className="masonary">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Card  data={data}/>
            </Suspense>
        </section>
      </section>
    </>
  );
};




