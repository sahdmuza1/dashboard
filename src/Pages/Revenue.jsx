import { useState } from "react";
import { TrendingUp, TrendingDown, ShoppingCart, Store, Box } from "lucide-react";
import { Card, CardContent, Typography, Divider, Tooltip } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, ResponsiveContainer } from "recharts";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

// Sample Revenue Data (Last 6 Months)
const revenueData = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4000 },
  { month: "Mar", revenue: 4500 },
  { month: "Apr", revenue: 4800 },
  { month: "May", revenue: 5000 },
  { month: "Jun", revenue: 5300 },
];

const Revenue = () => {
  const [revenue, setRevenue] = useState(5000);
  const [previousRevenue] = useState(4500);
  const revenueChange = ((revenue - previousRevenue) / previousRevenue) * 100;
  const isPositive = revenueChange >= 0;

  return (
    <div className="h-screen flex bg-gray-100">
      {/* ✅ Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* ✅ Main Content */}
      <div className="flex-1 mt-8">
        {/* ✅ Navbar (Fixed Position) */}
        <Navbar />

        {/* ✅ Revenue Section */}
        <div className="p-6 mt-16">
          
          {/* ✅ Revenue Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 🔹 Total Revenue */}
            <Card className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200">
              <CardContent className="p-6">
                <Typography variant="h6" className="text-gray-700 font-semibold flex items-center gap-2">
                  💰 Total Revenue
                </Typography>
                <Divider className="my-3" />
                <div className="flex items-center justify-between">
                  <Typography variant="h4" className="font-bold text-black">
                    ₹{revenue.toLocaleString()}
                  </Typography>
                  <Tooltip title="Revenue Growth" arrow>
                    <span
                      className={`flex items-center px-3 py-1 rounded-lg text-sm font-medium ${
                        isPositive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      }`}
                    >
                      {isPositive ? <TrendingUp size={18} className="mr-1" /> : <TrendingDown size={18} className="mr-1" />}
                      {Math.abs(revenueChange).toFixed(1)}%
                    </span>
                  </Tooltip>
                </div>
                <Typography variant="body2" className="text-gray-500 mt-2">
                  Compared to last month
                </Typography>
              </CardContent>
            </Card>

            {/* 🔹 Revenue Breakdown */}
            <Card className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200">
              <CardContent className="p-6">
                <Typography variant="h6" className="text-gray-700 font-semibold flex items-center gap-2">
                  📊 Revenue Breakdown
                </Typography>
                <Divider className="my-3" />
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <ShoppingCart size={18} className="text-blue-500" />
                      <Typography>Online Sales</Typography>
                    </div>
                    <Typography className="font-semibold">₹3,500</Typography>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <Store size={18} className="text-green-500" />
                      <Typography>Offline Sales</Typography>
                    </div>
                    <Typography className="font-semibold">₹1,200</Typography>
                  </div>
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-2">
                      <Box size={18} className="text-purple-500" />
                      <Typography>Subscriptions</Typography>
                    </div>
                    <Typography className="font-semibold">₹300</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 🔹 Revenue Growth */}
            <Card className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200">
              <CardContent className="p-6">
                <Typography variant="h6" className="text-gray-700 font-semibold flex items-center gap-2">
                  📈 Growth Rate
                </Typography>
                <Divider className="my-3" />
                <Typography variant="body1" className={`font-semibold ${isPositive ? "text-green-600" : "text-red-600"}`}>
                  {isPositive ? "📈 Increasing" : "📉 Decreasing"}
                </Typography>
                <Typography variant="body2" className="text-gray-500 mt-1">
                  Your revenue has {isPositive ? "grown" : "declined"} by {Math.abs(revenueChange).toFixed(1)}% this month.
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* ✅ Revenue Chart (Integrated with Recharts) */}
          <div className="mt-10">
            <Card className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200 p-6">
              <Typography variant="h6" className="text-gray-700 font-semibold mb-3">
                📊 Revenue Performance
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={3} dot={{ stroke: "#4F46E5", strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
