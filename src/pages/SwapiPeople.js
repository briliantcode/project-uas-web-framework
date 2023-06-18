import PeopleItem from "../components/PeopleItem";
import { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

function SwapiPeople() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then(function (response) {
      if (response.status === 200) {
        setPeoples(response.data.results);
      }
    });
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div class="px-20 py-6">
        <ul role="list" class="divide-y divide-gray-100">
          {peoples.map((people) => {
            return <PeopleItem people={people}></PeopleItem>;
          })}
        </ul>
      </div>
    </>
  );
}

export default SwapiPeople;
