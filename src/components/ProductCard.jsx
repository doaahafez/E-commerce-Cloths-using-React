import React, { useContext, useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import DynamicCounter from "./DynamicCounter";
import { useNavigate } from "react-router";
import { productsContext } from "./contexts/Products";

// product:{image,id,title,price,desc}
// { id, title, image, desc, price }
// const {title,image,desc,price}=props;
// props={product:{id,title,image,desc,price}}

export default function ProductCard(
  { id, title, image, desc, price }
) {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const {cartCount,setCartCount}=useContext(productsContext)
  // const {cartCount,setCartCount}=value;

  useEffect(() => {
    // console.log(count);
  }, [count]);

  const ToAdd=()=> {
    setCount(count + 1);
    setCartCount(cartCount+1);
  }
  // console.log("form product cart "+cartCount)

  const ToRemove = () => {
    setCount(count - 1);
    setCartCount(cartCount-1);
  };

  const navigateToDetails = (id) => {
    navigate(`${id}`); // to convert id number to string using stringfy or bactik ``
  };

  return (
    <Card className="m-5 p-3 h-100 ">
      <Card.Img
        variant="top"
        src={image}
        style={{ cursor: "pointer", height: "300px" }}
        onClick={() => navigateToDetails(id)}
      />
      <Card.Body className="d-flex justify-content-between flex-column">
        <Card.Title>
          <span className="text-danger">Title :</span> {title}
        </Card.Title>
        <Card.Text>
          <span className="text-danger fw-bold">Description : </span>
          {desc.split(" ", 5).join(" ") + "..."}
        </Card.Text>
        <p>
          <span className="text-danger fw-bold">Price : </span>
          {price} $
        </p>
      </Card.Body>

      <div className="d-flex justify-content-between">
        <Button
          onClick={ToAdd}
          style={{ width: count ? "" : "100%" }}
          className="btn btn-success"
        >
          Add
        </Button>
        {count ? (
          <>
            <span>{count}</span>
            <Button onClick={ToRemove} className="btn btn-danger">
              Remove
            </Button>
            <DynamicCounter />
          </>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}

// export default class ProductCard extends Component {
// state={
//     count:0,
// };
// ToAdd=()=>{
//     setState({ count:state.count + 1 })
// };

// ToRemove=()=>{
//     setState({ count:state.count - 1 })
// };

//   render() {
//     return (
//         <Card className='m-5 p-3'>
//           <Card.Img variant="top" src={require("./images/img1.jpg")}  />
//           <Card.Body>
//             <Card.Title>{props.title}</Card.Title>
//             <Card.Text>
//               {props.desc}
//             </Card.Text>
//           </Card.Body>
//           <p>price {props.price}</p>
//           <div className='d-flex justify-content-between'>
//           <Button onClick={ToAdd}  style={{width:state.count ? "" :"100%"}} className='btn btn-success'>
//             Add</Button>
//             {
//                 state.count?
//                 <>
//                     <span>{state.count}</span>
//                     <Button onClick={ToRemove} className='btn btn-danger'>
//                     Remove</Button>
//                 </>: ""
//             }
//           </div>
//         </Card>

//     )
//   }
// }
