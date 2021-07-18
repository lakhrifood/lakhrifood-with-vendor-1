import Image from "next/image";

function OrderedProducts({ products }) {
  console.log(products, "cckk");
  return (
    <div className="pt-3 pb-3">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Image</th>
            <th scope="col">Food Name</th>
            <th scope="col">Price</th>
            <th scope="col">Discount</th>
            <th className="text-end" scope="col">
              Totalsadasd
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.productInfo.map((item, index) => (
            <tr>
              <th scope="row">{item.orderStatus}</th>
              <td>
                <Image src={item.productId.imgURL} width={100} height={100} />
              </td>
              <td>{item.productId.name} </td>
              <td>{item.price}TK</td>
              <td>{item.discount} TK</td>
              <td className="text-end">{item.price - item.discount} TK</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderedProducts;
