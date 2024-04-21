import {Fragment} from "react";
import Container from "../container";
import {Breadcrumb as Crumb, Flex} from "antd";
import {default as Btn} from "../Button";
import "./breadcrumb.scss"
const Breadcrumb = ({className, current = "Current Page"}) => {
  className = `Breadcrumb ${className}`;
  const path = window.location.pathname,
      items = [
          {
              title: <Btn href={"/"} className={`Breadcrumb__link`} secondary>Homepage</Btn>
          }
      ]
    let PathElement = ""

    for (const pathElement of path) {
        console.log(pathElement)
        if(pathElement !== "/"){
           PathElement += pathElement;
        }else if(PathElement !== ""){
            items.push({
                title: <Btn href={`/${PathElement}`} className={`Breadcrumb__link`} secondary>{PathElement}</Btn>
            })
            PathElement = ""
        }
    }

    items.push({
        title: current
    })

  return(
      <Fragment>
          <section className={className}>
              <Container>
                  <Flex justify={"center"} className="Breadcrumb__row">
                    <Crumb items={items} />
                  </Flex>
              </Container>
          </section>
      </Fragment>
  )
}

export default Breadcrumb;