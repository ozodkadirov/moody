import {Fragment} from "react";
import Container from "../components/container";
import {Flex} from "antd";
import Cart from "../components/Cart";
import Product from "../images/product2.png"
import Breadcrumb from "../components/Breadcrumb";

const Saved = () => {
  return(
      <Fragment>
          <Breadcrumb current={"Like more"} />
          <section className="Saved">
              <Container>
                  <Flex gap={25}>
                      <Cart image={Product} type={"product"} href={"/catalog/product/0"} vertical title={"Product title"} saved stars={3} price={30} />
                  </Flex>
              </Container>
          </section>
      </Fragment>
  )
}

export default Saved;