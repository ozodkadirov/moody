import {Fragment} from "react";
import Container from "../components/container";
import  "./layout.scss";
import Title from "../components/Title";
import {Button, Col, Flex, Row, Typography} from "antd";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import {Link} from "react-router-dom";
const Footer = () => {
  return(
      <Fragment>
          <footer className="Footer">
            <Container>
                <Row className="Footer__widgets" justify={"space-between"}>
                    <Col span={6} className={`Footer__widget Footer__widget--other`}>
                        <Title level={"h2"} className={`Footer__title`}>
                            URBAN OUTFITTERS
                        </Title>

                        <Title bodyText={"p"} className={`Footer__widget-text`}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </Title>

                        <div className="Footer__widget-contact">
                            <Title level={"h3"}>121 king street, Melbourne 3000</Title>
                            <Title level={"h3"}>+61 3 8376 6284</Title>
                            <Title level={"h3"}>contact@urbanoutfitters.com</Title>
                        </div>

                        <Flex className="Footer__widget-links" justify={"space-between"}>
                            <Button className={`Footer__widget-button`} icon={<LiaFacebookF />} />
                            <Button className={`Footer__widget-button`} icon={<FaTwitter />} />
                            <Button className={`Footer__widget-button`} icon={<FaInstagram />} />
                            <Button className={`Footer__widget-button`} icon={<TfiYoutube />} />
                        </Flex>
                    </Col>

                    <Col span={4} className={`Footer__widget`}>
                        <Title level={"h3"}>SHOPPING</Title>

                        <ul className={`list-none Footer__widget-list`}>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Your cart</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Your orders</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Compared items</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Wishlist items</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Shipping detail </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col span={4} className={`Footer__widget`}>
                        <Title level={"h3"}>MORE LINK</Title>

                        <ul className={`list-none Footer__widget-list`}>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Blog</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Gift Center</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Buying Guides</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>New Arrivals</Link>
                            </li>
                            <li>
                                <Link to={"#"} className={"Footer__widget-link"}>Clearance</Link>
                            </li>
                        </ul>
                    </Col>

                    <Col span={8} className={`Footer__widget Footer__widget--blog`}>
                        <Title level={"h3"}>FROM THE BLOG</Title>

                        <div className="Footer__widget-blog__item">
                            <Flex className={`Footer__widget-blog__title`} gap={6} align={"end"}>
                                <Typography.Title level={3}>
                                    26
                                </Typography.Title>

                                <Title bodyText={"p"}>May</Title>
                            </Flex>

                            <Title bodyText={"p"} className={"Footer__widget-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Title>

                            <Title bodyText={"p"} className={`Footer__widget-text Footer__widget-blog__comment`}>
                                3 comments
                            </Title>
                        </div>

                        <div className="Footer__widget-blog__item">
                            <Flex className={`Footer__widget-blog__title`} gap={6} align={"end"}>
                                <Typography.Title level={3}>
                                    26
                                </Typography.Title>

                                <Title bodyText={"p"}>May</Title>
                            </Flex>

                            <Title bodyText={"p"} className={"Footer__widget-text"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Title>

                            <Title bodyText={"p"} className={`Footer__widget-text Footer__widget-blog__comment`}>
                                3 comments
                            </Title>
                        </div>
                    </Col>
                </Row>
            </Container>
              <Title bodyText={"p"} className={`Footer__copyright`}>Urban Outfitters &copy; – All rights
                  reserved </Title>
          </footer>
      </Fragment>
  )
}

export default Footer;