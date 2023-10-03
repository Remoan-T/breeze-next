import { testData } from "@/components/datadisplay/data";
import React from "react";
import {
  Document,
  Page,
  View,
  Text,
  PDFViewer,
  Image,
  Font,
  Link,
} from "@react-pdf/renderer";
import { styles } from "@/components/datadisplay/styles/pdfStyles";

const MyPDF = () => {
  Font.register({ family: "neutra", src: "/assets/neutra-text.otf" });
  Font.register({ family: "neutrabold", src: "/assets/NeutraDisp-Bold.otf" });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.backgroundLayer} fixed>
          <Image src="./Rectangback.png" style={styles.backgroundImage} />
        </View>

        <View style={styles.contentLayer} fixed>
          <Text style={styles.logo}>ASTUDIO</Text>
        </View>
        <View style={styles.contentLayer} fixed>
          <Image style={styles.logo1} src="/assets/logo.png" />
        </View>

        <View style={styles.contentLayer} fixed>
          <Image style={styles.sticks} src="/assets/sticks.png" />
        </View>

        <View fixed>
          <Text style={styles.quot}>QUOTATION</Text>
        </View>
        <View style={styles.grid1} fixed>
          <Text
            style={{ position: "relative", marginLeft: "20px", width: "200px" }}
          >
            COMPANY NAME
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "180px",
              width: "200px",
            }}
          >
            CONTACT NAME
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "320px",
              width: "200px",
            }}
          >
            CONTACT EMAIL
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "500px",
              width: "200px",
            }}
          >
            DATE
          </Text>
        </View>
        <View style={styles.grid2} fixed>
          <Text
            style={{
              position: "relative",
              marginLeft: "22px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            Al Yasmina Academy Abu Dhabi
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "185px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            Stephanie Bazzi
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "320px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            gmmarketing@gulfmode.ae
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "502px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            2023-08-02
          </Text>
        </View>
        <View style={styles.grid3} fixed>
          <Text
            style={{ position: "relative", marginLeft: "20px", width: "200px" }}
          >
            QUOTE NO:
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "150px",
              width: "200px",
            }}
          >
            PROJECT TITLE
          </Text>
        </View>
        <View style={styles.grid4} fixed>
          <Text
            style={{
              position: "relative",
              marginLeft: "22px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            ASQ-10
          </Text>
          <Text
            style={{
              position: "relative",
              marginLeft: "150px",
              fontSize: "10px",
              width: "200px",
            }}
          >
            Test Quote
          </Text>
        </View>
        <View style={styles.grid3} fixed>
          <Text
            style={{
              position: "relative",
              marginLeft: "20px",
              width: "200px",
              top: "50rem",
            }}
          >
            PROJECT DELIVERABLES
          </Text>
        </View>
        <View style={styles.grid4} fixed>
          <Text
            style={{
              position: "relative",
              marginLeft: "22px",
              fontSize: "10px",
              width: "220px",
              top: "50rem",
            }}
          >
            Planning and execution plan for Main Campaign Video Creative
            development for 1x 45 Sec Main Campaign Video Creative development
            of Campaign photography
          </Text>
        </View>
        <View style={styles.grid6}>
          <Text
            style={{ position: "absolute", marginLeft: "50px", width: "200px" }}
          >
            DESCRIPTION
          </Text>
          <Text
            style={{
              position: "absolute",
              marginLeft: "370px",
              width: "200px",
            }}
          >
            UNITS
          </Text>
          <Text
            style={{
              position: "absolute",
              marginLeft: "430px",
              width: "200px",
            }}
          >
            UNIT PRICE
          </Text>
          <Text
            style={{
              position: "absolute",
              marginLeft: "493px",
              width: "200px",
            }}
          >
            AMOUNT AED
          </Text>
        </View>
        <View style={styles.horizontalLine1} />
        <View style={styles.grid5}>
          {testData.map((product) => (
            <>
              <Text
                style={{
                  position: "relative",
                  fontSize: "10px",
                  marginLeft: "50px",
                  width: "200px",
                  top: "170rem",
                  paddingTop: "0px",
                }}
              >
                {product.DESCRIPTION}
              </Text>
              <Text
                style={{
                  marginLeft: "360px",
                  top: "150rem",
                  width: "42px",
                  textAlign: "center",
                }}
              >
                {product.UNITS}
              </Text>
              <Text
                style={{
                  marginLeft: "435px",
                  top: "138.3rem",
                  width: "42px",
                  textAlign: "center",
                }}
              >
                {product.UNIT_PRICE}
              </Text>
              <Text
                style={{
                  marginLeft: "500px",
                  top: "128.3rem",
                  width: "42px",
                  textAlign: "center",
                }}
              >
                {product.AMOUNT_AED}
              </Text>
              <View style={styles.horizontalLine} />{" "}
            </>
          ))}

          <View style={{ fontFamily: "neutrabold", textAlign: "center" }}>
            <Text
              style={{
                position: "relative",
                marginLeft: "380px",
                top: "150rem",
                width: "100px",
              }}
            >
              SUB TOTAL AED
            </Text>
            <Text
              style={{
                position: "relative",
                marginLeft: "500px",
                top: "138.5rem",
                width: "42px",
              }}
            >
              4500
            </Text>
            <View style={styles.horizontalLine2} />
            <Text
              style={{
                position: "relative",
                marginLeft: "400px",
                top: "150rem",
                width: "100px",
              }}
            >
              VAT 5%
            </Text>
            <Text
              style={{
                position: "relative",
                marginLeft: "500px",
                top: "138.5rem",
                width: "42px",
              }}
            >
              1500
            </Text>
            <View style={styles.horizontalLine2} />
            <Text
              style={{
                position: "relative",
                marginLeft: "400px",
                top: "150rem",
                width: "100px",
              }}
            >
              TOTAL AED
            </Text>
            <Text
              style={{
                position: "relative",
                marginLeft: "500px",
                top: "138.5rem",
                width: "42px",
              }}
            >
              1000
            </Text>
            <View style={styles.horizontalLine4} />
          </View>
        </View>

        <View style={styles.footer} fixed>
          <View style={styles.horizontalLine5} />
          <Text style={{ width: "580px", marginLeft: "40px", bottom: "80rem" }}>
            Client’s approval: I hereby confirm that I accept the above
            quotation and that I have read, understood and accept the terms and
            conditions.
          </Text>
          <View style={styles.grid8}>
            <Text
              style={{
                position: "absolute",
                marginLeft: "70px",
                width: "200px",
              }}
            >
              Approved by (Name): ________________
            </Text>
            <Text
              style={{
                position: "absolute",
                marginLeft: "270px",
                width: "200px",
              }}
            >
              Signature: ________________
            </Text>
            <Text
              style={{
                position: "absolute",
                marginLeft: "460px",
                width: "200px",
              }}
            >
              Stamp: ________________
            </Text>
          </View>
          <View style={styles.grid8}>
            <Text style={{ marginLeft: "115px", top: "42rem" }}>
              {" "}
              Beneficiary: Araman Advertising DMCC, Bank: ADCB, Branch: Karama,
              Dubai, SWIFT: ADCBAEAA,
            </Text>
            <Text style={{ marginLeft: "75px", top: "50rem" }}>
              {" "}
              IBAN-AED: AE610030010137826124001, IBAN-GBP:
              AE110030010137826348001, IBAN-USD: AE430030010137826193001.
            </Text>
            <Text style={{ marginLeft: "55px", top: "60rem" }}>
              {" "}
              Company Registration No: JLT6229. Registered Office: Dubai, PO
              Box. 212803, United Arab Emirates | TRN: 100374728200003
            </Text>
          </View>
          <View style={styles.horizontalLine6} />
          <View style={styles.grid9}>
            <Text
              style={{
                position: "absolute",
                marginLeft: "45px",
                width: "200px",
              }}
            >
              connect@astudio.ae
            </Text>
            <Link
              style={{
                position: "absolute",
                marginLeft: "270px",
                width: "200px",
              }}
            >
              www.astudio.ae
            </Link>
            <Text
              style={{
                position: "absolute",
                marginLeft: "500",
                width: "200px",
              }}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </View>
        </View>
      </Page>

      <Page size="A4" style={styles.page}>
        <View style={styles.backgroundLayer} fixed>
          <Image src="./Rectangback.png" style={styles.backgroundImage} />
        </View>
        <View style={styles.contentLayer} fixed>
          <Text style={styles.logo}>ASTUDIO</Text>
        </View>

        <View style={styles.contentLayer} fixed>
          <Image style={styles.logo1} src="/assets/logo.png" />
        </View>

        <View style={styles.contentLayer} fixed>
          <Image style={styles.sticks} src="/assets/sticks.png" />
        </View>
        <View fixed>
          <Text style={styles.quot}>QUOTATION</Text>
        </View>

        <View style={styles.grid1} fixed>
          <Text
            style={{
              position: "relative",
              marginLeft: "20px",
              width: "200px",
              fontFamily: "neutrabold",
            }}
          >
            TERMS & CONDITIONS
          </Text>
        </View>
        <View style={styles.grid7} fixed>
          <Text
            style={{ position: "relative", marginLeft: "20px", width: "550px" }}
          >
            T.O.P.: 50% downpayment and 50% final payment once the preview is
            approved before delivery of final high resolution assets (VAT and
            tax are excluded).
            {"\n"}
            The quotation is based on the brief supplied, any changes will occur
            at the extra appropriate cost.
            {"\n"}
            Payment delay will be charged at 5% of the total quote per month,
            calculated per day.
            {"\n"}A maximum of 3 revisions to be submitted. Any major change or
            new brief needs to be instructed before revision 2. If major changes
            or directions are requested after revision 2 submission, extra hours
            fees will be applicable.
            {"\n"}
            Extra rush service might be applicable if done during the weekend.
            {"\n"}
            Usage rights are strict as per the usage mentioned in the
            agreements.
            {"\n"}
            Copyright usage will be transferred when full payment is
            transferred.
            {"\n"}
            Agency to send a final layout for designer's portfolio inclusion.
            {"\n"}
            Raw files will be archived up to one month from the handover date
            and high res for up to three months after which the files will be
            deleted unless otherwise agreed.
            {"\n"}
            This quotation is valid for 30 days from the date of quote.
          </Text>
        </View>
        <View style={styles.footer} fixed>
          <View style={styles.horizontalLine5} />
          <Text style={{ width: "580px", marginLeft: "40px", bottom: "80rem" }}>
            Client’s approval: I hereby confirm that I accept the above
            quotation and that I have read, understood and accept the terms and
            conditions.
          </Text>
          <View style={styles.grid8}>
            <Text
              style={{
                position: "absolute",
                marginLeft: "70px",
                width: "200px",
              }}
            >
              Approved by (Name): ________________
            </Text>
            <Text
              style={{
                position: "absolute",
                marginLeft: "270px",
                width: "200px",
              }}
            >
              Signature: ________________
            </Text>
            <Text
              style={{
                position: "absolute",
                marginLeft: "460px",
                width: "200px",
              }}
            >
              Stamp: ________________
            </Text>
          </View>
          <View style={styles.grid8}>
            <Text style={{ marginLeft: "115px", top: "42rem" }}>
              {" "}
              Beneficiary: Araman Advertising DMCC, Bank: ADCB, Branch: Karama,
              Dubai, SWIFT: ADCBAEAA,
            </Text>
            <Text style={{ marginLeft: "75px", top: "50rem" }}>
              {" "}
              IBAN-AED: AE610030010137826124001, IBAN-GBP:
              AE110030010137826348001, IBAN-USD: AE430030010137826193001.
            </Text>
            <Text style={{ marginLeft: "55px", top: "60rem" }}>
              {" "}
              Company Registration No: JLT6229. Registered Office: Dubai, PO
              Box. 212803, United Arab Emirates | TRN: 100374728200003
            </Text>
          </View>
          <View style={styles.horizontalLine6} />
          <View style={styles.grid9}>
            <Text
              style={{
                position: "absolute",
                marginLeft: "45px",
                width: "200px",
              }}
            >
              connect@astudio.ae
            </Text>
            <Link
              style={{
                position: "absolute",
                marginLeft: "270px",
                width: "200px",
              }}
            >
              www.astudio.ae
            </Link>
            <Text
              style={{
                position: "absolute",
                marginLeft: "500",
                width: "200px",
              }}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
            />
          </View>
        </View>
      </Page>
    </Document>
  );
};

const PDFView = () => {
  return (
    <PDFViewer width="100%" height="768px">
      <MyPDF />
    </PDFViewer>
  );
};

export default PDFView;
