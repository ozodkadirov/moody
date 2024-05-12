import { Fragment, useContext, useEffect, useState } from "react";
import Container from "../container";
import "./also-buy.scss"
import Cart from "../Cart";
import Product from "../../images/product3-0.png"
import { Flex } from "antd";
import Img from "../image";
import ArrowLeft from "../../images/arrow-left.svg"
import ArrowRight from "../../images/arrow-right.svg"
import Title from "../Title";
import { Context } from "../../context";

const AlsoBuy = ({ className }) => {
    className = `Also-buy ${className}`;

    const { Data } = useContext(Context);
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        let randomProducts = [];

        for (let index = 0; index < Data?.length; index++) {
            const random = Math.floor(Math.random() * (Data?.length - 1));

            randomProducts.push(Data[random]);
        }

        const filtered = randomProducts.filter((item, index) => {
            return randomProducts[index].id === item.id;
        });

        setProducts(() => filtered.length ? filtered : []);
    }, [Data.length]);

    const product = Products.slice(0, 4).map((item, index) => {
        return (
            <Fragment key={index}>
                <Cart
                    image={item.image}
                    title={item.title}
                    type={"product"} vertical
                    colors={item.colors}
                    href={`/catalog/product/${item.id}`}
                    price={item.price}
                />
            </Fragment>
        )
    })


    return (
        <Fragment>
            <section className={className}>
                <Container className={`Also-buy__container`}>
                    <Title level={"h2"}>Also You May Like</Title>
                    <Flex gap={24} align={"center"} >
                        {product}
                    </Flex>

                    <Flex className="Also-buy__arrows" justify={"space-between"}>
                        <Img src={ArrowLeft} alt={`Arrow`} />
                        <Img src={ArrowRight} alt={`Arrow`} />
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )
}

export default AlsoBuy;