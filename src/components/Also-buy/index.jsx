import {Fragment} from "react";
import Container from "../container";
import "./also-buy.scss"
import Cart from "../Cart";
import Product from "../../images/product3-0.png"
import {Flex} from "antd";
import Img from "../image";
import ArrowLeft from "../../images/arrow-left.svg"
import ArrowRight from "../../images/arrow-right.svg"
import Title from "../Title";

const AlsoBuy = ({className}) => {
    className = `Also-buy ${className}`;

  return(
      <Fragment>
          <section className={className}>
              <Container className={`Also-buy__container`}>
                  <Title level={"h2"}>Also You May Like</Title>
                  <Flex gap={24} align={"center"} >
                      <Cart image={Product} title={"Product title"} type={"product"} vertical colors={["white", "black"]} href={"#"} price={30} />
                      <Cart image={Product} title={"Product title"} type={"product"} vertical colors={["white", "black"]} href={"#"} price={30} />
                      <Cart image={Product} title={"Product title"} type={"product"} vertical colors={["white", "black"]} href={"#"} price={30} />
                      <Cart image={Product} title={"Product title"} type={"product"} vertical colors={["white", "black"]} href={"#"} price={30} />
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