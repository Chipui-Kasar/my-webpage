import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./WishPage.css";
// import audio from "./wish.mp3";

function WishPage() {
  // const bubbles = () => {
  //   var count = 100;
  //   var section = document.querySelector("section");
  //   var i = 0;
  //   while (i < count) {
  //     var bubble = document.createElement("i");
  //     var x = Math.random() * window.innerWidth;
  //     var y = Math.random() * window.innerHeight;
  //     var size = Math.random() * 10;
  //     bubble.style.left = x + "px";
  //     bubble.style.top = y + "px";
  //     bubble.style.width = 1 + size + "px";
  //     bubble.style.height = 1 + size + "px";
  //     bubble.style.animationDuration = 0.8 + size + "s";
  //     bubble.style.animationDelay = -size + "s";
  //     section.appendChild(bubble);
  //     i++;
  //   }
  // };

  //show hide text on click
  const showHide = () => {
    document.getElementById("text").style.display = "block";
    //add background image
    document.getElementById("secondary").style.display = "none";
  };

  useEffect(() => {
    // bubbles();
    let url = window.location.href;
    if (url.includes("wish")) {
      document.getElementsByClassName("content")[0].style.margin = "0";
    } else {
      document.getElementsByClassName("content")[0].style.margin = "5rem 7rem";
    }

    document.getElementById("secondary").style.display = "block";
    document.getElementById("text").style.display = "none";
  }, []);

  const play = () => {
    // var audio = document.getElementById("myAudio");
    // audio.play();
  };

  //meta data for SEO
  let title = "Happy Mother's Day";
  let description =
    "Mother's Day is a celebration honoring the mother of the family or individual, as well as motherhood, maternal bonds, and the influence of mothers in society. It is celebrated on different days in many parts of the world, most commonly in the months of March or May.";
  let metadataImage =
    "https://www.rd.com/wp-content/uploads/2021/02/GettyImages-1125133291-ML.jpg";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="title" content={title} />
        <link rel="canonical" href="https://chipuikasar.netlify.app/wish" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metadataImage} />
        <meta
          property="og:url"
          content="https://chipuikasar.netlify.app/wish"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metadataImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chipui" />
      </Helmet>

      {/* <form className="form">
        <label
          style={{
            fontWeight: 600,
            backgroundColor: "rgba(0, 0, 0, 0.315)",
            padding: "5px",
            borderRadius: "5px",
          }}
          className="text-warning"
        >
          Create Your Wish Now
        </label>
        <br />
        <input
          type="text"
          className="input"
          placeholder="Enter your name"
          value={name}
          onChange={nameChange}
        />
      </form> */}

      <section className="palmContainer">
        <h1>Chipui Kasar wishes you {title}</h1>
        <div className="box">
          <div className="circle" id="background" onClick={play}>
            <p id="secondary" onClick={showHide}>
              * <br />
              <span id="demo"></span>
            </p>
            <p id="text">
              <span> Have a Great Day </span>
              <br />
            </p>
          </div>
          {/* <audio src={audio} autoPlay={true} controls loop>
            Sorry your browser does not support the audio element.
          </audio> */}

          {/* <audio id="myAudio" src={audio} autoPlay loop></audio> */}
        </div>
      </section>
    </div>
  );
}

export default React.memo(WishPage);
