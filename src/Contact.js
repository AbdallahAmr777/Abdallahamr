import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wh7rjap",
        "template_vcz27a3",
        form.current,
        "CIbPDdp5qXp051BL0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="homesec6" id="contact">
      <Container>
        <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          Contact Us
        </h3>
        <Row className="align-items-center">
          <Col
            md={6}
            sm={12}
            className="wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.1s"
          >
            <div>
              <p>
                <span>Email:</span> amr064414@gmail.com
              </p>
              <p>
                <span>Phone:</span> 01065534315
              </p>
              <p>
                <span>Address:</span> 23 street Las Vegas
              </p>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className="wow bounceInRight"
            data-wow-duration="2s"
            data-wow-delay="0.3s"
          >
            <div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="d-flex">
                  <input type="text" name="user_name" placeholder="Name" />
                  <input type="text" name="Company" placeholder="Company" />
                </div>
                <div className="d-flex">
                  <input type="text" name="user_email" placeholder="Email" />
                  <input type="text" name="Phone" placeholder="Phone" />
                </div>
                <textarea name="Message" placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
