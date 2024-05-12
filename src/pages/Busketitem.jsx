import React, { useState } from 'react'
import { Button, Flex, Select } from "antd"
import Img from '../components/image'
import Title from '../components/Title'
import { IoHeartOutline } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io'
import { useCart } from 'react-use-cart'

export const Busketitem = ({ image, title = "title product", price = 0, colors = [], size, id = 0

}) => {
    const { removeItem } = useCart();
    const [Quantity, setQuantity] = useState(1);

    const handleRemoveProduct = () => {
        removeItem(id);
    }

    const handleSelect = value => setQuantity(value)
    return (
        <Flex gap={18} className={`Shopping-bag__item`}>
            <Img src={image} alt={title} className={`Shopping-bag__image`} />

            <div className="Shopping-bag__item-content">
                <Title bodyText={"p"} className={`Shopping-bag__item-title`}>
                    {title}
                </Title>

                <Title level={"h3"} className={`Shopping-bag__item-price`}>
                    {price}$
                </Title>

                <ol className={`list-none Shopping-bag__item-list`}>
                    <li className={`Shopping-bag__item-list__item`}>
                        Art. No.: 54637253
                    </li>
                    <li className={`Shopping-bag__item-list__item`}>
                        Color: {colors?.join(", ")}
                    </li>
                    <li className={`Shopping-bag__item-list__item`}>
                        Size: {size}
                    </li>
                    <li className={`Shopping-bag__item-list__item`}>
                        Total: {price * Quantity}
                    </li>
                </ol>

                <Flex gap={6}>
                    <Button icon={<IoHeartOutline />} />

                    <Select
                        defaultValue={Quantity}
                        options={[
                            { value: 1, label: 1, disabled: true },
                            { value: 2, label: 2 },
                        ]}
                        value={Quantity}
                        onChange={handleSelect}
                    />
                </Flex>

                <Button onClick={handleRemoveProduct} icon={<IoMdClose />} className={`Shopping-bag__item-close`} />
            </div>
        </Flex>
    )
}
