import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export interface ICocktailList {}

const CocktailList: React.FC<ICocktailList> = (): React.ReactElement => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (cocktails.length < 1) {
    return (
      <>
        <h2 className="section-title">
          no cocktails matched your search criteria
        </h2>
      </>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item: any) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
