import React, { FC, useEffect, useRef } from 'react'
import type { ApOpPropria } from './types';
import { Page, Text, View, Document, StyleSheet, pdf, PDFViewer } from '@react-pdf/renderer';

const json = `
{
   "iniPerApur": "1970-01-01T00:00:09.999Z",
   "fimPerApur": "2022-04-30T04:00:00.000Z",
   "saídas": 772877.35,
   "ajDocFiscal": 0,
   "aj": 353002.45,
   "estCred": 5500.37,
   "credAq": 623432.86,
   "ajCredDocFiscal": 0,
   "ajCred": 295178.33,
   "estDeb": 0,
   "saldoAcc": 111960.06,
   "saldoDev": 100808.92,
   "deducoes": 0,
   "icmsARec": 100808.92,
   "saldoCredorProxPer": 0,
   "recExtraAp": 0
}
`;

const apuracao: ApOpPropria = JSON.parse(json);

const styles = StyleSheet.create({

   page: {
      flexDirection: 'column',
   },
   headerContainer: {
      margin: 10,
      padding: 10,
   },
   header: {
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center',
   }

});

type Props = {}

export const App2: FC<Props> = ({ }) => {

   const linkRef = useRef<HTMLAnchorElement>(null);

   // useEffect(() => {
   //    (async () => {
   //       const link = linkRef.current;
   //       if (!link) return;
   //       const blob = await pdf(MyDocument).toBlob();
   //       link.href = URL.createObjectURL(blob);
   //       link.download = 'a.pdf';
   //    })();
   // }, []);

   return (
      <div>
         <PDFViewer width="1000" height="1000">
            <Document>
               <Page size="A4" style={styles.page}>
                  <View style={styles.headerContainer}>
                     <Text style={styles.header}>REGISTROS FISCAIS DA APURAÇÃO DO ICMS - OPERAÇÕES PRÓPRIAS</Text>
                  </View>
               </Page>
            </Document>
         </PDFViewer>
         {/* <a ref={linkRef} className={`w-40 flex text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 focus:outline-none`}>
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span className='pl-2'>Baixar PDF</span>
         </a> */}
      </div>
   );
};

//application/pdf

const MyDocument = () => (
   <Document>
      <Page size="A4" style={styles.page}>
         <View style={styles.header}>
            <Text>REGISTROS FISCAIS DA APURAÇÃO DO ICMS - OPERAÇÕES PRÓPRIAS</Text>
         </View>
      </Page>
   </Document>
);
