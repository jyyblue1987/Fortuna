import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Dashboard = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Dashboard" subtitle="clients" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <a className="m-0">Unreviewed(3)</a>
            <a style={{marginLeft: 10}}>Reviewed(1)</a>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    ID
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Document
                  </th>
                  <th scope="col" className="border-0">
                    Score
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2 Feb, 2020</td>
                  <td>Kerry</td>
                  <td>jyyblue1987@outlook.com</td>
                  <td>PDF</td>
                  <td>10</td>
                  <td>Review</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2 Feb, 2020</td>
                  <td>Kerry</td>
                  <td>smartsoft1987@gmail.com</td>
                  <td>Word</td>
                  <td>10</td>
                  <td>Unreviewed</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>2 Feb, 2020</td>
                  <td>Kerry</td>
                  <td>jyyblue1987@outlook.com</td>
                  <td>PowerPoint</td>
                  <td>10</td>
                  <td>Unreviewed</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2 Feb, 2020</td>
                  <td>Kerry</td>
                  <td>jyyblue1987@outlook.com</td>
                  <td>PDF</td>
                  <td>10</td>
                  <td>Unreviewed</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Dashboard;
