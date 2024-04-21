import {Fragment} from "react";
import Container from "../components/container";
import {Space, Typography} from "antd";
import Title from "../components/Title";

const NotFound = () => {
  return(
      <Fragment>
          <section className="NotFound">
              <Container>
                  <Space align={"center"} className={`NotFound__content`}>

                      <div >
                          <Typography.Title level={1}>
                              Not Found 404
                          </Typography.Title>

                          <Title bodyText={"p"}>Go Back</Title>
                      </div>
                  </Space>
              </Container>
          </section>
      </Fragment>
  )
}

export default  NotFound;