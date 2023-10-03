// // import React, { useState } from "react";
// // import AppLayout from '@/components/Layouts/AppLayout'
// // import Head from 'next/head'
// // import DataTable from "@/components/datadisplay/Table/DataTable";
// // import { createData } from "@/components/datadisplay/Table/createdata";
// // import MyDocument from "@/components/Generatepdf";

// // const columnsData = [
// //   { id: "TASK_NAME", name: "TASK NAME" },
// //   { id: "HOURS", name: "HOURS" },
// //   { id: "REMAINING_HOURS", name: "REMAINING HOURS " },
// //   { id: "BUDGETED_HOURS", name: "BUDGETED HOURS " },
// //   { id: "PROJECT_STATUS", name: "PROJECT STATUS " },
// // ];

// // const rows = [
// //   createData("TASK#1", 159, 6.0, 24, 'Done'),
// //   createData("TASK#2", 237, 9.0, 37, 'In Progress'),
// //   createData("TASK#3", 262, 16.0, 24, 'Done'),
// //   createData("TASK#4", 305, 3.7, 67, 'Done'),
// //   createData("TASK#5", 356, 16.0, 49, 'Done'),
// // ];

// // const Dashboard = () => {


// //   return (
// //     // <AppLayout
// //     //     header={
// //     //         <h2 className="font-semibold text-xl text-gray-800 leading-tight">
// //     //             Dashboard
// //     //         </h2>
// //     //     }>
// //     //     <Head>
// //     //         <title>Laravel - Dashboard</title>
// //     //     </Head>

  
// //     // </AppLayout>
// //       <DataTable rows={rows} columnsData={columnsData}/>
// // )
// // };

// // export default Dashboard;


// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const InvoicePDF = dynamic(() => import("./pdf"), {
//   ssr: false,
// });

// const View = () => {
//   const [client, setClient] = useState(false);

//   useEffect(() => {
//     setClient(true);
//   }, []);

//   return <InvoicePDF />;
// };

// export default View;
import React from "react";
import { Document, Page, View, Text, Image, PDFViewer, StyleSheet, Font } from "@react-pdf/renderer";

// Font.register({ family: "Inter", src: "/assets/neutra-text.otf" });

const styles = StyleSheet.create({
  body: {
    paddingRight: "20px",
    // fontFamily: "Inter"
  }
});

const PDF = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={{ display: 'flex', justifyContent: "center", flexDirection: "column",margin:"20px"}}>
          <Text wrap={false} style={{ alignSelf: "flex-end" }}>Goodbye, world!hgdkljfhsalhgfljadhsgflhasdlhfgsaljdhgflhasgflhgasdl;hfg;aksdjgf;kjsdahf;kjhasd;kjhf;kjashdf;kjhasd;kjfhjks;adhfkjhsadk;jfhaskjdhfkjsahdfkjhsadkj;hfkjsdhfkjhasd;kjhfkjsadhfkjhsda;kjh;</Text>
        </View>
        <View>
          {/* <Image src="/assets/image.png" /> */}
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  return (
    <PDFViewer>
      <PDF />
    </PDFViewer>
  );
};

export default PDFView;
