import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IClient } from '../../types/client.type';
import { initialClient } from '../../constants/initialState';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { IProduct } from '../../types/product.type';
import { Products } from '../../constants/productsList';
import { ProductForm } from '../productForm/ProductForm';
import { Total } from '../productForm/TotalCalc';
import { TotalComIva } from '../productForm/TotalComIva';
import axios from 'axios';
import { PDFFile } from '../pdfFile/pdfFile';
import styled from 'styled-components';

export const Form: React.FC = () => {
  const [client, setClient] = useState<IClient>(initialClient);
  const [products, setProducts] = useState<IProduct[]>(Products);
  const [representante, setRepresentante] = useState<string>('Marcia Brasil');

  const handleChange = (event: any) => {
    setRepresentante(event.target.value);
  };

  const representantes = [
    'Márcia Brasil',
    'Alexsandro Viana',
    'Ana Almeida',
    'Cesar',
    'Edilene',
    'Elen Oliveira',
    'Paula Paulino',
    'Priscila Lopes',
  ];

  const onBlurCep = (codigoPostal: string) => {
    axios
      .get(
        `https://api.duminio.com/ptcp/v2/ptapi6155f9466897a6.83931889/${codigoPostal}`
      )
      .then((res) => {
        const cep = res.data;
        if (cep[0]) {
          setClient({
            ...initialClient,
            morada: cep[0].Morada,
            localidade: cep[0].Localidade,
            concelho: cep[0].Concelho,
            codigoPostal: cep[0].CodigoPostal.replace('-', ''),
          });
        }
      });
  };

  return (
    <Container>
      <div>
        <label htmlFor="vendedor">Vendedor:</label>
        <select id="vendedor" value={representante} onChange={handleChange}>
          {representantes.map((nome, index) => (
            <option key={index} value={nome}>
              {nome}
            </option>
          ))}
        </select>
      </div>
      <form className="Produto">
        <Row>
          <Col sm="8">
            <label htmlFor="codigo">Código:</label>
            <input
              className="codigo"
              type="number"
              pattern="\d*"
              name="codigo"
              placeholder="codigo"
              value={client.codigo}
              onChange={(evt) =>
                setClient({ ...client, codigo: evt.target.value })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col sm="8">
            <label htmlFor="nome">Nome:</label>
            <input
              className="nome"
              type="text"
              name="nome"
              placeholder="Nome"
              value={client.nome}
              onChange={(evt) =>
                setClient({ ...client, nome: evt.target.value })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="codigoPostal" htmlFor="codigoPostal">
              Código Postal:
            </label>
            <input
              className="codigoPostal"
              type="number"
              pattern="\d*"
              name="codigoPostal"
              placeholder="Código Postal"
              value={client.codigoPostal}
              onChange={(evt) =>
                setClient({ ...client, codigoPostal: evt.target.value })
              }
              onBlur={(evt) => onBlurCep(evt.target.value)}
            />
          </Col>
          <Col>
            <label htmlFor="morada">Morada:</label>
            <input
              className="morada"
              name="morada"
              type="text"
              placeholder="morada"
              value={client.morada}
              onChange={(evt) =>
                setClient({ ...client, morada: evt.target.value })
              }
            />
          </Col>
          <Col>
            <label htmlFor="numeroPorta">numero da porta:</label>
            <input
              className="numeroPorta"
              name="numeroPorta"
              type="text"
              placeholder="numeroPorta"
              value={client.numeroDaPorta}
              onChange={(evt) =>
                setClient({ ...client, numeroDaPorta: evt.target.value })
              }
            />
          </Col>
          <Col>
            <input
              className="localidade"
              name="localidade"
              type="hidden"
              placeholder="localidade"
              value={client.localidade}
              onChange={(evt) =>
                setClient({ ...client, localidade: evt.target.value })
              }
            />
          </Col>
          <Col>
            <input
              className="concelho"
              name="concelho"
              type="hidden"
              placeholder="concelho"
              value={client.concelho}
              onChange={(evt) =>
                setClient({ ...client, concelho: evt.target.value })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="contribuinte" htmlFor="contribuinte">
              Contribuinte:
            </label>
            <input
              className="contribuinte"
              name="contribuinte"
              type="number"
              pattern="\d*"
              placeholder="contribuinte"
              value={client.contribuinte}
              onChange={(evt) =>
                setClient({ ...client, contribuinte: evt.target.value })
              }
            />
          </Col>
          <Col>
            <label className="contato" htmlFor="contato">
              Contato:
            </label>
            <input
              className="contato"
              name="contato"
              type="number"
              pattern="\d*"
              placeholder="contato"
              value={client.contato}
              onChange={(evt) =>
                setClient({ ...client, contato: evt.target.value })
              }
            />
          </Col>
          <Col>
            <label className="email" htmlFor="email">
              email:
            </label>
            <input
              className="email"
              name="email"
              type="email"
              placeholder="email"
              value={client.email}
              onChange={(evt) =>
                setClient({ ...client, email: evt.target.value })
              }
            />
          </Col>
        </Row>
      </form>
      <ProductForm products={products} setProducts={setProducts} />
      <ContainerBar>
        <Total products={products} />
        <TotalComIva products={products} />
        <PDFDownloadLink
          document={
            <PDFFile
              products={products}
              client={client}
              representante={representante}
            />
          }
          fileName={`Orçamento Nome-${client.nome} Código-${client.codigo}.pdf`}
          style={{
            textDecoration: 'none',
            padding: '10px',
            color: '#4a4a4a',
            backgroundColor: '#f2f2f2',
            border: '1px solid #4a4a4a',
          }}>
          {({ loading }) => (loading ? 'Loading document...' : 'Download Pdf')}
        </PDFDownloadLink>
      </ContainerBar>
    </Container>
  );
};

const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
