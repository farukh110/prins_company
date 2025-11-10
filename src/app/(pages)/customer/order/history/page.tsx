"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  getOrdersCustomerId,
  selectAuthToken,
  selectCurrentUser,
  selectOrders,
  selectOrdersLoading,
  selectOrdersError,
} from "@/redux/api/auth/authSlice";
import { format } from "date-fns";

export default function Account() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectAuthToken);
  const orders = useAppSelector(selectOrders);
  const ordersLoading = useAppSelector(selectOrdersLoading);
  const ordersError = useAppSelector(selectOrdersError);

  useEffect(() => {
    if (user?.id && token) {
      dispatch(getOrdersCustomerId(user.id));
    }
  }, [user?.id, token, dispatch]);

  return (
    <div className="space-y-3.5">
      <section className="rounded border border-gray-500/50">
        <div className="flex items-center justify-between border-b border-gray-500/50 bg-[#F5F5F6] p-3">
          <p className="text-[18px] poppins-regular text-gray-800">Recent Orders</p>
          <a
            href="/customer/order/history"
            className="cursor-pointer hover:underline text-xs underline-offset-1"
          >
            View All
          </a>
        </div>

        <div className="p-3 overflow-auto">
          <table className="w-full border border-gray-500/50 border-collapse">
            <thead>
              <tr>
                {["Order #", "Date", "Ship To", "Order Total", "Status", "Action"].map((th) => (
                  <th
                    key={th}
                    className="border border-gray-500/50 text-left px-2.5 py-2 text-[14px] poppins-medium min-w-28"
                  >
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ordersLoading ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    Loading orders...
                  </td>
                </tr>
              ) : ordersError ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-red-500">
                    {ordersError}
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-500">
                    No recent orders.
                  </td>
                </tr>
              ) : (
                orders.slice(0, 5).map((order) => ( // Show only 5 recent
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      #{order.id}
                    </td>
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      {format(new Date(order.created_at), "MMM dd, yyyy")}
                    </td>
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      {order.name}
                    </td>
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      ${order.grand_total}
                    </td>
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          order.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Cancelled"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="border border-gray-500/50 px-2.5 py-2 text-sm">
                      <a
                        href={`/customer/order/${order.id}`}
                        className="text-blue-600 hover:underline text-xs"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}