# 💎 리블링스(Lieblings) - 양태완

> SeSAC 영등포 6기 2차 프로젝트(240821~240912)
![리블링스 인트로](https://github.com/user-attachments/assets/08192c04-b321-4e66-8ddf-5d8261b5aaeb)


🔗 배포 서버 : http://43.201.85.98:8080/

📃 [리블링스 발표자료 PDF](https://github.com/user-attachments/files/17101470/default.pdf)

<br/>

## 🔹 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [담당 역할](#담당-역할)
3. [주요 도전 과제와 해결 방법](#주요-도전-과제와-해결-방법)
4. [개발 환경](#개발-환경)
5. [브랜치 전략](#브랜치-전략)
6. [프로젝트 구조](#프로젝트-구조) 
7. [프로젝트 설계](#프로젝트-설계)
8. [구현 기능](#구현-기능)
9. [향후 계획](#향후-계획)
10. [소감](#소감)

<br/>

## 프로젝트 소개

### 💕나의 구최애가 너의 현최애다, 너의 구최애가 나의 현최애다.

<span title="특정한 분야나 대상을 열정적으로 좋아하고 그에 대한 활동을 즐기는 것을 의미합니다." style="color:pink">덕질</span>의 즐거움을 함께 나누는 공간, 리블링스는 독일어로 <span style="color:pink" title="최고로 애정하는">'최애'</span>를 의미합니다.
덕질의 열정은 시간이 흘러도 변하지 않습니다. 하지만 최애가 바뀌기도 하고, 새로운 애정을 찾기도 합니다. 저희 웹 사이트는 K-pop, 스포츠, 애니메이션, 영화/드라마, 게임, 스포츠 등 <span style="background-color:#ffdce0">'다양한 덕질 분야의 물품을 중고 거래할 수 있는 공간'</span>입니다.

<br/>


## 담당 역할

### 1. 주요 미들웨어 구현

Express의 미들웨어는 요청-응답 과정에서 요청 객체(req), 응답 객체(res), 그리고 다음 미들웨어 함수(next)에 접근할 수 있는 함수들이다.  

- 파일 업로드를 위해 S3 와 통신하는 미들웨어 구현
- 서버에 들어오는 HTTP 통신을 모니터링 하기 위한 로깅 미들웨어 구현

### 2. 환영 메일을 보내기 위한 메일링 시스템 구현

회원 가입시 환영 메일을 보내기 위해 npm의 nodemailer 패키지를 활용했습니다.

[[새싹x코딩온] 웹 개발자 부트캠프 과정 | Lieblings - 4) 환영 메일 보내보기!](https://velog.io/@behindy0311/240922)

### 3. 누락된 클라이언트 페이지 작성

프로젝트에 인원 변동이 있어서 작업이 미루어진 클라이언트 페이지들을 작성했습니다.

### 4. AWS 배포 환경 준비하기

AWS 의 EC2 프리티어에 Nginx 와 PM2 를 준비했습니다.

- Nginx : 웹 서버 로서, 리버스 프록시로 작동하여 백엔드 서버로 요청을 전달합니다.
- PM2 : 무중단 재배포(Zero Downtime Deployment)를 가능하게 합니다.
    - 애플리케이션 성능 모니터링 도구를 제공하므로, 로깅 미들웨어와 함께 효과적인 모니터링을 가능하게 합니다.

## 주요 도전 과제와 해결 방법

### 1. Brook’s Law - "프로젝트에 인력 추가는 프로젝트를 더욱 지연시킬 뿐이다.”

- 원인
    - 새로운 개발자들이 프로젝트를 이해하는 데 시간이 필요함
    - 팀 내 의사소통의 복잡성이 증가함
    - 작업을 더 작은 단위로 분할하는 데 추가적인 노력이 필요함
    - 기존 팀원들이 새 팀원을 교육하느라 자신의 작업 시간이 감소함

이 법칙은 소프트웨어 개발 프로젝트 관리에서 중요한 개념으로 여겨지고 단순히 인력을 추가하는 것만으로는 프로젝트 진척 속도를 높일 수 없다는 점을 강조합니다.

 따라서 프로젝트에 빠르게 합류하기 위한 전략이 필요했습니다. 다음과 같은 작업을 먼저 수행하여 우선 프로젝트의 의도와 구조를 파악하고 나서야 주요 기능을 작업할 수 있었습니다.

- 해결
    - 문서화 및 정리 : 기존 코드와 프로세스에 대한 문서를 작성하거나 개선합니다.
    - 리팩토링: 기존 코드를 개선하고 정리합니다.
    - 보조 작업 및 지원: 주요 개발 이외에 버그 수정, 작은 기능 개선 등을 담당합니다.
    - 누락된 페이지 작업 : 미뤄지고 있던 클라이언트 페이지들을 작업했습니다.
    - 배포 환경 준비 : 준비된 프로그램이 AWS에 배포될 수 있게 준비했습니다.
    - 학습 및 지식 공유 : React와 API 서버의 통신에 있어서 API가 분리될 필요에 대해서 팀원들과 논의 했습니다.

[[새싹x코딩온] 웹 개발자 부트캠프 과정 | Lieblings - 1) 진행되고 있는 프로젝트에 중도 참가하기!](https://velog.io/@behindy0311/240915)

### 2. 명확히 역할이 분리된 프로젝트에서 협업 하기

이번에는 프론트엔드와 백엔드 역할이 명확히 구분되어 있었습니다. 이러한 구조는 각자가 맡은 역할에 집중할 수 있게 해주었지만, 동시에 이런 구조에서 발생할 수 있는 문제들도 있었습니다.

- 문제
    1. API 설계 및 변경: 양 팀의 요구를 모두 만족시키는 API를 설계하고 변경하는 과정의 어려움.
        
        서버 개발 도중에 담당 작업자가 변경되기도 하고, 각자 담당 구역에 집중하다 보니 서로 의견 교류가 부족했던 부분에서, API의 응답 구조가 균일하지 못한 현상이 나타났습니다.
        
        또한 일부 API가 프론트엔드에서 필요한 데이터를 한 번에 보내주었기 때문에 복잡한 객체를 활용한 상태 관리에 어려움이 있었습니다.
        
    2. 커뮤니케이션 부족: 백엔드로부터의 응답 구조가 균일하지 않아 프론트엔드의 작업자 분들이 혼란을 겪었던 경험이 있었습니다.
    3. 개발 속도 차이: 프론트엔드와 백엔드 개발 속도의 불일치로 인한 병목 현상.
- 해결
    1. 필요한 곳에서 필요한 만큼의 데이터를 불러올 수 있게 기능마다 API를 분리했습니다.
    2. 상태 코드와 메시지를 추가하고 응답 구조를 균일하게 했습니다.
    3. 문서 작업이나 배포 작업 등 병목이 발생하지 않은 작업을 병렬적으로 수행했습니다.
<br/>

<br/>

## 개발 환경

#### Languages

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">

#### Frameworks

<img src="https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">

#### Libraries

<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"> <img src="https://img.shields.io/badge/multer-F46519?style=for-the-badge&logo=multer&logoColor=white"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/winston-000000?style=for-the-badge&logo=winston&logoColor=white"> <img src="https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white">

#### Databases

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">

#### Deployment

<img src="https://img.shields.io/badge/amazonwebservices-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white"> <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"> <img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white"> <img src="https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white"> <img src="https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white">

#### Development Environment and Tool

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">

#### Communication Tools

<img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">

<br/>

## 브랜치 전략

> back

```
  Main branch
      └── dev
	    ├── frontDev
	    |  ├── feat/login
	    |  ├── feat/register
	    |  └── feat/post
	    |  └── feat/multer
	    |  └── hotfix/user
```

> front

```
  Main branch
      └── dev ── fork
                  ├── Main branch
                  ├── dev
                  |  ├── MainPage
                  |  ├── RegisterPage
                  |  ├── SellersPage
                  |  ├── MyPage
                  |  ├── ···Page
                            ·
                            ·
                            ·
```

<br/>

## 프로젝트 구조

![Section 1 (1)](https://github.com/user-attachments/assets/eaad7281-840c-4c03-8fb7-252aa6042678)

```
  SESAC-2ND-FRONT
├── public - 공통리소스 저장공간
├── src - 리액트 앱이 저장될 장소
│ ├── api - axios 통신 함수 모음
│ ├── components - (하위)컴포넌트모음 
│ │                          
│ ├── data - 카테고리 데이터, 테스트용 더미 데이터 객체 모음
│ ├── hooks - 커스텀 훅 모음
│ ├── layout - 공통 레이아웃 모음
│ │ └── routes - 공통라우트 모음
│ │
│ ├── pages - 페이지(상위)컴포넌트 작성
│ ├── store - 전역 상태 관리용
│ ├── styles - 사이트에 적용될 스타일모음
│ │ │
│ │ ├── common - 공통 스타일 모음
│ │ ├── layout - 레이아웃 관련 스타일 모음
│ │ └── pages - 페이지 스타일 모음
│ └── utils - 공통 함수를 추출해 분류
└── App.js - React 애플리케이션의 루트 컴포넌트
```

```
  SESAC-2ND-BACK
├── config - sequelize 등의 설정 파일 모음
├── controller - API 요청에 대해 실제로 어떤 동작을 하게될 지 정의
│ │                   
│ └── index.js
│
├── middlewares - 미들웨어
│        multer - 파일 전송용 
│        session - 세션 설정용
│        winston - 로그 기록용
│
├── models - sequelize의 모델을 정의, db 연결 객체를 생성              
├── routes - 리액트에서 요청받은 요청들을 분류하는 라우트
├── utils - 여러 함수에서 사용하는 공통유틸을 추출
├── logs - winston 미들웨어를 통해 로그를 기록하는 디렉토리          
└── app.js - 애플리케이션의 주 진입점 파일
```

<br/>


## 프로젝트 설계

- [요구분석 정의서/명세서](https://docs.google.com/spreadsheets/d/1Ya0RCD4RilnOiLNQEIT97pBJ_jZ2YYCjc8nT2JiX4nU/edit?gid=0#gid=0)
- [DB 설계](https://github.com/SeSAC-2nd/SeSAC-2nd-Back/wiki/DB-%EC%84%A4%EA%B3%84)
- [화면 설계](https://www.figma.com/design/DWtFFjfUstdvSYmbkATfLE/sesac-2nd-pj?node-id=0-1&node-type=canvas&t=7Fuy1V5MQoBPyhzW-0)
- [명명법](https://docs.google.com/spreadsheets/d/1QaX_eHmUnU0yDstVW9tcm-4Va23pm7ib7xM4YGWIkAQ/edit?gid=0#gid=0)

<br/>

## 구현 기능

#### 판매자

https://github.com/user-attachments/assets/73bb184d-f9b7-467e-8199-d777345bde7b

- 일반 회원이 판매글을 등록하고 싶다면 판매자 등록부터 진행
- 판매글에 대해 주문이 생성되면 송장번호를 입력 -> 배송 상태가 '배송 중'으로 변경
- 판매글이 '판매 예약' 상태면 판매글 수정 및 삭제 불가

#### 구매자

https://github.com/user-attachments/assets/848bae01-0ca3-454a-87b7-770419ade0bb

- 구매자는 판매글에 대해 찜 등록 및 삭제, 장바구니 담기, 판매글 신고 가능
- 구매자가 결제를 진행하면 결제 대금이 관리자에게 전달
- 주문 건에 대해 구매확정을 하면 결제 대금이 판매자에게 전달

#### 관리자

https://github.com/user-attachments/assets/fb315369-a9ff-48b4-b76d-9cb0d64b06ab

- 관리자는 일반 회원이 할 수 있는 판매 물품 찜 및 구매가 불가
- 관리자가 특정 판매자를 블랙리스트에 추가할 경우, 해당 판매자의 '판매 완료'되지 않은 주문 건에 대해 구매자에게 환불 처리
- 구매자가 결제를 진행하여 주문이 생성되면 결제 대금이 관리자에게 전달, 구매자가 구매한 물품을 '구매 확정'을 하면 결제 대금이 판매자에게 전달(관리자가 대금을 중개하는 역할)

#### 로그인/회원가입

https://github.com/user-attachments/assets/dc2352ca-9e46-4bcb-abca-6e795d7ee6c7

#### 메인 페이지 및 소개 페이지

https://github.com/user-attachments/assets/b064aba9-1fbd-4d25-84c5-e873dc46ae76

#### 반응형

https://github.com/user-attachments/assets/40b278ab-50b3-4068-9494-e247d26ad431

<br/>

## 향후 계획
<br/>

## 소감

> 강예나  :  이번 프로젝트에서 사용자가 편리하게 정보를 입력하고 접근할 수 있는 방법을 고민하였고, 이를 통해 사용자 중심의 디자인과 개발 능력을 향상 시킬 수 있었던 좋은 경험이었습니다. 팀원들 다들 고생했고 고마워요!

> 김어진  : 구현해야 할 기능이 많아서 모든 개발에 우선순위를 두고 개발을 했다는 점이 어려웠지만 프론트와 이야기를 하여 에러 사항을 공유하면서 진행하여 배울점이 많았습니다.

> 김지민  :  끝까지 참여하지 못해 아쉽지만, 체계적인 설계 및 개발 과정을 통해 많은 것을 배울 수 있어 좋았습니다.

> 양태완  :  뒤늦게 합류한 프로젝트에서 어떠한 역할을 수행해야 하는지 고민해볼 수 있는 기회였습니다.

> 윤예슬  :  이번 프로젝트를 통해 리액트를 사용함으로써 컴포넌트 기반 설계와 상태 관리 등의 개념을 익힘으로써 개발 역량이 한층 성장한 것을 느낄 수 있었고,  프로젝트 완성까지 열정적으로 함께 달려온 팀원들 모두 고생하셨습니다!

> 이다인  :  이번 프로젝트를 통해서 머리속에 애매하게 알고 있던 지식을 구체화 시키면서 성장하는 느낌이 들어 좋았습니다. 특히 리덕스를 활용해서 상태관리를 쉽게 할 수있는 방법을 배울 수 있어 만족스럽습니다. 모두 고생하셨습니다.
