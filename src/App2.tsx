import React, { FC, useEffect, useRef } from 'react';
import type { ApOpPropria, InfoContrib } from './types';
import { Page, Text, View, Document, StyleSheet, Font, pdf, PDFViewer } from '@react-pdf/renderer';

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
   "recExtraAp": 0,
   "nome": "Sociedade Fogás Ltda.",
   "cnpj": "04.563.672/0001-66",
   "IE": "04.103.434-1",
   "perEscrit": "01/03/2023 a 31/03/2023",
   "perAp": "01/03/2023 a 31/03/2023"
}
`;

const apuracao: ApOpPropria & InfoContrib = JSON.parse(json);

const styles = StyleSheet.create({

   page: {
      flexDirection: 'column',
      marginTop: 30,
   },
   headerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 10,

   },
   header1: {
      fontFamily: 'Helvetica',
      fontSize: 12,
   },
   header2: {
      fontFamily: 'Helvetica-Oblique',
      fontSize: 12,
   },

   line: {
      marginHorizontal: 30,
      borderTop: '1px solid #EEE',
   },

   dadoContribContainer: {
      marginBottom: 10,
      paddingHorizontal: 10,
   },
   dadoContribLinha: {
      flexDirection: 'row',
      marginHorizontal: 30,
      marginTop: 10
   },
   dadoContribChave: {
      fontSize: 11,
      fontFamily: 'Helvetica-Bold'
      // fontWeight: 'extrabold',
      // textAlign: 'center',
   },
   dadoContribValor: {
      fontSize: 11,
   },
   dadoContribInscrContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   },

   headerTitle: {
      flexDirection: 'row',
   },
   tableContainer: {
      marginTop: 10
   },
   descrição: {
      fontSize: 11,
      fontFamily: 'Helvetica-Bold',
      width: '50%',
      backgroundColor: '#eee',
      textAlign: 'left',
      paddingVertical: 3,
      paddingLeft: 160
   },
   valor: {
      fontSize: 11,
      fontFamily: 'Helvetica-Bold',
      width: '50%',
      backgroundColor: '#eee',
      textAlign: 'right',
      paddingVertical: 3,
      paddingRight: 10
   },
   itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30
   },
   item: {
      fontSize: 10,
      // marginHorizontal: 30,
      marginTop: 3,
      paddingVertical: 3,
      paddingHorizontal: 10
   },

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

   // dadoContribLinha: {
   //    flexDirection: 'row',
   //    marginHorizontal: 30,
   //    // marginTop: 10,
   //    borderTop: '1px solid #EEE',
   //    paddingVertical: 10,
   // },

   return (
      <div>
         <PDFViewer width="1000" height="1000">
            <Document>
               <Page size="A4" style={styles.page}>
                  <View style={styles.line} />
                  <View style={styles.headerContainer}>
                     <Text style={styles.header1}>REGISTROS FISCAIS DA APURAÇÃO DO ICMS </Text>
                     <Text style={{ ...styles.header2 }}>- OPERAÇÕES PRÓPRIAS</Text>
                  </View>
                  <View style={styles.line} />
                  <View style={styles.dadoContribContainer}>
                     <View style={styles.dadoContribLinha}>
                        <Text style={styles.dadoContribChave}>CONTRIBUINTE: </Text>
                        <Text style={styles.dadoContribValor}>{apuracao.nome}</Text>
                     </View>
                     <View style={styles.dadoContribInscrContainer}>
                        <View style={styles.dadoContribLinha}>
                           <Text style={styles.dadoContribChave}>CNPJ/CPF: </Text>
                           <Text style={styles.dadoContribValor}>{apuracao.cnpj}</Text>
                        </View>
                        <View style={styles.dadoContribLinha}>
                           <Text style={styles.dadoContribChave}>INSCRIÇÃO ESTADUAL: </Text>
                           <Text style={styles.dadoContribValor}>{apuracao.IE}</Text>
                        </View>
                     </View>
                     <View style={styles.dadoContribLinha}>
                        <Text style={styles.dadoContribChave}>PERÍODO DA ESCRITURAÇÃO: </Text>
                        <Text style={styles.dadoContribValor}>{apuracao.perEscrit}</Text>
                     </View>
                     <View style={styles.dadoContribLinha}>
                        <Text style={styles.dadoContribChave}>PERÍODO DA APURAÇÃO: </Text>
                        <Text style={styles.dadoContribValor}>{apuracao.perAp}</Text>
                     </View>
                  </View>
                  {/* <View style={styles.line} /> */}
                  <View style={styles.tableContainer}>
                     <View style={styles.itemContainer}>
                        <Text style={styles.descrição}>Descrição</Text>
                        <Text style={styles.valor}>Valor (R$)</Text>
                     </View>
                     {/* {Object.entries(apuracao).map(([key, val], i) =>
                        <View key={i} style={{ ...styles.itemContainer, ...(i % 2 === 1) && { backgroundColor: '#f5f5f5' } }}>
                           <Text style={styles.item}>{key}</Text>
                           <Text style={styles.item}>{`${typeof val === 'number' ? formatNumber(val) : val}`}</Text>
                        </View>
                     )} */}
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>SAÍDAS E PRESTAÇÕES COM DÉBITO DO IMPOSTO</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.saídas)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR TOTAL DOS AJUSTES A DÉBITO (decorrentes do documento fiscal)</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.ajDocFiscal)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DOS AJUSTES A DÉBITO DO IMPOSTO</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.aj)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR TOTAL DOS ESTORNOS DE CRÉDITOS </Text>
                        <Text style={styles.item}>{formatNumber(apuracao.estCred)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DOS CRÉDITOS POR ENTRADAS E AQUISIÇÕES COM CRÉDITO DO IMPOSTO</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.credAq)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR TOTAL DOS AJUSTES A CRÉDITO (decorrentes do documento fiscal) </Text>
                        <Text style={styles.item}>{formatNumber(apuracao.ajCredDocFiscal)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DOS AJUSTES A CRÉDITO DO IMPOSTO</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.ajCred)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR TOTAL DOS ESTORNOS DE DÉBITOS</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.estDeb)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DO SALDO CREDOR DO PERÍODO ANTERIOR</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.saldoAcc)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR DO SALDO DEVEDOR</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.saldoDev)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DAS DEDUÇÕES</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.deducoes)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALOR TOTAL DO ICMS A RECOLHER</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.icmsARec)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer }}>
                        <Text style={styles.item}>VALOR TOTAL DO SALDO CREDOR A TRANSPORTAR PARA O PERÍODO SEGUINTE </Text>
                        <Text style={styles.item}>{formatNumber(apuracao.saldoCredorProxPer)}</Text>
                     </View>
                     <View style={{ ...styles.itemContainer, backgroundColor: '#f5f5f5' }}>
                        <Text style={styles.item}>VALORES RECOLHIDOS OU A RECOLHER, EXTRA-APURAÇÃO</Text>
                        <Text style={styles.item}>{formatNumber(apuracao.recExtraAp)}</Text>
                     </View>
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
         <View style={styles.header1}>
            <Text>REGISTROS FISCAIS DA APURAÇÃO DO ICMS - OPERAÇÕES PRÓPRIAS</Text>
         </View>
      </Page>
   </Document>
);


function formatNumber(n: number) {
   return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}