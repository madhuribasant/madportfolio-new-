
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Card } from "../components/card/Card";

export const Clients = () => {
  const params = useParams();

  const { data ,isLoading } = useQuery("works", () =>
    fetch(
      `https://dafhhtmvyudvxztkllpd.supabase.co/rest/v1/works?client=eq.${params.id}&select=*`,
      {
        headers: {
          apikey: import.meta.env.VITE_ANON_KEY,
          Authorization: "Bearer" + import.meta.env.VITE_ANON_KEY,
        },
      }
    )
      .then((res) => res.json())
      .then((val) => val)
  );

  

      
  return (
    <>
      <section className="clients-section">
        <section className="masonary">
              <Card isLoading={isLoading} data={data}/>
        </section>
      </section>
    </>
  );
};




