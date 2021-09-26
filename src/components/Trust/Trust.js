import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Donate from "../Donate/Donate";

const Trust = () => {
  
    const [donated, setDonated] = useState([]);
    const [ cart , setCart ] = useState([]);

const handleAddDonate=(donate)=>{

    const newCart=[ ...cart  , donate ]
    setCart(newCart)
}

  useEffect(() => {
    fetch("/ukData.json")

      .then((res) => res.json())
      // .then((data) => console.log(data));
      .then((data) => setDonated(data));
  }, []);

  return (
    <div>

     <div  className=" my-5 row row-cols-1 row-cols-md-3 g-1 shadow-lg">
        <div className="col-md-9">
          <div className="row">
            {
                donated.map(donate=>  
            <Donate
            
              id = {donate.id}
                donate={donate}

                handleAddDonate={handleAddDonate}
                >

                </Donate>)
            }
           
          
          </div>
        </div>
        <div className="col-md-3">
             <Cart
                cart={cart}
             >
             </Cart>
        </div>
      </div>
    </div>
  );
};

export default Trust;
