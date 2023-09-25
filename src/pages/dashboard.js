import React, { useState } from "react";
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import DataTable from "@/components/datadisplay/Table/DataTable";
import { createData } from "@/components/datadisplay/Table/createdata";



const columnsData = [
  { id: "TASK_NAME", name: "TASK NAME" },
  { id: "HOURS", name: "HOURS" },
  { id: "REMAINING_HOURS", name: "REMAINING HOURS " },
  { id: "BUDGETED_HOURS", name: "BUDGETED HOURS " },
  { id: "PROJECT_STATUS", name: "PROJECT STATUS " },
];

const rows = [
  createData("TASK#1", 159, 6.0, 24, 'Done'),
  createData("TASK#2", 237, 9.0, 37, 'In Progress'),
  createData("TASK#3", 262, 16.0, 24, 'Done'),
  createData("TASK#4", 305, 3.7, 67, 'Done'),
  createData("TASK#5", 356, 16.0, 49, 'Done'),
];

const Dashboard = () => {


  return (
    <AppLayout
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        }>
        <Head>
            <title>Laravel - Dashboard</title>
        </Head>
  <DataTable rows={rows} columnsData={columnsData}/>
  
    </AppLayout>
)
};

export default Dashboard;
