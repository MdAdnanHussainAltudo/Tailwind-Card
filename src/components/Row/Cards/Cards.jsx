/* eslint-disable react/prop-types */
import Card from "./Card/Card";

const Cards = ({ elements }) => {
  return (
    <div className="flex flex-wrap my-4">
      {elements.map((ele, index) => (
        <Card data={ele} key={index} />
      ))}
    </div>
  );
};

export default Cards;
