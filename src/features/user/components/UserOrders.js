import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLoggedInUserOrdersAsync, selectUserInfo, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export default function UserOrders() {
  const user = useSelector(selectUserInfo);
  const orders = useSelector(selectUserOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedInUserOrdersAsync(user.id));
  }, [dispatch]);

  return (
    <div>
      {orders.map((order) => (
        <div>
          <div className="mx-auto bg-slate-300 max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mt-8">
              <h1 className="text-4xl my-12 font-bold tracking-tight text-gray-900">
                Order : {order.id}
              </h1>
              <h3 className="text-xl my-12 font-bold tracking-tight text-red-900">
                Order : {order.status}
              </h3>
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={item.thumbnail}
                          src={item.title}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.href}>{item.title}</a>
                            </h3>
                            <p className="ml-4">${item.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.brand}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="text-gray-500">
                            <label
                              htmlFor="quantity"
                              className="inline mr-5 text-sm/6 font-medium text-gray-900"
                            >
                              Qty:{item.quantity};
                            </label>
                          </div>

                          <div className="flex"></div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${Math.round(order.totalAmount * 100) / 100}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total Items in Cart</p>
                <p>{order.totalItems} Items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping Address.
              </p>
              <div
                // key={index}
                className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200"
              >
                <div className="flex min-w-0 gap-x-4">
                  
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">
                      {order.selectedAddress.name}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {order.selectedAddress.street}
                    </p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">
                      {order.selectedAddress.pinCode}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm/6 text-gray-900">
                    Phone:{order.selectedAddress.phone}
                  </p>
                  <p className="text-sm/6 text-gray-500">{order.selectedAddress.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
