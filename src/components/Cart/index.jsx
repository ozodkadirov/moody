import {Fragment} from "react";
import Image from "../image";
import "./cart.scss"
import Title from "../Title";
import {default as Btn} from "../Button";
import {Button, Flex, Typography} from "antd";
import { TbShoppingBag } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";
const Cart = ({type, key, className, body, title, href, image, vertical, horizontal, stars = 0, price = 0, colors = [], saved = false, ...props}) => {
    const star = [...Array(stars)].map((item, point) => {
        return point <= stars ? (
            <Fragment key={point}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.03333 0L5.52222 5.02222L0.5 5.65L3.95696 9.51711L3.01111 15.0667L8.03333 12.5556L13.0556 15.0667L12.1181 9.51711L15.5667 5.65L10.5444 5.02222L8.03333 0ZM8.03333 1.87496L9.992 5.80067L13.8842 6.28615L11.2224 9.266L11.9507 13.5767L8.03333 11.6181L4.116 13.5767L4.84422 9.266L2.18244 6.28615L6.07467 5.80067L8.03333 1.87496Z"
                        fill="#F2C94C"/>
                </svg>
            </Fragment>
        ) : (
            <Fragment key={point}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_1_69" fill="white">
                        <path
                            d="M7.86683 0L5.35572 5.02222L0.333496 5.65L3.79046 9.51711L2.84461 15.0667L7.86683 12.5556L12.8891 15.0667L11.9516 9.51711L15.4002 5.65L10.3779 5.02222L7.86683 0ZM7.86683 1.87496L9.8255 5.80067L13.7177 6.28615L11.0559 9.266L11.7842 13.5767L7.86683 11.6181L3.9495 13.5767L4.67772 9.266L2.01594 6.28615L5.90816 5.80067L7.86683 1.87496Z"/>
                    </mask>
                    <path
                        d="M7.86683 0L8.94014 -0.536656L7.86683 -2.68328L6.79352 -0.536656L7.86683 0ZM5.35572 5.02222L5.50456 6.21296L6.14182 6.1333L6.42903 5.55888L5.35572 5.02222ZM0.333496 5.65L0.184654 4.45927L-2.08672 4.74319L-0.561148 6.44976L0.333496 5.65ZM3.79046 9.51711L4.9734 9.71873L5.07058 9.14856L4.6851 8.71735L3.79046 9.51711ZM2.84461 15.0667L1.66167 14.865L1.26393 17.1986L3.38126 16.14L2.84461 15.0667ZM7.86683 12.5556L8.40349 11.4822L7.86683 11.2139L7.33017 11.4822L7.86683 12.5556ZM12.8891 15.0667L12.3524 16.14L14.4659 17.1967L14.0723 14.8668L12.8891 15.0667ZM11.9516 9.51711L11.056 8.71843L10.6723 9.14863L10.7683 9.71699L11.9516 9.51711ZM15.4002 5.65L16.2958 6.44868L17.8171 4.74277L15.549 4.45927L15.4002 5.65ZM10.3779 5.02222L9.30463 5.55888L9.59184 6.1333L10.2291 6.21296L10.3779 5.02222ZM7.86683 1.87496L8.9406 1.33922L7.86683 -0.812906L6.79306 1.33922L7.86683 1.87496ZM9.8255 5.80067L8.75173 6.33641L9.03883 6.91184L9.67697 6.99144L9.8255 5.80067ZM13.7177 6.28615L14.6127 7.08557L16.1374 5.37866L13.8662 5.09538L13.7177 6.28615ZM11.0559 9.266L10.161 8.46658L9.77659 8.89692L9.8727 9.46589L11.0559 9.266ZM11.7842 13.5767L11.2475 14.6501L13.361 15.7068L12.9674 13.3769L11.7842 13.5767ZM7.86683 11.6181L8.40349 10.5448L7.86683 10.2764L7.33017 10.5448L7.86683 11.6181ZM3.9495 13.5767L2.76626 13.3769L2.37266 15.7068L4.48615 14.6501L3.9495 13.5767ZM4.67772 9.266L5.86095 9.46589L5.95707 8.89692L5.57266 8.46658L4.67772 9.266ZM2.01594 6.28615L1.86741 5.09538L-0.403719 5.37866L1.12099 7.08557L2.01594 6.28615ZM5.90816 5.80067L6.05669 6.99144L6.69483 6.91184L6.98193 6.33641L5.90816 5.80067ZM6.79352 -0.536656L4.28241 4.48557L6.42903 5.55888L8.94014 0.536656L6.79352 -0.536656ZM5.20688 3.83149L0.184654 4.45927L0.482338 6.84073L5.50456 6.21296L5.20688 3.83149ZM-0.561148 6.44976L2.89581 10.3169L4.6851 8.71735L1.22814 4.85024L-0.561148 6.44976ZM2.60752 9.31549L1.66167 14.865L4.02755 15.2683L4.9734 9.71873L2.60752 9.31549ZM3.38126 16.14L8.40349 13.6289L7.33017 11.4822L2.30795 13.9934L3.38126 16.14ZM7.33017 13.6289L12.3524 16.14L13.4257 13.9934L8.40349 11.4822L7.33017 13.6289ZM14.0723 14.8668L13.1348 9.31723L10.7683 9.71699L11.7058 15.2665L14.0723 14.8668ZM12.8472 10.3158L16.2958 6.44868L14.5046 4.85132L11.056 8.71843L12.8472 10.3158ZM15.549 4.45927L10.5268 3.83149L10.2291 6.21296L15.2513 6.84073L15.549 4.45927ZM11.4513 4.48557L8.94014 -0.536656L6.79352 0.536656L9.30463 5.55888L11.4513 4.48557ZM6.79306 2.4107L8.75173 6.33641L10.8993 5.26493L8.9406 1.33922L6.79306 2.4107ZM9.67697 6.99144L13.5692 7.47692L13.8662 5.09538L9.97402 4.60989L9.67697 6.99144ZM12.8228 5.48673L10.161 8.46658L11.9509 10.0654L14.6127 7.08557L12.8228 5.48673ZM9.8727 9.46589L10.6009 13.7766L12.9674 13.3769L12.2392 9.06611L9.8727 9.46589ZM12.3208 12.5034L8.40349 10.5448L7.33017 12.6914L11.2475 14.6501L12.3208 12.5034ZM7.33017 10.5448L3.41284 12.5034L4.48615 14.6501L8.40349 12.6914L7.33017 10.5448ZM5.13273 13.7766L5.86095 9.46589L3.49448 9.06611L2.76626 13.3769L5.13273 13.7766ZM5.57266 8.46658L2.91089 5.48673L1.12099 7.08557L3.78277 10.0654L5.57266 8.46658ZM2.16447 7.47692L6.05669 6.99144L5.75964 4.60989L1.86741 5.09538L2.16447 7.47692ZM6.98193 6.33641L8.9406 2.4107L6.79306 1.33922L4.83439 5.26493L6.98193 6.33641Z"
                        fill="black" fillOpacity="0.4" mask="url(#path-1-inside-1_1_69)"/>
                </svg>
            </Fragment>
        )
    });

  if(type === "common") {
      className = `Cart Cart__common ${className}`;
      return (

          <Fragment>
            <div className={className} {...props}>
                <Image className={`Cart__common-img`} src={image} alt={title}>
                    <Flex className="Cart__common-content" align={"center"} justify={"center"}>
                        <Title level={"h2"} >
                            {title}
                        </Title>
                        <Title bodyText={"p"} className={`Cart__common-content__text`}>
                            {body}
                        </Title>
                        <Btn href={href} className={`Cart__common-content__link`}>View all</Btn>
                    </Flex>
                </Image>
            </div>
          </Fragment>
      )
  }

  if(type === "advertising"){
      className = `Cart Cart__advertising ${className}`;

      return (
          <Fragment>
              <div className={className} {...props}>
                  <Flex align={"center"}>
                      <Image src={image} alt={title} />
                      <div className="Cart__advertising-content">
                          <Title level={"h2"}>{title}</Title>
                          <Btn secondary href={href} className={`Cart__advertising-link`}>
                                View Details
                          </Btn>
                      </div>
                  </Flex>
              </div>
          </Fragment>
      )
  }

  if(type === "product" && vertical){
      className = `Cart Cart__vertical`

      const color = colors.map((color, i) => {
          return(
              <Fragment key={i}>
                  <span className={`Cart__dots Cart__dots-${color}`}></span>
              </Fragment>
          )
      })

      return (
          <Fragment key={key}>
              <div className={className} {...props}>
                  <Btn href={href} secondary className={`Cart__link`}>
                      <Image src={image} alt={title} className={`Cart__vertical-img`}>
                          <Flex className="Cart__options" gap={20} align={"center"} justify={"center"}>
                              <Button icon={<TbShoppingBag />} />
                              <span className={`Cart__options-line`}>&#124;</span>
                              <Button icon={<IoMdHeartEmpty />} className={saved ? `saved` : ""} />
                          </Flex>
                      </Image>
                      <Title level={"h3"} className={`Cart__vertical-title`}>{title}</Title>
                      {(stars && (stars > 0)) ? <Fragment>
                          <Flex className="Cart__stars">
                              { star }
                          </Flex>
                      </Fragment> : <Fragment>
                          {colors && colors.length !== 0 && <Fragment>
                              <Flex className="Cart__dots-wrap" gap={4}>
                                  {color}
                              </Flex>
                          </Fragment>}
                      </Fragment>
                      }
                      <Typography.Title level={3} className={`Cart__price`}>{price}$</Typography.Title>
                  </Btn>
              </div>
          </Fragment>
      )
  }

  if(type === "product" && horizontal){
      className = `Cart Cart__horizontal`;

      return (
          <Fragment key={key}>
              <div className={className} {...props}>
                  <Btn href={href} secondary className={`Cart__link`}>
                      <Flex align={"center"} gap={32}>

                          <Image src={image} alt={title} className={`Cart__horizontal-img`}>
                              <Flex className="Cart__options" gap={20} align={"center"} justify={"center"}>
                                  <Button icon={<TbShoppingBag />} />
                                  <span className={`Cart__options-line`}>&#124;</span>
                                  <Button icon={<IoMdHeartEmpty  />} className={saved ? `saved` : ""} />
                              </Flex>
                          </Image>

                          <div className="Cart__horizontal-content">
                              <Title level={"h3"} className={`Cart__horizontal-title`}>{title}</Title>
                              <Flex gap={4} className="Cart__stars">
                                  {star}
                              </Flex>
                              <Typography.Title level={3} className={`Cart__-price`}>{price}$</Typography.Title>
                          </div>
                      </Flex>
                  </Btn>
              </div>
          </Fragment>
      )
  }
}

export default Cart;