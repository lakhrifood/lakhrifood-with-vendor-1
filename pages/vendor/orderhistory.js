import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
const { default: Footer } = require("@/components/vendor/Footer/footer");
const { default: Navbar } = require("@/components/vendor/Navbar");
const orderhistory = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" backgroundAsh">
        <div className="container pt-40 container100vh">
          <h1 className={`h3 ml-10 `}>Order history</h1>
          <Table variant="simple" bg="white">
            <Thead>
              <Tr>
                <Th>Tracking No</Th>
                <Th>Date</Th>
                <Th>Qty</Th>
                <Th> Payment Status</Th>
                <Th> Delivery Status</Th>
                <Th> Details</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>#asdjasdn</Th>
                <Th>23.07.21</Th>
                <Th>4</Th>
                <Th>Bkash</Th>
                <Th>Confirmed</Th>
                <Th>See more</Th>
              </Tr>
            </Tfoot>
          </Table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default orderhistory;
