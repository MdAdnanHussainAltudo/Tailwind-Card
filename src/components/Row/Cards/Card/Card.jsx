/* eslint-disable react/prop-types */

const Card = ({ data }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 md:px-4 lg:px-8 py-8">
      <div
        className={`card-box shadow-md rounded-xl overflow-hidden transition-all duration-300 bg-white text-black 
                    hover:shadow-${data.shadowClr} hover:bg-${data.shadowClr} hover:text-white hover:p-2`}
      >
        <div className="px-4 py-8 bg-white rounded-xl">
          <div
            className="img-cont h-52 bg-contain bg-center bg-no-repeat mb-4"
            style={{ backgroundImage: `url("${data.image}")` }}
          ></div>
        </div>
        <hr />
        <div className="p-4 min-h-40">
          <h4 className="text-xl mb-2 font-semibold">{data.name}</h4>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
