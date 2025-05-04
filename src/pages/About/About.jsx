import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';


const About = () => {
    

    const data = [
        { name: 'Page 1', uv: 4000 },
        { name: 'Page 2', uv: 3000 },
        { name: 'Page 3', uv: 2000 },
        { name: 'Page 4', uv: 2780 },
        { name: 'Page 5', uv: 1890 },
    ];

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
      const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
        
    
    
    
    return (
        <div>
           
            <BarChart width={300} height={300} data={data}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                {/* <Tooltip></Tooltip> */}
                <Bar dataKey={"uv"} 
                fill="#8884d8" 
                shape={<TriangleBar />}> </Bar>
            </BarChart>
        </div>
    );
};

export default About;