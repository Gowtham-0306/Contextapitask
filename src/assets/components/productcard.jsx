import { useContext, useState } from "react";
import { ProductContext } from "../context/productcontext";
export function ProductCard({
  products,
  calculatePrice = () => {},
  cart = () => {},
}) {
  const [selectedQuantity, setSelectedQuantity] = useState(0);

  function handlechange(event, id) {
    var dat = event.target.value;
    console.log(`${id}im id`);
    calculatePrice(dat, id);
    setSelectedQuantity(dat);
  }

  function handleremove(id) {
    cart(id);
    setSelectedQuantity(selectedQuantity - 1);
  }

  return (
    <>
      <div className="container">
        <div className="contents">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-5">
                  <img
                    src="https://m.media-amazon.com/images/I/81CgtwSII3L._SL1500_.jpg"
                    alt=""
                  />{" "}
                  <img />
                </div>
                <div className="col-7">
                  <div className="phonedetails">
                    <h6>{products.title}</h6>
                    <label htmlFor="IphoneDetails">Details</label>
                    <p>{products.description}</p>
                    <label htmlFor="IphoneDetails">
                      {" "}
                      Price : {products.price}{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="cartcontainer">
                <div className="cart">
                  <select
                    name="ProductQuantity"
                    value={selectedQuantity}
                    id=""
                    onChange={(e) => {
                      handlechange(e, products.id);
                    }}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <h6>{products.total} </h6>
                </div>
                <div className="text">
                  <button
                    onClick={(e) => {
                      handleremove(products.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-5">
                  <h6>Sub Total : {products.total}</h6>
                  <h6>Shipping : 0</h6>
                </div>
                <div className="col-7"></div>
              </div>
            </div>
            <div className="col-5">
              <h6>Total : {products.total}</h6>
              <h6> Free</h6>
            </div>
          </div>
        </div>

        <div className="contents">
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-5">
                  <h6>Total :{products.total} </h6>
                </div>
                <div className="col-7"></div>
              </div>
            </div>
            <div className="col-5">
              <h6>Total : {products.total}</h6>
              <h6 id="napsola"> Get daily cash with naspola card</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
