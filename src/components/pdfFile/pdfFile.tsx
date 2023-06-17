// import React from 'react';
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// const BORDER_COLOR = '#bfbfbf';
// const BORDER_STYLE = 'solid';
// const COL1_WIDTH = 10;
// const COLN_WIDTH = 100 - COL1_WIDTH * 4;
// const styles = StyleSheet.create({
//   body: {
//     padding: 10,
//   },
//   table: {
//     //display: "table",
//     width: 'auto',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderWidth: 1,
//     borderRightWidth: 0,
//     borderBottomWidth: 0,
//   },
//   tableRow: {
//     margin: 'auto',
//     flexDirection: 'row',
//   },
//   tableCol1Header: {
//     width: COL1_WIDTH + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//     margin: 'auto',
//   },
//   tableColHeader: {
//     width: COLN_WIDTH + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//     margin: 'auto',
//   },
//   tableColVendedor: {
//     width: 50 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableColCodigo: {
//     width: 20 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableColNome: {
//     width: 80 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableColContato: {
//     width: 50 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderBottomColor: '#000',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCol1: {
//     width: COL1_WIDTH + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//     margin: 'auto',
//   },
//   tableCol: {
//     width: COLN_WIDTH + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableColEmpty: {
//     width: 100 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCellEmpty: {
//     margin: 'auto',
//     fontSize: 12,
//     fontWeight: 500,
//   },
//   tableColFinal: {
//     width: 50 + '%',
//     borderStyle: BORDER_STYLE,
//     borderColor: BORDER_COLOR,
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderTopWidth: 0,
//   },
//   tableCellHeader: {
//     margin: 5,
//     fontSize: 12,
//     fontWeight: 500,
//   },
//   tableCell: {
//     margin: 5,
//     fontSize: 10,
//   },
// });

// export function MyDocument(props) {
//   var today = new Date();
//   var dd = String(today.getDate()).padStart(2, '0');
//   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//   var yyyy = today.getFullYear();

//   today = dd + '/' + mm + '/' + yyyy;

//   return (
//     <Document>
//       <Page style={styles.body}>
//         <View style={styles.table}>
//           <View style={styles.tableRow}>
//             <View style={styles.tableColVendedor}>
//               <Text style={styles.tableCellHeader}>
//                 Vendedor: Márcia & Angélica
//               </Text>
//             </View>
//             <View style={styles.tableColVendedor}>
//               <Text style={styles.tableCellHeader}>Data: {today}</Text>
//             </View>
//           </View>

//           <View style={styles.tableRow}>
//             <View style={styles.tableColCodigo}>
//               <Text style={styles.tableCellHeader}>
//                 Codigo: {props.data.codigo}
//               </Text>
//             </View>
//             <View style={styles.tableColNome}>
//               <Text style={styles.tableCellHeader}>
//                 Nome: {props.data.nome}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.tableRow}>
//             <View style={styles.tableColCodigo}>
//               <Text style={styles.tableCellHeader}>
//                 CP: {props.data.codigoPostal}
//               </Text>
//             </View>
//             <View style={styles.tableColNome}>
//               <Text style={styles.tableCellHeader}>
//                 Morada: {props.data.morada}, {props.data.numeroPorta},{' '}
//                 {props.data.localidade} - {props.data.concelho}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.tableRow}>
//             <View style={styles.tableColContato}>
//               <Text style={styles.tableCellHeader}>
//                 Contato: {props.data.contato}
//               </Text>
//             </View>
//             <View style={styles.tableColContato}>
//               <Text style={styles.tableCellHeader}>
//                 Contribuinte: {props.data.contribuinte}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.tableRow}>
//             <View style={styles.tableColEmpty}>
//               <Text style={styles.tableCellHeader}>
//                 E-mail: {props.data.email}
//               </Text>
//             </View>
//           </View>
//           <View style={styles.tableRow}>
//             <View style={styles.tableColEmpty}>
//               <Text style={styles.tableCellEmpty}>Orçamento</Text>
//             </View>
//           </View>
//           <View style={styles.tableRow}>
//             <View style={styles.tableCol1Header}>
//               <Text style={styles.tableCellHeader}>Qtd</Text>
//             </View>
//             <View style={styles.tableCol1Header}>
//               <Text style={styles.tableCellHeader}>Código</Text>
//             </View>
//             <View style={styles.tableColHeader}>
//               <Text style={styles.tableCellHeader}>Nome</Text>
//             </View>
//             <View style={styles.tableCol1Header}>
//               <Text style={styles.tableCellHeader}>Preço</Text>
//             </View>
//             <View style={styles.tableCol1Header}>
//               <Text style={styles.tableCellHeader}>Total</Text>
//             </View>
//           </View>

//           {props.data.products
//             .filter((data) => data.count !== '')
//             .map((product, i) => (
//               <View key={i} style={styles.tableRow}>
//                 <View style={styles.tableCol1}>
//                   <Text style={styles.tableCell}>{product.count}</Text>
//                 </View>
//                 <View style={styles.tableCol1}>
//                   <Text style={styles.tableCell}>{product.codigo}</Text>
//                 </View>
//                 <View style={styles.tableCol}>
//                   <Text style={styles.tableCell}>{product.nome}</Text>
//                 </View>
//                 <View style={styles.tableCol1}>
//                   <Text style={styles.tableCell}>
//                     {product.price.toFixed(2)}
//                   </Text>
//                 </View>
//                 <View style={styles.tableCol1}>
//                   <Text style={styles.tableCell}>
//                     {(product.count * product.price).toFixed(2)}
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           <View style={styles.tableRow}>
//             <View style={styles.tableColFinal}>
//               <Text style={styles.tableCell}>
//                 Total:{' '}
//                 {props.data.products.reduce(function (sum, i) {
//                   sum = Math.round((sum + i.count * i.price) * 100) / 100;
//                   return sum;
//                 }, 0)}{' '}
//                 €
//               </Text>
//             </View>
//             <View style={styles.tableColFinal}>
//               <Text style={styles.tableCell}>
//                 + Iva:{' '}
//                 {props.data.products.reduce(function (sum, i) {
//                   sum =
//                     Math.round((sum + i.count * (i.price * 1.23)) * 100) / 100;
//                   return sum;
//                 }, 0)}{' '}
//                 €
//               </Text>
//             </View>
//           </View>
//         </View>
//       </Page>
//     </Document>
//   );
// }
