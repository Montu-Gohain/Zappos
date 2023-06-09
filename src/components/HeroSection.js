import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  const navigate = useNavigate();
  const gotoProductPage = () => {
    navigate("/products");
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Welcome to our innovative e-commerce shopping website, where
              convenience and quality unite to redefine your online shopping
              experience. With an extensive range of products spanning various
              categories, we offer an enticing collection that caters to your
              diverse needs. Browse through our user-friendly platform, discover
              top-notch brands, and indulge in seamless transactions that
              prioritize your satisfaction. From fashion-forward apparel to
              cutting-edge electronics, we're here to bring your desires to your
              doorstep with just a few clicks. Embrace the joy of effortless
              shopping and let us be your trusted companion on your retail
              journey.
            </p>
            <Button onClick={gotoProductPage}>Shop now</Button>
          </div>
          <div className="hero-section-image">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1593412578702-3332c86f3db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  img {
    min-width: 10rem;
    height: 10rem;
    max-width: 100%;
    border-radius: 10px;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      font-size: 45px;
      color: #9ca3af;
      @media (max-width: 768px) {
        font-size: 35px;
      }
    }

    .intro-data {
      margin-bottom: 0;
      text-transform: none;
      color: #2563eb;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    /* Creating the background card using pseudo element. */
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      border-radius: 10px;
      background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
    @media screen and (max-width: 768px) {
      &::after {
        display: none;
      }
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
