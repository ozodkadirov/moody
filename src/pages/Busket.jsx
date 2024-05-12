import { Fragment } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/container";
import { Button, Col, Flex, Row, Select, Typography } from "antd";
import Img from "../components/image";
import Product from "./../images/product3-0.png"
import Title from "../components/Title";
import { IoMdClose } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import Input from "../components/Input";
import { MdOutlineEmail } from "react-icons/md";
import { default as Btn } from "../components/Button";
import AlsoBuy from "../components/Also-buy";
import { Busketitem } from "./Busketitem";
import { useCart } from "react-use-cart";
import { Helmet } from "react-helmet";

const Bag = () => {
    const { items, isEmpty, cartTotal } = useCart();

    const productItem = items.map((product, index) => {
        return <Fragment key={index}>
            <Busketitem
                image={product.image}
                size={product.size}
                title={product.title}
                colors={product.colors}
                id={product.id}
                price={product.price}
            />
        </Fragment>
    });
    return (
        <Fragment>
            <Helmet>
                <title>Moody - Busket</title>
            </Helmet>
            <Breadcrumb />

            <section className="Shopping-bag">
                <Container>
                    <Typography.Title level={2} className={"Shopping-bag__title"}>
                        Shopping bag
                    </Typography.Title>

                    <Row className={`Shopping-bag__row`} justify={"space-between"}>
                        <Col span={13} className={`Shopping-bag--bag`}>
                            {isEmpty ? <Title level={"h2"}>Is empty</Title> : productItem}
                        </Col>

                        <Col span={10} className={`Shopping-bag__order`}>
                            <form className={`Shopping-bag__form`}>
                                <label>
                                    <Title level={"h3"} className={`Shopping-bag__form-label__title`}>
                                        Add A DISCOUNT CODE
                                    </Title>
                                    <Flex>
                                        <Input type={"email"} placeholder={`Enter your e-mail address`}
                                            className={`Shopping-bag__form-input`} />
                                        <Btn type={"submit"} primary className={`Shopping-bag__form-button`}>
                                            ADD
                                        </Btn>
                                    </Flex>
                                </label>

                                <label>
                                    <Title level={"h3"} className={`Shopping-bag__form-label__title`}>
                                        Log in to use your member offers.
                                    </Title>
                                    <Btn secondary className={`Shopping-bag__form-button--white`}>LOG IN</Btn>
                                </label>

                                <ul className={`list-none Shopping-bag__form-list`}>
                                    <li className={`Shopping-bag__form-list__item`}>
                                        <Flex justify={"space-between"}>
                                            <Title bodyText={"p"}>
                                                Order value
                                            </Title>
                                            <Title bodyText={"p"}>
                                               {cartTotal}$
                                            </Title>
                                        </Flex>
                                    </li>

                                    <li className={`Shopping-bag__form-list__item`}>
                                        <Flex justify={"space-between"}>
                                            <Title bodyText={"p"}>
                                                Shipping:
                                            </Title>
                                            <Title bodyText={"p"}>
                                                0.00$
                                            </Title>
                                        </Flex>
                                    </li>

                                    <li className={`Shopping-bag__form-list__item`}>
                                        <Flex justify={"space-between"}>
                                            <Title bodyText={"p"}>
                                                Total
                                            </Title>
                                            <Title bodyText={"p"}>
                                                {cartTotal}$
                                            </Title>
                                        </Flex>
                                    </li>
                                </ul>

                                <Btn type={"submit"} primary className={`Shopping-bag__form-button--primary`}>Continue to checkout</Btn>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <AlsoBuy />
        </Fragment>
    )
}

export default Bag;