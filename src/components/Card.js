import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 493px;

  .pic {
    margin-bottom: 40px;

    img {
      width: 108px;
      height: 108px;
    }
  }

  .desc {
    margin: 24px 0 24px;
    color: rgba(0, 0, 0, 0.8);
  }

  .more-btn button {
    all: unset;
    font-family: 'Exo 2', sans-serif;
    font-weight: bold;
    color: #18a0fb;
  }
`;

const Card = ({src, name, desc}) => {
  return(
    <Container>
			<div className="pic">
			<img src={src} alt="" />
			</div>
			<div className="name font-title">{name}</div>
			<div className="desc font-desc">{desc}</div>
			<div className="more-btn">
			<button className="font-desc">LEARN MORE</button>
			</div>
    </Container>  
  );
}

export default Card;
