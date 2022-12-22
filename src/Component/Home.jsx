import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
const [data, setData] = useState([]);
const [dataTemp, setDataTemp] = useState([]);
  const filteritem=(curitem)=>{
  console.log(curitem);

  if(curitem==='products'){
  setData(()=>[...dataTemp])
return
  }
  const updatedata= dataTemp.filter((cur,ind)=>{
    console.log(cur.category)
   return cur.category ===curitem
  });
  setData(()=>[...updatedata])
  }
  useEffect(() => {
    fetch("https://dummyjson.com/products").then((resut) => {
      resut.json().then((res) => {
        // console.log(res)
        setData(res.products);
        setDataTemp(res.products);
      });
    });
  }, []);
  // console.log(setData)
  return (
    <>
      <div>
        <section className="container" >
          <h2
            className="tex-center mb-2"
            style={{
              fontWeight: "400px",
              textAlign: "center",
              marginBottom: "2px",
            }}
          >
            Search Your Product
          </h2>
          <div className="btn-container">
          <Button variant="primary" onClick={()=>filteritem("smartphones")}>Mobile</Button>
            <Button variant="secondary" onClick={()=>filteritem("laptops")}>Laptop</Button>
            <Button variant="success" onClick={()=>filteritem("fragrances")}>Perfume</Button>
            <Button variant="warning" onClick={()=>filteritem("skincare")}>SkinCare</Button>
            <Button variant="danger" onClick={()=>filteritem("groceries")}>Daal</Button>
            <Button variant="info" onClick={()=>filteritem("products")}>All</Button>
          </div>
          <div className='container mt-3'>
            {data.map((item, index) => 
              
              <>
              <div className="card">
              <Card style={{ width: '18rem',border:"none"  }}>
      <Card.Img variant="top" className="cd" src={item.thumbnail} />
      <div className="cardbody">
       <div className="upper_data ">
        <h4>{item.title}</h4>
       </div>
       <div className="extra"></div>
       <div className="last_data">
       <p>{item.description}</p>
       </div>
       <span>price{item.price}</span>
       <div>
       <Button variant="primary">Buy Now</Button>
       </div>
      </div>
    </Card>
    </div>
          </>
            )};
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
