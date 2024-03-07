import React from 'react';
import './info.css'

const Info = ({ cardInfo }) => {
  console.log("Displaying information for:", cardInfo); // Debugging: Log displayed card name

  const season = cardInfo.season ? cardInfo.season : 'Information not available';
  const averageYield = cardInfo.averageYield ? cardInfo.averageYield : 'Information not available';

  return (
    <div id='display'>
      <h1> {cardInfo.crop.toUpperCase()}</h1>
      <h2>Type: {cardInfo.type.toUpperCase()}</h2>
      <img className='img' id='cropimg' src={`src/imag/${cardInfo.crop}.png`} alt="" />
      <p>Season: {season}</p>
      <p>Sowing Time:: {cardInfo.SowingTime}</p>
      <p>Harvesting Time :: {cardInfo.HarvestingTime}</p>
      <p>Fertilisers to use</p>

      <p>Fertiliser:{cardInfo.fertiliser}</p>
      <div className="coimg">
        {console.log(cardInfo.p)}
        <img className='f1' src={`src/imag/fertiliser/${cardInfo.fertilizer1}.png`} alt="" />
        <img className='f2' src={`src/imag/fertiliser/${cardInfo.fertilizer2}.png`} alt="" />

      </div>

      <p>Insecticide and pesticide to use</p>
      <div className="coimg">
        <img className='f1' src={`src/imag/fertiliser/${cardInfo.p}.png`} alt="" />
        <img className='f2' src={`src/imag/fertiliser/${cardInfo.i}.png`} alt="" />

      </div>

      <img src="" alt="" />

      <p>Average Yield: {averageYield}</p>

    </div>
  );
};

export default Info;
