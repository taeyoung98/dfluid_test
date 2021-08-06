import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "../components/Card";
import data from "../components/data.json";

const Container = styled.div`
	.font-title {
			font-size: 24px;
			font-weight: bold;
			line-height: 1.5;
			letter-spacing: -0.36px;
	}
	.font-desc {
		font-size: 18px;
		line-height: 1.67;
		letter-spacing: -0.27px;
	}
`;

const Top = styled.div`
  width: 100%;
  max-width: 1680px;
  margin: 0 auto;
  padding: 120px 4.6% 110px;
  
  h1 {
    font-family: 'Exo 2', sans-serif;
    font-size: 48px;
    line-height: 1.5;
    letter-spacing: -0.72px;
  }
`;

const Profile = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;

const Bottom = styled.div`
  width: 100%;
  height: 740px;
	background-image: url(${props => props.url});
	// background-size: cover;
	// background-position: center;
  display: flex;
  align-items: center;
  text-align: center;


  .inner {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
    padding: 0 4.6%;

    h3 {
      color: white;
    }

    .desc {
      margin: 23px 0 32px;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      color: rgba(255, 255, 255, 0.8);
    }

    .sub {
      font-size: 14px;
      line-height: 1.57;
      letter-spacing: -0.21px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

// 1. urls 종류 정하기
// 2. (한 개만 불러와서) 사진 고정하기
// 3. https://github.com/unsplash/unsplash-js 방법으로 전환

const Home = () => {
	const { data: { profileList, main } } = data;
	const [ imgUrl, setImgUrl ] = useState("");

	// profileList 순서 무작위로 변경
	const shuffle = (arr) => {
		arr.sort(() => Math.random() - 0.5);
	}

	shuffle(profileList); 

	// axios : 쉽게 설치할 수 있는 라이브러리, 따로 분리된 패키지 <<< win!
	// fetch : 모던 브라우저에 이미 지어져 있는 function. 패키지 설치 X
	// fetch를 쓰면 axios에서는 이미 내장되어 있는 많은 코드들을 직접 써야하기 때문이다.
	const getImage = useCallback(async() => {
		try {
			const response = await axios
				.get("https://api.unsplash.com/photos/random", {
					params: {
						client_id: "RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
						// count: "1"
					},
					headers: {
						// Access key
						Authorization: "Client-ID RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM"
					}
				});
			
			// const image = await response.data.urls.raw;

			setImgUrl(response.data.urls.raw); // raw full regular small thumb
		}
		catch (err) {
			console.error(err.message);
		}
	}, [setImgUrl]);
	// useCallback : params가 바뀔 때만 getImage가 실행되어, 불필요한 함수 생성 및 실행 방지

	useEffect(() => {
		getImage();
	}, [getImage]);
	// [getImage, setImgUrl] : 컴포넌트가 리렌더링 될 때마다, 계속해서 getImage를 만들고, 새로운 참조값을 받기 때문에 getImage()를 실행한다. 

  return(
    <Container>
      <Top>
        <h1>Snap photos and share like<br />never before</h1>
        <Profile>
          {profileList.map((item, index) => (
            <Card key={index} src={item.src} name={item.name} desc={item.description} />
          ))}
        </Profile>
      </Top>
      <Bottom url={imgUrl}>
        <div className="inner">
          <h3 className="title font-title">{main.title}</h3>
          <p className="desc font-desc">{main.contents}</p>
          <p className="sub">{main.sub}</p>
        </div>
      </Bottom>
    </Container>
  );
}

export default Home;