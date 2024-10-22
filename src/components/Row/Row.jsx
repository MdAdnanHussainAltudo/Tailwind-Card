import Cards from "./Cards/Cards";

/* eslint-disable react/prop-types */
const Row = ({ elements }) => {
  return (
    <div className="my-6">
      {elements.map((ele, index) => (
        <div key={index}>
          <h3 className="text-2xl underline italic px-2 md:px-4 lg:px-8">
            {ele.title}
          </h3>
          <Cards elements={ele.elements} />
        </div>
      ))}
    </div>
  );
};

export default Row;
