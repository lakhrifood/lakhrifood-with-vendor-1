import Image from "next/image";
import ReviewModal from "./ReviewModal";

function OrderedProducts({ products }) {
  const total =
    products &&
    products.productInfo.reduce(
      (acc, curr) => acc + curr.price * curr.quantity - curr.discount,
      0
    );
  console.log(products, "have a relax");
  return (
    <div className="pt-3 pb-3">
      <table className="table table-responsive table-striped">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Food Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Discount</th>
            <th className="text-end" scope="col">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.productInfo.map((item, index) => (
            <tr key={index}>
              {console.log(products, "asdfasdfasdf")}
              <th scope="row">
                <div
                  style={{ height: "100px" }}
                  className="d-flex flex-column justify-content-center align-items-center text-uppercase"
                >
                  {item.orderStatus === "pending" && (
                    <h1>
                      <i className="fas fa-exclamation-circle text-success ms-2 me-2"></i>
                      {item.orderStatus}
                    </h1>
                  )}
                  {item.orderStatus === "accepted" && (
                    <h1>
                      <i className="far fa-check-circle text-success ms-2 me-2"></i>
                      {item.orderStatus}
                    </h1>
                  )}
                  {item.orderStatus === "delivered" && (
                    <>
                      <h1>
                        <i className="fas fa-box-open text-success ms-2 me-2"></i>
                        {item.orderStatus}
                      </h1>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        className="btn btn-bg mt-2"
                      >
                        Give Review
                      </button>
                      <ReviewModal
                        vendorID={item.vendorID}
                        productID={item.productId._id}
                        orderID={products._id}
                      />
                    </>
                  )}
                </div>
              </th>
              <td>
                <Image src={item.productId.imgURL} width={100} height={100} />
              </td>
              <td>{item.productId.name} </td>
              <td>{item.price}TK</td>
              <td>{item.quantity}</td>
              <td>{item.discount} TK</td>
              <td className="text-end">
                {item.price * item.quantity - item.discount} TK
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan="5" className="text-end">
              Total
            </th>
            <th className="text-end">{total} Tk</th>
          </tr>
          {products && products.globalDiscount > 0 && (
            <tr>
              <th colSpan="5" className="text-end">
                Vaucher Discount
              </th>
              <th className="text-end">{products.globalDiscount} Tk</th>
            </tr>
          )}
          <tr>
            <th colSpan="5" className="text-end">
              Sub Total
            </th>
            <th className="text-end">
              {total - (products && products.globalDiscount)} Tk
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderedProducts;
