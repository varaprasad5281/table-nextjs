"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const orders = [
    {
      orderID: "ORD001",
      orderStatus: "Shipped",
      totalAmount: "$120.00",
      paymentMethod: "Credit Card",
      customerName: "John Doe",
      orderDate: "2024-07-01",
    },
    {
      orderID: "ORD002",
      orderStatus: "Processing",
      totalAmount: "$75.00",
      paymentMethod: "PayPal",
      customerName: "Jane Smith",
      orderDate: "2024-07-02",
    },
    {
      orderID: "ORD003",
      orderStatus: "Cancelled",
      totalAmount: "$50.00",
      paymentMethod: "Bank Transfer",
      customerName: "Emily Johnson",
      orderDate: "2024-07-03",
    },
    {
      orderID: "ORD004",
      orderStatus: "Delivered",
      totalAmount: "$180.00",
      paymentMethod: "Credit Card",
      customerName: "Michael Brown",
      orderDate: "2024-07-04",
    },
    {
      orderID: "ORD005",
      orderStatus: "Shipped",
      totalAmount: "$220.00",
      paymentMethod: "PayPal",
      customerName: "Sarah Davis",
      orderDate: "2024-07-05",
    },
    {
      orderID: "ORD006",
      orderStatus: "Processing",
      totalAmount: "$90.00",
      paymentMethod: "Bank Transfer",
      customerName: "Chris Miller",
      orderDate: "2024-07-06",
    },
    {
      orderID: "ORD007",
      orderStatus: "Delivered",
      totalAmount: "$130.00",
      paymentMethod: "Credit Card",
      customerName: "Jessica Wilson",
      orderDate: "2024-07-07",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (statusFilter === "" || order.orderStatus === statusFilter)
  );

  const orderStatuses = [
    "All",
    "Shipped",
    "Processing",
    "Cancelled",
    "Delivered",
  ];

  return (
    <main className="mt-[50px] max-w-5xl m-auto">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <div className="mb-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            {orderStatuses.map((status) => (
              <option key={status} value={status === "All" ? "" : status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Order</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.orderID}>
              <TableCell className="font-medium">{order.orderID}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.orderStatus}</TableCell>
              <TableCell>{order.paymentMethod}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="font-bold">
              Total
            </TableCell>
            <TableCell className="font-bold">
              {filteredOrders
                .reduce((total, order) => {
                  const amount = parseFloat(order.totalAmount.replace("$", ""));
                  return total + amount;
                }, 0)
                .toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  );
}
