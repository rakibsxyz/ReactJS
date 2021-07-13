import React from "react";
import { GetMonsters } from "../../api/api";
import CardList from "./card-list/card-list.component";
import Search from "./search/search.component";

const MonsterMain = (props: any) => {
  const [monsters, setMonsters] = React.useState<any>([]);
  const [filteredMonsters, setFilteredMonsters] = React.useState<any>([]);
  const [search, setSearch] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(true);

  const getMonsters = async () => {
    setLoader(true);
    const response = await GetMonsters();
    setLoader(false);
    console.log(response);
    setMonsters(response);
    setFilteredMonsters(response);
  };

  React.useEffect(() => {
    getMonsters();
  }, []);

  React.useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster: any) =>
        monster.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="App">
      <h1> Monsters </h1>
      <Search
        placeholder="search robot"
        handleChange={(e: any) => setSearch(e.target.value)}
      />
      {loader ? <p>loading</p> : <CardList monsters={filteredMonsters} />}
    </div>
  );
};

export default MonsterMain;
