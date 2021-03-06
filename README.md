# ![문해한 하루](https://user-images.githubusercontent.com/95131477/167049918-2fa0b62b-4b9e-4b2d-a814-f741b7ae419f.png)

![service-preview](https://user-images.githubusercontent.com/95131477/167271369-cc7de973-d897-4285-88bf-27d9c03265f0.gif)

PISA(국제 학업 성취도 평가) 데이터를 기반으로 한국인들의 문해력이 점차 낮아지고 있음을 분석하고, 문해력 향상을 위한 트레이닝 및 사용자들간 작성한 글을 공유하는 서비스 입니다.

> 2022.04.19 ~ 2022.05.07 / 엘리스 AI 트랙 4기 데이터분석 프로젝트

엘리스 데이터분석 프로젝트 우수팀 선정

![image](https://user-images.githubusercontent.com/95131477/168618907-a4e93176-08b6-4a8c-8259-a22a0417b067.png)

## Overview

- [서비스 개요](#서비스-개요)
- [아키텍처](#아키텍처)
- [와이어프레임](#와이어프레임)
- [기술 스택](#기술-스택)
- [실행 방법](#실행-방법)
- [팀원 소개](#팀원-소개)

## 서비스 개요

문해력과 관련된 기사([금일 시험=금요일 시험?…](https://news.mt.co.kr/mtview.php?no=2021091410294811195))를 보고 세계적으로 문맹률이 가장 낮은 국가인 한국이 글이나 말을 읽고 쓸줄은 아는데 이해하지 못한다는 사회적 문제를 인지하고 해결하고자 하였습니다.<br>
문해력이 저하되고 있다는 데이터는 [Kaggle](https://www.kaggle.com/)의 [Education-Statistics](https://www.kaggle.com/datasets/theworldbank/education-statistics), [GDP](https://www.kaggle.com/datasets/tunguz/country-regional-and-world-gdp)를 활용하여 분석되었습니다. <br>
**문해한 하루**는 문해력 테스트, 트레이닝, 글쓰기 등의 방법으로 사람들의 문해력을 향상시키는데 도움을 주는 서비스입니다.<br>

### 기능 소개

|          기능           | 구현 |  완료일  |
| :---------------------: | :--: | :------: |
|      데이터시각화       |  ✅  | 22-05-07 |
|     로그인/회원가입     |  ✅  | 22-04-23 |
|      카카오 로그인      |  ✅  | 22-04-23 |
|      이미지 업로드      |  ✅  | 22-04-27 |
|       게시글 CRUD       |  ✅  | 22-05-03 |
|       좋아요 기능       |  ✅  | 22-05-03 |
| 검색 및 검색어 자동완성 |  ✅  | 22-04-30 |
|     댓글/답글 CRUD      |  ✅  | 22-05-05 |
|       무한스크롤        |  ✅  | 22-04-30 |
|      문해력 테스트      |  ✅  | 22-04-28 |
|  문해력 향상 트레이닝   |  ✅  | 22-04-28 |
| 코드리뷰 반영 리팩터링  |  ✅  | 22-05-16 |

## 아키텍처

![unknown](https://user-images.githubusercontent.com/95131477/167271437-4eae9816-f681-438b-b459-5487ae358d0f.png)

## 와이어프레임

![wireframe](https://user-images.githubusercontent.com/95131477/167145768-ed83ecfe-a5a8-4eff-be5f-ea5e857c3b07.png)

## ERD

![erd](https://velog.velcdn.com/images/handwoong/post/87b2e951-d306-41f4-b274-921b4b99d2e2/image.jpeg)

## 기술 스택

![tech-stack](https://user-images.githubusercontent.com/95131477/167141077-efa3e55d-f717-4a20-9435-134e37c02f80.png)

## 실행 방법

- 서비스 내 Swagger => [API Docs in 문해한 하루](http://elice-kdt-ai-4th-team02.elicecoding.com:5001/api-docs)
- Swagger Hub => [API Docs in Swagger HUB](https://app.swaggerhub.com/apis/Hyes-y/team2API/0.1.9)

**공통**

카카오 로그인을 위해 클라이언트 ID, 리다이렉트URI, 인증URL이 필요합니다.<br>

**프론트엔드**

.env

```.env
REACT_APP_CLIENT_ID={ID}
REACT_APP_REDIRECT_URI={REDIRECT_URI}
REACT_APP_KAKAO_AUTH_URL={AUTH_URL}
```

bash

```bash
npm install -g yarn

cd front

yarn install
yarn start
```

**백엔드**

.env

```.env
// 서버 포트
SERVER_PORT = 5001

// MongoDB 아틀라스 url
MONGODB_URL=

//JWT 전자서명 키
JWT_SECRET_KEY="jwt-secret-key"

// KAKAO 인증 관련 환경변수
KAKAO_OAUTH_TOKEN_API_URL=
KAKAO_CLIENT_ID=
KAKAO_REDIRECT_URL=
KAKAO_OAUTH_USER_API_URL=
KAKAO_UNLINK=

// Naver Cloud Platform Object Storage 사용 관련 인증키
NCP_ACCESS_KEY=
NCP_SECRET_KEY=
```

bash

```bash
npm install -g yarn

cd back

yarn install
yarn start
```

---

## 팀원 소개

|                  이름                  |    역할    |
| :------------------------------------: | :--------: |
|  [유혜선](https://github.com/Hyes-y)   |   백엔드   |
| [김영곤](https://github.com/shin3411)  |   백엔드   |
| [박재성](https://github.com/jeaseong)  | 프론트엔드 |
| [손정웅](https://github.com/Handwoong) | 프론트엔드 |
| [손현주](https://github.com/guswn2521) | 프론트엔드 |
