import { Fragment, useContext, useEffect, useState } from "react";
import { Button, Carousel, Flex, Typography } from "antd";
import { RiTruckLine } from "react-icons/ri";
import { FiCreditCard } from "react-icons/fi";
import { MdHeadsetMic, MdOutlineEmail } from "react-icons/md";
import Container from "../components/container";
import Img from "../components/image";
import BannerImage from "../images/banner-image.png";
import Title from "../components/Title";
import Cart from "../components/Cart";
import Advertising1 from "../images/advertising-1.png";
import Advertising2 from "../images/advertising-2.png";
import CartImage1 from "../images/card-1.png";
import Product1 from "../images/product1.png";
import CartImage2 from "../images/card-2.png";
import Product2 from "../images/product2.png";
import Input from "../components/Input";
import { default as Btn } from "../components/Button";
import axios from "axios";
import { Context } from "../context";

const Home = () => {
    const { Data } = useContext(Context);

    const [LastProducts, setLastProducts] = useState([]);
    const [TopProducts, setTopProducts] = useState([]);
    const [SliceProduct, setSliceProduct] = useState(3);

    useEffect(() => {
        setLastProducts(() => {
            return Data && Data?.length ? Data.slice((Data?.length - 6)) : []
        })

        setTopProducts(() => {
            return Data?.filter(item => item.top) ?? []
        })
    }, [Data?.length])

    const lastItem = LastProducts.map((item, index) => {
        const { title, price, stars, image, id } = item;
        return <Fragment key={index}>
            <Cart
                type={"product"}
                vertical
                image={image}
                title={title}
                stars={stars}
                price={price}
                href={`/catalog/product/${id}`}
            />
        </Fragment>
    })

    const handleSlice = () => {
        setSliceProduct(prev => prev > TopProducts.length ? 3 : prev + 3)
    }

    const TopItem = TopProducts.slice(0, SliceProduct).map(item => {
        const { image, title, id, price, stars } = item;

        return <Fragment key={id}>
            <Cart type={"product"} horizontal
                image={image}
                href={`/catalog/product/${id}`}
                title={title}
                price={price}
                stars={stars}
            />
        </Fragment>
    })

    return (
        <Fragment>
            <Container>

                <Flex
                    className="header__top-service"
                    justify="space-around"
                    align="center"
                >

                    <Button className="header__top-service__item"
                        icon={<RiTruckLine className="header__top-service-icon" />}
                    >
                        FREE SHIPPING
                    </Button>

                    <Button className="header__top-service__item"
                        icon={<FiCreditCard className="header__top-service-icon" />}
                    >
                        100% MONEY BACK
                    </Button>

                    <Button className="header__top-service__item"
                        icon={<MdHeadsetMic className="header__top-service-icon" />}
                    >
                        SUPPORT 24/7
                    </Button>
                </Flex>
            </Container>

            <section className="banner">
                <Container>
                    <Carousel autoplay>
                        <Flex justify="center" align="center" gap={66} className={`banner__item`}>
                            <Img
                                className={`banner__imageholder`}
                                alt="HOT DEALS THIS WEEK"
                                src={BannerImage}
                            />

                            <div className="banner__content">
                                <Typography.Title level={3} className={"banner__subtitle"}>
                                    HOT DEALS THIS WEEK
                                </Typography.Title>

                                <Title level={"h1"} className={`banner__title`}>
                                    SALE UP 50% <br />
                                    MODERN FURNITURE
                                </Title>

                                <Btn secondary className={`banner__link`}>
                                    VIEW NOW
                                </Btn>
                            </div>
                        </Flex>

                        <Flex justify="center" align="center" gap={66} className={`banner__item`}>
                            <Img
                                className={`banner__imageholder`}
                                alt="HOT DEALS THIS WEEK"
                                src={BannerImage}
                            />

                            <div className="banner__content">
                                <Typography.Title level={3} className={"banner__subtitle"}>
                                    HOT DEALS THIS WEEK
                                </Typography.Title>

                                <Title level={"h1"} className={`banner__title`}>
                                    SALE UP 50% <br />
                                    MODERN FURNITURE
                                </Title>

                                <Btn secondary className={`banner__link`}>
                                    VIEW NOW
                                </Btn>
                            </div>
                        </Flex>
                    </Carousel>
                </Container>
            </section>

            <section className="Cards">
                <Container>
                    <Flex justify={"space-between"}>
                        <Cart href={"#"} type={"advertising"} image={Advertising1}
                            className={`Cart__advertising--lightgrey`} title={`INY VINTAGE CHAIR`} />
                        <Cart href={"#"} type={"advertising"} image={Advertising2}
                            className={`Cart__advertising--lightgreen`} title={`LARGE TERRACOTA VASE`} />
                    </Flex>

                    <Flex justify={"space-between"} gap={23} align={"center"} className={`Cards__row`} wrap={"wrap"}>
                        <Cart type={"common"} href={"#"} title={`DECOR`}
                            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                            image={CartImage1} />

                        {lastItem}

                        <Cart type={"common"} href={"#"} title={`BOHO CHIC`}
                            body={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                            image={CartImage2} />
                    </Flex>
                </Container>
            </section>

            <section className="Sets">
                <Container>
                    <div className="Sets__row">
                        <div className="Sets__content">
                            <Title level={"h2"} className={"Sets__title"}>BEDSHEET SETS</Title>
                            <Flex className="Sets__price" align={"center"} gap={21}>
                                <Title level={"h2"}>$50.00</Title>
                                <Title bodyText={"p"} className={`Sets__price-old`}>$220.00</Title>
                            </Flex>

                            <Title bodyText={"p"} className={`Sets__text`}>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.</Title>

                            <Btn href={"#"} secondary className={`Sets__link`}>VIEW DETAILS</Btn>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="Top-rating">
                <Container>
                    <Typography.Title level={2} className={`Top-rating__title`}>TOP RATING</Typography.Title>
                    <Flex gap={25} wrap={"wrap"} align={"center"} className={"Top-rating__row"}>
                        {TopItem}
                    </Flex>

                    <div className="Top-rating__buttons">
                        <Btn primary onClick={handleSlice}>load more products</Btn>
                    </div>
                </Container>
            </section>

            <section className="Sign">
                <Container>
                    <Flex justify={"space-between"}>
                        <div className="Sign__description">
                            <Title level={"h2"}>SING UP FOR THE NEWSLETTER</Title>
                            <Title level={"h3"} className={`Sign__text`}>Subscribe for the latest stories and
                                promotions</Title>
                        </div>

                        <Flex justify={"end"}>
                            <form className={`Sign__form`}>
                                <Input type={"email"} placeholder={`Enter your e-mail address`}
                                    className={`Sign__form-input`} />
                                <Btn type={"submit"} primary className={`Sign__form-button`}>
                                    {<MdOutlineEmail />}
                                </Btn>
                            </form>
                        </Flex>
                    </Flex>
                </Container>
            </section>
        </Fragment>
    )
}

export default Home;