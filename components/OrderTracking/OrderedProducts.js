import Image from "next/image";


function OrderedProducts() {
    return (
        <div className="pt-3 pb-3">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Image</th>
                        <th scope="col">Food Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th className="text-end" scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <Image
                                src="/./pizza-beer-1200x628-facebook-1200x628.png"
                                width={100}
                                height={100}
                            />
                        </td>
                        <td>Pizza </td>
                        <td>200 TK</td>
                        <td>20 TK</td>
                        <td className="text-end">220 TK</td>
                    </tr>
                    {/* another one */}
                    <tr>
                        <th scope="row">1</th>
                        <td>
                            <Image
                                src="/./pizza-beer-1200x628-facebook-1200x628.png"
                                width={100}
                                height={100}
                            />
                        </td>
                        <td>Pizza </td>
                        <td>200 TK</td>
                        <td>20 TK</td>
                        <td className="text-end">220 TK</td>
                    </tr>
                    {/* Calculate one */}
                    <tr>
                        <td colSpan="6">
                            <h1 className="text-end"> Sub Total <strong>440 TK</strong> </h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <h1 className="text-end"> Discount <strong>40 TK</strong> </h1>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <h1 className="text-end"> Ground Total <strong>40 TK</strong> </h1>
                        </td>
                    </tr>
                    {/* another one */}
                </tbody>
            </table>
        </div>
    )
}

export default OrderedProducts
