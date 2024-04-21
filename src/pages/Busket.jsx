import {Fragment} from "react";
import Breadcrumb from "../components/Breadcrumb";
import Container from "../components/container";
import {Button, Col, Flex, Row, Select, Typography} from "antd";
import Img from "../components/image";
import Product from "./../images/product3-0.png"
import Title from "../components/Title";
import { IoMdClose } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import Input from "../components/Input";
import {MdOutlineEmail} from "react-icons/md";
import {default as Btn} from "../components/Button";
import AlsoBuy from "../components/Also-buy";

const Bag = () => {
  return(
      <Fragment>
          <Breadcrumb />

          <section className="Shopping-bag">
              <Container>
                  <Typography.Title level={2} className={"Shopping-bag__title"}>
                      Shopping bag
                  </Typography.Title>

                  <Row className={`Shopping-bag__row`} justify={"space-between"}>
                      <Col span={13} className={`Shopping-bag--bag`}>
                        <Flex gap={18} className={`Shopping-bag__item`}>
                            <Img src={Product} alt={"Product"} className={`Shopping-bag__image`} />

                            <div className="Shopping-bag__item-content">
                                <Title bodyText={"p"} className={`Shopping-bag__item-title`}>
                                    Checked Duvet Cover Set
                                </Title>

                                <Title level={"h3"} className={`Shopping-bag__item-price`}>
                                    39.99 $
                                </Title>

                                <ol className={`list-none Shopping-bag__item-list`}>
                                    <li className={`Shopping-bag__item-list__item`}>
                                        Art. No.: 54637253
                                    </li>
                                    <li className={`Shopping-bag__item-list__item`}>
                                        Color: Mint
                                    </li>
                                    <li className={`Shopping-bag__item-list__item`}>
                                        Size: 21*45
                                    </li>
                                    <li className={`Shopping-bag__item-list__item`}>
                                        Total: 39.99
                                    </li>
                                </ol>

                                <Flex gap={6}>
                                    <Button icon={<IoHeartOutline />} />

                                    <Select
                                        defaultValue={"1"}
                                        options={[
                                            { value: 1, label: 1, disabled: true},
                                            { value: 2, label: 2 },
                                        ]}
                                    />
                                </Flex>

                                <Button icon={<IoMdClose />} className={`Shopping-bag__item-close`} />
                            </div>
                        </Flex>

                          <Flex gap={18} className={`Shopping-bag__item`}>
                              <Img src={Product} alt={"Product"} className={`Shopping-bag__image`} />

                              <div className="Shopping-bag__item-content">
                                  <Title bodyText={"p"} className={`Shopping-bag__item-title`}>
                                      Checked Duvet Cover Set
                                  </Title>

                                  <Title level={"h3"} className={`Shopping-bag__item-price`}>
                                      39.99 $
                                  </Title>

                                  <ol className={`list-none Shopping-bag__item-list`}>
                                      <li className={`Shopping-bag__item-list__item`}>
                                          Art. No.: 54637253
                                      </li>
                                      <li className={`Shopping-bag__item-list__item`}>
                                          Color: Mint
                                      </li>
                                      <li className={`Shopping-bag__item-list__item`}>
                                          Size: 21*45
                                      </li>
                                      <li className={`Shopping-bag__item-list__item`}>
                                          Total: 39.99
                                      </li>
                                  </ol>

                                  <Flex gap={6}>
                                      <Button icon={<IoHeartOutline />} />

                                      <Select
                                          defaultValue={"1"}
                                          options={[
                                              { value: 1, label: 1, disabled: true},
                                              { value: 2, label: 2 },
                                          ]}
                                      />
                                  </Flex>

                                  <Button icon={<IoMdClose />} className={`Shopping-bag__item-close`} />
                              </div>

                          </Flex>
                      </Col>

                      <Col span={10} className={`Shopping-bag__order`}>
                          <form className={`Shopping-bag__form`}>
                              <label>
                                  <Title level={"h3"} className={`Shopping-bag__form-label__title`}>
                                      Add A DISCOUNT CODE
                                  </Title>
                                  <Flex>
                                      <Input type={"email"} placeholder={`Enter your e-mail address`}
                                             className={`Shopping-bag__form-input`}/>
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
                                              82.00$
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
                                              82.00$
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