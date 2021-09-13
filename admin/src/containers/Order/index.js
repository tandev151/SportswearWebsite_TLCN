import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import {
    Container,
    Row,
    Col,
    Button,
    Table,
    ButtonGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from "../../actions/constants";
import "./style.scss";


export default function Order() {
    const order = useSelector(state => state.order);
    const [paymentStatus, setPaymentStatus] = useState("");
    const [orderStatus, setOrderStatus] = useState("");

    // lay ra trang thai da confirm cuoi cung
    const getLastOrderStatus = (status) => {
        for (let i = status.length - 1; i >= 0; i--) {
            if (status[i].isCompleted) {
                return status[i].type;
            }
        }
        return null
    }

    // lay ra cac trang thai chua confirm 
    const getOrderStatusUncomfirmed = (status) => {
        for (let i = status.length - 1; i >= 0; i--) {
            if (status[i].isCompleted) {
                return status.slice(i + 1);
            }
        }
        return null;
    }
    const formatDate = (date) => {
        if (date) {
            const d = new Date(date);
            return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}h${d.getMinutes()}m`;
        }
        return "";
    };

    // tao ra array options de truyen vao Input Select
    const createOptionsOrderStatus = (status) => {
        status = getOrderStatusUncomfirmed(status);
        const options = [];
        status.map(option =>
            options.push({ name: option.type, value: option.type })
        )
        return options;
    }

    const renderTableOrder = (orders) => {
        return (
            <Table responsive="md">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>OrderId</th>
                        <th className="col-name-sort">OrderDate<UnfoldMoreIcon color="secondary" /></th>
                        <th>PaymentType</th>
                        <th>PaymentStatus</th>
                        <th>OrderStatus</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {orders.length > 0 ? orders.map((order, index) =>
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order._id}</td>
                            <td>{formatDate(order.createdAt)}</td>
                            <td>{order.paymentType}</td>
                            <td>
                                {order.paymentStatus}
                            </td>
                            <td>
                                <Input type="select"
                                    placeholder={getLastOrderStatus(order.orderStatus)}
                                    value={orderStatus}
                                    options={createOptionsOrderStatus(order.orderStatus)}
                                    onChange={(e) => setOrderStatus(e.target.value)}
                                />
                            </td>
                            <td>
                                <button>
                                    Confirm
                                </button>
                            </td>
                        </tr>
                    </tbody>
                )
                    : null}
            </Table>
        )
    }

    return (
        <Layout sidebar>
            <Container className="table-user">
                <Row>
                    <Col md={12}>
                        <div className="title">
                            <h3>Order</h3>
                            <Input
                                style={{ marginBottom: "-12px" }}
                                placeholder="Search by OrderId"
                                value="" />
                            <div>
                                <ButtonGroup size="sm" className="btn-group-payment-status">
                                    <DropdownButton
                                        className="dropdown-role" as={ButtonGroup}
                                        title={`PStatus: all`}
                                    // id="bg-nested-dropdown"
                                    // onSelect={(e) => setType(e)}
                                    >
                                        <Dropdown.Item eventKey="all">All</Dropdown.Item>
                                        <Dropdown.Item eventKey="pending">pending</Dropdown.Item>
                                        <Dropdown.Item eventKey="completed">completed</Dropdown.Item>
                                        <Dropdown.Item eventKey="cancelled">cancelled</Dropdown.Item>
                                        <Dropdown.Item eventKey="refund">refund</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                                <ButtonGroup size="sm" className="btn-group-order-status">
                                    <DropdownButton
                                        className="dropdown-role" as={ButtonGroup}
                                        title={`OrderStatus: all`}
                                    >
                                        <Dropdown.Item eventKey="all">all</Dropdown.Item>
                                        <Dropdown.Item eventKey="ordered">ordered</Dropdown.Item>
                                        <Dropdown.Item eventKey="packed">packed</Dropdown.Item>
                                        <Dropdown.Item eventKey="shipped">shipped</Dropdown.Item>
                                        <Dropdown.Item eventKey="shipped">delivered</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {renderTableOrder(order.orders)}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}
