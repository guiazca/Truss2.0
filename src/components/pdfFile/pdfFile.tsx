import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { pdfFileStyles } from './pdfFile.styles';
import { IClient } from '../../types/client.type';
import { IProduct } from '../../types/product.type';

export interface IPDFFile {
  client: IClient;
  products: IProduct[];
  representante: string;
}

export const PDFFile: React.FC<IPDFFile> = ({
  client,
  products,
  representante,
}) => {
  const today: Date = new Date();
  const dd: string = String(today.getDate()).padStart(2, '0');
  const mm: string = String(today.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
  const yyyy: number = today.getFullYear();

  const formattedDate: string = `${dd}/${mm}/${yyyy}`;

  return (
    <Document>
      <Page style={pdfFileStyles.body}>
        <View style={pdfFileStyles.table}>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColVendedor}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Representante: {representante}
              </Text>
            </View>
            <View style={pdfFileStyles.tableColVendedor}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Data: {formattedDate}
              </Text>
            </View>
          </View>

          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColCodigo}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Codigo: {client.codigo}
              </Text>
            </View>
            <View style={pdfFileStyles.tableColNome}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Nome: {client.nome}
              </Text>
            </View>
          </View>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColCodigo}>
              <Text style={pdfFileStyles.tableCellHeader}>
                CP: {client.codigoPostal}
              </Text>
            </View>
            <View style={pdfFileStyles.tableColNome}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Morada: {client.morada}, {client.numeroDaPorta},{' '}
                {client.localidade} - {client.concelho}
              </Text>
            </View>
          </View>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColContato}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Contato: {client.contato}
              </Text>
            </View>
            <View style={pdfFileStyles.tableColContato}>
              <Text style={pdfFileStyles.tableCellHeader}>
                Contribuinte: {client.contribuinte}
              </Text>
            </View>
          </View>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColEmpty}>
              <Text style={pdfFileStyles.tableCellHeader}>
                E-mail: {client.email}
              </Text>
            </View>
          </View>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColEmpty}>
              <Text style={pdfFileStyles.tableCellEmpty}>Orçamento</Text>
            </View>
          </View>
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableCol1Header}>
              <Text style={pdfFileStyles.tableCellHeader}>Qtd</Text>
            </View>
            <View style={pdfFileStyles.tableCol1Header}>
              <Text style={pdfFileStyles.tableCellHeader}>Código</Text>
            </View>
            <View style={pdfFileStyles.tableColHeader}>
              <Text style={pdfFileStyles.tableCellHeader}>Nome</Text>
            </View>
            <View style={pdfFileStyles.tableCol1Header}>
              <Text style={pdfFileStyles.tableCellHeader}>Preço</Text>
            </View>
            <View style={pdfFileStyles.tableCol1Header}>
              <Text style={pdfFileStyles.tableCellHeader}>Total</Text>
            </View>
          </View>

          {products
            .filter((data) => data.count !== undefined)
            .map((product, i) => (
              <View key={i} style={pdfFileStyles.tableRow}>
                <View style={pdfFileStyles.tableCol1}>
                  <Text style={pdfFileStyles.tableCell}>{product.count}</Text>
                </View>
                <View style={pdfFileStyles.tableCol1}>
                  <Text style={pdfFileStyles.tableCell}>{product.codigo}</Text>
                </View>
                <View style={pdfFileStyles.tableCol}>
                  <Text style={pdfFileStyles.tableCell}>{product.nome}</Text>
                </View>
                <View style={pdfFileStyles.tableCol1}>
                  <Text style={pdfFileStyles.tableCell}>
                    {product.price.toFixed(2)}
                  </Text>
                </View>
                <View style={pdfFileStyles.tableCol1}>
                  <Text style={pdfFileStyles.tableCell}>
                    {product.count &&
                      (product.count * product.price).toFixed(2)}
                  </Text>
                </View>
              </View>
            ))}
          <View style={pdfFileStyles.tableRow}>
            <View style={pdfFileStyles.tableColFinal}>
              <Text style={pdfFileStyles.tableCell}>
                Total:{' '}
                {products.reduce(function (sum, i) {
                  if (i.count)
                    sum = Math.round((sum + i.count * i.price) * 100) / 100;
                  return sum;
                }, 0)}{' '}
                €
              </Text>
            </View>
            <View style={pdfFileStyles.tableColFinal}>
              <Text style={pdfFileStyles.tableCell}>
                + Iva:{' '}
                {products.reduce(function (sum, i) {
                  if (i.count)
                    sum =
                      Math.round((sum + i.count * (i.price * 1.23)) * 100) /
                      100;
                  return sum;
                }, 0)}{' '}
                €
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
