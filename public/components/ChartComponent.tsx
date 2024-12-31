"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", desktop: 200000, mobile: 80000 },
  { month: "Feb", desktop: 250000, mobile: 20000 },
  { month: "Mar", desktop: 210000, mobile: 120000 },
  { month: "Apr", desktop: 120000, mobile: 190000 },
  { month: "May", desktop: 200000, mobile: 130000 },
  { month: "June", desktop: 80000, mobile: 14000 },
  { month: "Jul", desktop: 150000, mobile: 200000 },
  { month: "Aug", desktop: 100000, mobile: 10000 },
  { month: "Sep", desktop: 240000, mobile: 140000 },
  { month: "Oct", desktop: 60000, mobile: 140000 },
  { month: "Nov", desktop: 280000, mobile: 140000 },
  { month: "Dec", desktop: 160000, mobile: 140000 },
];

const chartConfig: typeof ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

interface CustomTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

const CustomXAxisTick = (props: CustomTickProps) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dy={16}
      textAnchor="middle"
      fill="#666"
      fontSize={12}
      fontFamily="Inter"
    >
      {payload.value}
    </text>
  );
};

const CustomYAxisTick = (props: CustomTickProps) => {
  const { x, y, payload } = props;
  return (
    <text
      x={x}
      y={y}
      dy={4}
      dx={-4}
      textAnchor="end"
      fill="#333"
      fontSize={12}
      fontFamily="Inter"
    >
      {payload.value}
    </text>
  );
};
interface CustomTooltipProps {
    active?: boolean;
    payload?: {
      value: number | string;
    }[];
    label?: string;
  }

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
          <p className="label">{`${label}`}</p>
          <p className="intro">{`Desktop: ${payload[0].value}`}</p>
          <p className="intro">{`Mobile: ${payload[1].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

const Page = () => {
  return (
    <Card>
      <CardHeader>
        <CardDescription>
          Statistics showing your monthly spending
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3"  vertical={false} />
              <XAxis
                dataKey="month"
                tick={(props) => <CustomXAxisTick {...props} />}
              />
              <YAxis
                domain={[0, 300000]}
                tickCount={7}
                tick={(props) => <CustomYAxisTick {...props} />}
                axisLine={false} tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="desktop" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="mobile" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Page;
