import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PizzaInfo: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(
          "https://65b1037ad16d31d11bddd342.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (err) {
        alert(err);
      }
    }
    fetchPizzas();
  }, []);

  if (!pizza) {
    return <div>loading</div>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quo
        deleniti quos, quas consequuntur ullam atque. Aspernatur velit
        perspiciatis ratione non harum doloremque ducimus, odit vitae maiores
        aut deserunt fuga.
      </p>
      <h3>{pizza.price} ₽</h3>
    </div>
  );
};

export default PizzaInfo;
