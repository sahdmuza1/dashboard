import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, Typography } from "@mui/material";

const Revenue = () => {
  const [revenue, setRevenue] = useState(5000);
  const [previousRevenue] = useState(4500); // Simulating past revenue for comparison

  const revenueChange = ((revenue - previousRevenue) / previousRevenue) * 100;
  const isPositive = revenueChange >= 0;

  return (
    <Card className="p-6 rounded-2xl shadow-lg bg-white">
      <CardContent>
        <Typography variant="h5" className="text-black font-bold mb-2">
          Revenue
        </Typography>
        <div className="flex items-center justify-between">
          <Typography variant="h4" className="font-bold text-black">
            ₹{revenue.toLocaleString()}
          </Typography>
          <span
            className={`flex items-center px-3 py-1 rounded-lg text-sm font-medium ${
              isPositive ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
            }`}
          >
            {isPositive ? <TrendingUp size={18} className="mr-1" /> : <TrendingDown size={18} className="mr-1" />}
            {Math.abs(revenueChange).toFixed(1)}%
          </span>
        </div>
        <Typography variant="body2" className="text-gray-500 mt-2">
          Compared to last month
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Revenue;
