"use client"
import { barChartBoxVisit } from '@/constants';
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis, Legend } from "recharts";

const BarChartBox = () => {


    return (
        <div className="w-[90%] md:w-3/4 xl:w-1/2 mx-auto h-full">
            <h1 className='my-4 '>Total Visit</h1>
            <div className="flex flex-col justify-between w-full h-full">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={barChartBoxVisit}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                        <Bar dataKey='visit' fill='#FF8042' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox
