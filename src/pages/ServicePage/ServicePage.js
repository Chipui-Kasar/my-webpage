import React from "react";
import styles from "../../styles.module.css";
import TitleComp from "../../components/aboutTitleComp";
import ServiceComponent from "../../components/ServiceComponent";
import "./ServicePage.css";
import { MetaTags } from "react-meta-tags";
function ServicePage() {
  return (
    <>
      <MetaTags>
        <title>Services</title>
        <meta name="title" content="Services" />
        <meta
          name="description"
          content="Urgently require passport prints? Print it online!
You can print in 35 x 45 mm(Passport size) | 20 x 25mm (Stamp size)
Start your photo print today with a minimum quantity of 20."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/service"
        />

        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Urgently require passport prints? Print it online!
You can print in 35 x 45 mm(Passport size) | 20 x 25mm (Stamp size)
Start your photo print today with a minimum quantity of 20."
        />
        <meta
          property="og:image"
          content="https://store-images.s-microsoft.com/image/apps.61254.14216210150808594.936b4a2c-df5d-41d5-b1a3-1bef207bc4ef.521a853d-8eb9-441b-8efd-15c07b05ed71?mode=scale&q=90&h=150&w=290"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasarpage.netlify.app/"
        />
        <meta property="twitter:title" content="Services" />
        <meta
          property="twitter:description"
          content="Urgently require passport prints? Print it online!
          You can print in 35 x 45 mm(Passport size) | 20 x 25mm (Stamp size)
          Start your photo print today with a minimum quantity of 20."
        />
        <meta
          property="twitter:image"
          content="https://store-images.s-microsoft.com/image/apps.61254.14216210150808594.936b4a2c-df5d-41d5-b1a3-1bef207bc4ef.521a853d-8eb9-441b-8efd-15c07b05ed71?mode=scale&q=90&h=150&w=290"
        />
        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/service"
        ></link>
      </MetaTags>
      <div className={styles.about}>
        <TitleComp title={"Service"} span={"Services"} />
        <div className={styles.servicesContainer}>
          <ServiceComponent
            img={
              <img
                src="https://store-images.s-microsoft.com/image/apps.61254.14216210150808594.936b4a2c-df5d-41d5-b1a3-1bef207bc4ef.521a853d-8eb9-441b-8efd-15c07b05ed71?mode=scale&q=90&h=150&w=290"
                alt={"service1"}
                width="100%"
              />
            }
            title={"Passport and Stamp Prints"}
            text={`<div>Require passport photos? Order Now! <br/>
                <li>Passport size photo (35 x 45 mm)</li>
                <li>Stamp size photo (20 x 25mm)</li>
                <p>Minimum order 6 Piece</p>
            <div style="color: yellow;">
            For 10 Qty (₹4 / piece)
            </div>
            What are you waiting for? Order Now!<br/>
            </div>`}
            orderNow={`Order`}
          />
        </div>
      </div>
    </>
  );
}

export default ServicePage;
