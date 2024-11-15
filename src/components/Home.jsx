import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const gadgets = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-9">
        {gadgets.map((card) => (
          <Cards card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
