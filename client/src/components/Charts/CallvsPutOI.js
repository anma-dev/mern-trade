import React from "react";
import { useStateContext } from "../../Contexts/ContextProvider";
import { Line } from "react-chartjs-2";

const  CallvsPutOI=({indexData,name})=> {

  const { isMatch } = useStateContext();
  
    let timearr = [];

    for (let i = 0; i < indexData?.length; i++) {
      let chopptime = indexData[i]?.timestamp.slice(12, 17);
      timearr.push(chopptime);
    }

   
const data = {
    labels: timearr,
    datasets: [
      {
        label: "CE OI",
        data:indexData?.map((x)=>x?.totCEchg),
        fill: false,
        borderColor: ["#e76d67"],
        backgroundColor:  ["#e76d67"],
        pointRadius:1,
        pointHoverRadius:6,

        
      },
      {
        label: "PE OI",
        data:indexData?.map((x)=>x?.totPEchg),
        fill: false,
        borderColor: ["#40b0b2"],
        backgroundColor:   ["#40b0b2"],
        pointRadius:1,
        pointHoverRadius:6,
      
      }
    ]
  };

  const options = {
    //switch chart axis on basis of media screen size
    indexAxis: "x",
    interaction: {
      mode: "index",
    },

    maintainAspectRation: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },

    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div >
        <span>{name} Call vs Put OI</span>
      <Line data={data} 
      width={isMatch? 380:800}
      height={isMatch? 200:300}
      options={options}/>
    </div>
  );
}

export default  CallvsPutOI