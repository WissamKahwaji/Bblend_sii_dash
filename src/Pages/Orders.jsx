import React, { useState } from "react";
import { baseURL } from "../API/baseURL";
import { Form, Link, useLoaderData } from "react-router-dom";
import Input from "../Components/UI/Input";
import PageContainer from "../Components/UI/PageContainer";
import { useSelector } from "react-redux";
import { ImEye } from "react-icons/im";
import OrderDetailsModal from "../Components/UI/OrderDetailsModal";
const Orders = () => {
  const data = useLoaderData();
  console.log(data);
  // Flatten all user orders into a single array with user info
  const allOrdersWithUserInfo = data.reduce((orders, user) => {
    return [
      ...orders,
      ...user.orders.map((order) => ({
        ...order,
        ...user, // Include user information
      })),
    ];
  }, []);

  // Sort all orders by the newest orderPlacedAt timestamp
  allOrdersWithUserInfo.sort((a, b) =>
    b.orderPlacedAt.localeCompare(a.orderPlacedAt)
  );

  console.log(allOrdersWithUserInfo);
  const colorsData = useSelector((state) => state.colorsSlice);
  const headingTitle = {
    color: colorsData.mainColor,
  };

  // State to manage the visibility of the order details modal
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(false);
  // State to store the selected order
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to open the order details modal
  const openOrderDetailsModal = (order) => {
    setSelectedOrder(order);
    setIsOrderDetailsVisible(true);
  };

  // Function to close the order details modal
  const closeOrderDetailsModal = () => {
    setSelectedOrder(null);
    setIsOrderDetailsVisible(false);
  };

  return (
    <PageContainer>
      <h2
        style={headingTitle}
        className={`text-center text-2xl font-semibold mb-2`}
      >
        Orders
      </h2>
      <div>
        <ul>
          {allOrdersWithUserInfo.map((order) => (
            <li
              key={order.orderId}
              className={`mb-4 bg-gray-100 rounded-lg py-1`}
            >
              <Link to={`${order.id}/${order.idInDB}`} className={`py-8 block`}>
                <div
                  className={`flex flex-col md:grid md:grid-cols-4 md:place-items-center [&>*]:mb-2`}
                >
                  <p>
                    <strong>Order ID:</strong> {order.orderId}
                  </p>
                  <p>
                    <strong>User Name:</strong> {order.userName}
                  </p>

                  <p>
                    <strong>User Country:</strong> {order.userCountry}
                  </p>

                  <p>
                    <strong>Total Price:</strong> {order.cartItemsTotalPrice}
                  </p>
                </div>
              </Link>
              <div className={`flex items-center justify-between px-4`}>
                <Form method="post">
                  <input hidden name="order_id_in_db" value={order.idInDB} />
                  <input hidden name="user_identifier" value={order.id} />
                  <input
                    hidden
                    name="status"
                    value="Store Received The Order"
                  />
                  <button
                    disabled={order.orderStatus === "Pending" ? false : true}
                    className={`px-4 py-1 rounded-lg bg-blue-400 text-white text-lg disabled:text-blue-100 disabled:cursor-not-allowed`}
                  >
                    Received
                  </button>
                </Form>
                <div>
                  <button
                    onClick={() => openOrderDetailsModal(order)}
                    className={`px-4 py-1 rounded-lg bg-green-400 text-white text-lg flex items-center`}
                  >
                    See Order <ImEye className={`ml-2`} />
                  </button>
                </div>
                <Form method="post">
                  <input hidden name="order_id_in_db" value={order.idInDB} />
                  <input hidden name="user_identifier" value={order.id} />
                  <input
                    hidden
                    name="status"
                    value="Store Canceled The Order"
                  />
                  <button
                    disabled={
                      order.orderStatus === "Store Canceled The Order"
                        ? true
                        : false
                    }
                    className={`px-4 py-1 rounded-lg bg-red-400 text-white text-lg disabled:text-red-100 disabled:cursor-not-allowed`}
                  >
                    Cancel
                  </button>
                </Form>
              </div>
            </li>
          ))}
        </ul>
        {isOrderDetailsVisible && (
          <OrderDetailsModal
            order={selectedOrder}
            onClose={closeOrderDetailsModal}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default Orders;
export const ordersLoader = async () => {
  const response = await fetch(`${baseURL}orders.json`);
  const data = await response.json(); // Await the response.json() promise
  console.log(data);
  const dataArray = [];
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      dataArray.push({
        [key]: data[key],
      });
    }
  }

  const transformedData = Object.keys(data).map((userId) => {
    const user = data[userId];
    const orders = Object.keys(user)
      .map((orderId) => {
        if (orderId !== "cartItemsTotalPrice") {
          const order = user[orderId];
          order.idInDB = orderId;
          return order;
        }
        return null;
      })
      .filter(Boolean);

    return {
      id: userId,
      orders,
    };
  });
  console.log(transformedData);
  //
  function transformCartItemsToArrays(data) {
    return data.map((entry) => ({
      ...entry,
      orders: entry.orders.map((order) => ({
        ...order,
        cartItems: Object.values(order.cartItems),
      })),
    }));
  }

  // Usage
  const transformedDataToUse = transformCartItemsToArrays(transformedData);
  console.log(transformedDataToUse);
  return transformedDataToUse;
};

export const ordersAction = async ({ request }) => {
  const data = await request.formData();
  const userIdentifier = data.get("user_identifier");
  const orderIdInDB = data.get("order_id_in_db");
  const status = data.get("status");
  const response = await fetch(
    `${baseURL}orders/${userIdentifier}/${orderIdInDB}/orderStatus.json`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(status),
    }
  );
  const responseData = await response.json();
  console.log(responseData);
  return null;
};
