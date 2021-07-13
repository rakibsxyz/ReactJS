import React from "react";
const jaonData = require("./data.json");

const JsonData = (props: any) => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setData(jaonData.stockData);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4>Json Data</h4>
          <table className='table'>
            <thead>
              <tr>
                <th>company</th>
                <th>ticker</th>
                <th>stockPrice</th>
                <th>timeElapsed</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.length > 0 &&
                data.map((item: any, index: number) => (
                  <tr key={index}>
                    <td>{item.company}</td>
                    <td>{item.ticker}</td>
                    <td>{item.stockPrice}</td>
                    <td>{item.timeElapsed}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JsonData;
