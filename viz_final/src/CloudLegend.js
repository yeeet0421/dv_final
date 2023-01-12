import React from 'react';
import legend_data from './legend_data';
// import { data } from './PieChart';

const CloudLegend = ({trends,trendNumber}) => {
    const legend_col = Object.keys(legend_data[trends[trendNumber]]);
    return legend_col.map((d, i) => {
        return (
          <div style={{transform:`translate(${20}px, ${0}px)`}} width={50} height={50+i*10}
          >
            <div
                style={{width: '10px',
                height: '10px',
                backgroundColor: legend_col[i],
                borderRadius: '50%',
                
            }}
            >
                
            </div>
            <div style={{transform:`translate(${25}px, ${-17}px)`}}>
                <span style={{fontSize:1+'em'}}>
                    {legend_data[trends[trendNumber]][legend_col[i]]}
                </span>
            </div>
            
            
          </div>
        );
      });
  };
  
  export default CloudLegend;
  