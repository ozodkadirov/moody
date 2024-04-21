import { Fragment } from "react";
import Container from "./components/container";
import {Button, Flex} from "antd";
import Logo from "./components/logo"
import { IoMdSearch } from "react-icons/io"
import { LuUser } from "react-icons/lu";
import { TbShoppingBag } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";
import "./App.scss";
import { Content } from "antd/es/layout/layout";
import Footer from "./layout/footer";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Product from "./pages/Product"
import Bag from "./pages/Busket";
import NotFound from "./pages/NotFound";
import Saved from "./pages/Saved";
import Input from "./components/Input";

const App = () => {
    return (
        <Fragment>
            <header className="header">
                <Container>
                    <Flex
                        justify="space-between"
                        align="center"
                        className="header__top"
                    >
                        <Logo />

                        <Flex justify={"end"} gap={5} align={"center"} className="header__top-icons">
                            <Flex justify={"end"} align={"center"} className={"header__top-search"}>
                                {/*header__top-input active*/}
                                <Input placeholder={"Search"} className={`header__top-input`} />
                                <Button className={`header__top-button`} icon={<IoMdSearch />} />
                            </Flex>
                            <Button icon={<LuUser />} />
                            <Button icon={<TbShoppingBag />} href={"/bag"} className={`bag`}>
                                <span className={`bag__counter`}>3</span>
                            </Button>
                            <Button icon={<IoHeartOutline />} href={"/saved"} />
                        </Flex>
                    </Flex>

                    <nav className="header__menu">
                        
                        <Link to={"/"} className="header__menu-link">Home</Link>
                        <Link to={"/catalog/"} className="header__menu-link">Catalog</Link>
                        <Link to={"/bag/"} className="header__menu-link">Bag</Link>
                        <Link to={"/saved/"} className="header__menu-link">Saved</Link>
                    </nav>
                </Container>
            </header>

            <Content>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/catalog/" element={<Catalog />} />

                    <Route path="/catalog/product/:id/" element={<Product />} />

                    <Route path={"/bag/"} element={<Bag />}  />

                    <Route path={"*"} element={<NotFound />}  />

                    <Route path={"/saved/"} element={<Saved />}  />
                </Routes>
            </Content>

            <Footer/>
        </Fragment>
    )
}

export default App;