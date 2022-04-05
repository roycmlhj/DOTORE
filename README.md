
# DOTORE
> **우리의 재능이 모여 새로운 가치가 되는 곳, 도토리**

[[_TOC_]]

## **1️⃣ 프로젝트 소개**

### 프로젝트 개요

NFT를 통해 재능 기부를 하고 이를 바탕으로 수혜자들이 2차 창작물을 만들어 거래를 할 수 있는 서비스를 제공합니다.

기존의 NFT 거래 플랫폼에 본인의 재능을 NFT로 공유하여 재능 기부자는 창작 활동 기회를 증진하며 피기부자는 기부자의 피드백을 통해 충분한 동기를 부여받게 됩니다.

### 프로젝트 목표

---

> ****“창작가와 기부자가 하나의 플랫폼에서 서로의 니즈를 공유할 수 있는 서비스를 제공하고자 합니다.”****

창작에는 고통이 따릅니다. 많은 사람이 나만의 작품을 가지고 싶어 하지만, 혼자서 밑바닥부터 시작한다는 건 너무 어려운 일이죠. 그런 상황에서 ***누군가 소스를 제공하고 조언을 줄 수 있다면?***
반대로 ***내가 가진 재능으로 누군가에게 도움이 되고, 또 그 작품을 NFT로 소유하고 거래할 수 있다면?***

이 수요를 연결할 수 있는 프로젝트로 도토리를 제공하고자 합니다. 

창작가는 아이디어를 얻고 도움을 받아 나만의 작품을 만들 수 있습니다. 기부자는 자신이 가진 재능을 기부하고, 2차 창작된 작품들의 원작자로 남아 자신만의 커리어를 쌓으며 본인의 원작에 가치를 부여할 수 있습니다.


### 일정
- 개발 일정 : 2022-02-28 ~ 2022-04-08 (총 6주)
    - Sub1 : 2022-02-28 ~ 2022-03-06 : 아이디어 구상, 기획, 설계, 필요 기술 학습을 통한 코드 이해
    - Sub2 : 2022-03-07 ~ 2022-03-18 : 세부 기획, Frontend 컴포넌트 개발, Backend api 개발, 응용 코드 추가
    - Sub3 : 2022-03-19 ~ 2022-04-08 : 프로젝트를 하면서 심화적으로 원하는 코드 추가


### WE ARE, 다람쥐
|  팀원 | 역할 |
| --- | --- |
| 한지희 | 💪😎🎺 팀장! Frontend, Blockchain  |
| 이성재 | 🐭 Frontend, Blockchain |
| 이호진 | 🐯 Frontend, Blockchain  |
| 인주비 | 🐱 Frontend, Blockchain |
| 조영운 | 🐹 Backend, Blockchain |
| 제진명 | 🐨 Backend, Blockchain |

- **한지희**: 팀장! Frontend, Blockchain
- **이성재**: Frontend, Blockchain
- **인주비**: Frontend, Blockchain
- **제진명**: Frontend, Blockchain
- **이호진**: Backend, Blockchain
- **조영운**: Backend, Blockchain

<br>

## 💻 개발 환경


### 기술 스택
---

<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img alt="React" src ="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
<img alt="Spring" src ="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/>
<img alt="AWS" src ="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"/>

- IDE
  - IntelliJ IDEA Community Edition 2021.3.1
  - Visual Studio Code 1.64.2
- Frontend
  - HTML5, CSS, TyleScript, JavaScript (ES6)
  - React 17.0.2
- Backend
  - Java OpenJDK 1.8.0 
  - Spring Boot 2.4.5
  - Spring Data JPA
  - Hibernate 5.4.30
  - Lombok
- Blockchain Environment
  - Besu 21.10.2
- Smart Contract
  - Solidity 0.8.4+
  - Truffle 5.4.24
- DB
  - MySQL 8.0.28-0ubuntu0.20.04.3
- Server
  - AWS EC2 (Ubuntu 20.04 LTS)
- 형상관리
  - GitLab
- 이슈 관리
  - Jira
- Tools
  - Mattermost 4.7.0
  - Sourcetree 3.4.7

<br>

## **2️⃣ 프로젝트 산출물**

- 프로젝트 메모 및 공유 : Notion
- 프로젝트 회의록
- 프로젝트 컨벤션 목록
- 프로젝트 스토리보드 및 디자인
- 기획서
- API Docs
- 와이어 프레임
- 서비스 아키텍처
- 요구사항 명세서
- 데이터베이스:ERD
- 시퀀스 다이어그램
- Git 협업
- Jira 이슈 관리
- AWS EC2 환경 설정

<br>

## 💡 프로젝트 Wiki

- [요구사항 명세서](./docs/요구사항명세서.pdf)
- [기능정의서](./docs/기능명세서.pdf)
- [ERD](./docs/DOTORE_ERD설계.PNG)
- [API Docs](./docs/API설계서.pdf)
<br>

## **4️⃣ 프로젝트 파일 구조**

### Smart Contract

```bash
📦smart-contracts
 ┣ 📂contracts
 ┃ ┣ 📜DTT.sol
 ┃ ┗ 📜DTTMarket.sol
 ┣ 📂scripts
 ┃ ┗ 📜deploy.js
 ┣ 📂test
 ┃ ┗ 📜market-test.js
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.npmignore
 ┣ 📜.prettierignore
 ┣ 📜.prettierrc
 ┣ 📜.solhint.json
 ┣ 📜.solhintignore
 ┣ 📜hardhat.config.js
 ┣ 📜package.json
 ┗ 📜README.md
```

### **Frontend**

```bash
📦frontend
 ┣ 📂.storybook
 ┃ ┣ 📜main.js
 ┃ ┗ 📜preview.js
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜api.tsx
 ┃ ┃ ┣ 📜artist.tsx
 ┃ ┃ ┣ 📜feedback.tsx
 ┃ ┃ ┣ 📜item.tsx
 ┃ ┃ ┣ 📜sale.tsx
 ┃ ┃ ┗ 📜user.tsx
 ┃ ┣ 📂assets
 ┃ ┃ ┣ 📂feedback
 ┃ ┃ ┃ ┗ 📜sitting-dotori.png
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┗ 📜default_dotori.png
 ┃ ┃ ┗ 📜banner1.png
 ┃ ┣ 📂contracts
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┣ 📜first.tsx
 ┃ ┃ ┃ ┣ 📜ItemTxRecord.tsx
 ┃ ┃ ┃ ┣ 📜mypage.tsx
 ┃ ┃ ┃ ┣ 📜second.tsx
 ┃ ┃ ┃ ┗ 📜transactionRecord.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📜connectors.tsx
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂artist
 ┃ ┃ ┃ ┣ 📜Artist.tsx
 ┃ ┃ ┃ ┣ 📜AuthoredNFTList.tsx
 ┃ ┃ ┃ ┣ 📜Download.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackList.tsx
 ┃ ┃ ┃ ┣ 📜Like.tsx
 ┃ ┃ ┃ ┣ 📜OwnedNFTList.tsx
 ┃ ┃ ┃ ┗ 📜TxHistory.tsx
 ┃ ┃ ┣ 📂feedback
 ┃ ┃ ┃ ┣ 📜Feedback.tsx
 ┃ ┃ ┃ ┗ 📜FeedbackCreate.tsx
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┣ 📜ChildList.tsx
 ┃ ┃ ┃ ┣ 📜List.tsx
 ┃ ┃ ┃ ┗ 📜ParentList.tsx
 ┃ ┃ ┣ 📂minting
 ┃ ┃ ┃ ┣ 📜ChildMinting.tsx
 ┃ ┃ ┃ ┗ 📜ParentMinting.tsx
 ┃ ┃ ┣ 📜Detail.tsx
 ┃ ┃ ┗ 📜Main.tsx
 ┃ ┣ 📂shared
 ┃ ┃ ┗ 📜GlobalStyles.tsx
 ┃ ┣ 📂stories
 ┃ ┃ ┣ 📂artist
 ┃ ┃ ┃ ┣ 📜ArtistFeedbackList.stories.tsx
 ┃ ┃ ┃ ┣ 📜ArtistFeedbackList.tsx
 ┃ ┃ ┃ ┣ 📜ArtistNav.stories.tsx
 ┃ ┃ ┃ ┣ 📜ArtistNav.tsx
 ┃ ┃ ┃ ┣ 📜ArtistNavMenu.stories.tsx
 ┃ ┃ ┃ ┣ 📜ArtistNavMenu.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackToggleButtons.stories.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackToggleButtons.tsx
 ┃ ┃ ┃ ┣ 📜ProfileBanner.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProfileBanner.tsx
 ┃ ┃ ┃ ┣ 📜ProfileUpdateModal.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProfileUpdateModal.tsx
 ┃ ┃ ┃ ┣ 📜RefreshTx.tsx
 ┃ ┃ ┃ ┣ 📜TransactionHistoryItem.stories.tsx
 ┃ ┃ ┃ ┣ 📜TransactionHistoryItem.tsx
 ┃ ┃ ┃ ┣ 📜TransactionHistoryList.stories.tsx
 ┃ ┃ ┃ ┗ 📜TransactionHistoryList.tsx
 ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┣ 📂mypage
 ┃ ┃ ┃ ┃ ┣ 📜default-dotori-circle.svg
 ┃ ┃ ┃ ┃ ┣ 📜default-dotori-icon.png
 ┃ ┃ ┃ ┃ ┗ 📜default-dotori.svg
 ┃ ┃ ┃ ┣ 📜code-brackets.svg
 ┃ ┃ ┃ ┣ 📜colors.svg
 ┃ ┃ ┃ ┣ 📜comments.svg
 ┃ ┃ ┃ ┣ 📜direction.svg
 ┃ ┃ ┃ ┣ 📜flow.svg
 ┃ ┃ ┃ ┣ 📜plugin.svg
 ┃ ┃ ┃ ┣ 📜repo.svg
 ┃ ┃ ┃ ┗ 📜stackalt.svg
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┣ 📜alert.tsx
 ┃ ┃ ┃ ┣ 📜Amount.stories.tsx
 ┃ ┃ ┃ ┣ 📜Amount.tsx
 ┃ ┃ ┃ ┣ 📜Badge.stories.tsx
 ┃ ┃ ┃ ┣ 📜Badge.tsx
 ┃ ┃ ┃ ┣ 📜Icon.stories.tsx
 ┃ ┃ ┃ ┣ 📜Icon.tsx
 ┃ ┃ ┃ ┣ 📜LoadingSpinner.tsx
 ┃ ┃ ┃ ┣ 📜Logo.stories.tsx
 ┃ ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┃ ┣ 📜MediaBlock.tsx
 ┃ ┃ ┃ ┣ 📜Modal.stories.tsx
 ┃ ┃ ┃ ┣ 📜Modal.tsx
 ┃ ┃ ┃ ┣ 📜Pagination.stories.tsx
 ┃ ┃ ┃ ┣ 📜SearchBar.tsx
 ┃ ┃ ┃ ┣ 📜StyledPagination.tsx
 ┃ ┃ ┃ ┣ 📜TextEditor.stories.tsx
 ┃ ┃ ┃ ┗ 📜TextEditor.tsx
 ┃ ┃ ┣ 📂detail
 ┃ ┃ ┃ ┣ 📜Description.stories.tsx
 ┃ ┃ ┃ ┣ 📜Description.tsx
 ┃ ┃ ┃ ┣ 📜Image.stories.tsx
 ┃ ┃ ┃ ┣ 📜Image.tsx
 ┃ ┃ ┃ ┣ 📜Info.stories.tsx
 ┃ ┃ ┃ ┣ 📜Info.tsx
 ┃ ┃ ┃ ┣ 📜InfoItem.tsx
 ┃ ┃ ┃ ┣ 📜QuestionItem.tsx
 ┃ ┃ ┃ ┣ 📜Questions.stories.tsx
 ┃ ┃ ┃ ┣ 📜Questions.tsx
 ┃ ┃ ┃ ┣ 📜RealtedNFTItem.tsx
 ┃ ┃ ┃ ┣ 📜RelatedNFT.stories.tsx
 ┃ ┃ ┃ ┣ 📜RelatedNFT.tsx
 ┃ ┃ ┃ ┣ 📜SaleDeleteModal.tsx
 ┃ ┃ ┃ ┣ 📜SaleModal.stories.tsx
 ┃ ┃ ┃ ┣ 📜SaleModal.tsx
 ┃ ┃ ┃ ┣ 📜Title.stories.tsx
 ┃ ┃ ┃ ┣ 📜Title.tsx
 ┃ ┃ ┃ ┣ 📜Transaction.stories.tsx
 ┃ ┃ ┃ ┣ 📜Transaction.tsx
 ┃ ┃ ┃ ┗ 📜TransactionItem.tsx
 ┃ ┃ ┣ 📂feedback
 ┃ ┃ ┃ ┣ 📜FeedbackBanner.stories.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackBanner.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackComment.stories.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackComment.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackInputBox.stories.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackInputBox.tsx
 ┃ ┃ ┃ ┣ 📜FeedbackTitle.stories.tsx
 ┃ ┃ ┃ ┗ 📜FeedbackTitle.tsx
 ┃ ┃ ┣ 📂footer
 ┃ ┃ ┃ ┣ 📜Footer.stories.tsx
 ┃ ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┃ ┣ 📂list
 ┃ ┃ ┃ ┣ 📜Category.stories.tsx
 ┃ ┃ ┃ ┣ 📜Category.tsx
 ┃ ┃ ┃ ┣ 📜Checkbox.stories.tsx
 ┃ ┃ ┃ ┣ 📜Checkbox.tsx
 ┃ ┃ ┃ ┣ 📜Item.tsx
 ┃ ┃ ┃ ┣ 📜ItemSkeleton.stories.tsx
 ┃ ┃ ┃ ┣ 📜ItemSkeleton.tsx
 ┃ ┃ ┃ ┣ 📜Skeleton.stories.tsx
 ┃ ┃ ┃ ┗ 📜Skeleton.tsx
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┃ ┗ 📜Banner.tsx
 ┃ ┃ ┣ 📂minting
 ┃ ┃ ┃ ┣ 📜FileDropBox.stories.tsx
 ┃ ┃ ┃ ┣ 📜FileDropBox.tsx
 ┃ ┃ ┃ ┣ 📜OriginalItemImage.tsx
 ┃ ┃ ┃ ┣ 📜SearchResult.tsx
 ┃ ┃ ┃ ┣ 📜TagInputBox.stories.tsx
 ┃ ┃ ┃ ┗ 📜TagInputBox.tsx
 ┃ ┃ ┣ 📂nav
 ┃ ┃ ┃ ┣ 📜Header.stories.tsx
 ┃ ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┃ ┣ 📜MobileMenu.tsx
 ┃ ┃ ┃ ┣ 📜NavMenu.stories.tsx
 ┃ ┃ ┃ ┗ 📜NavMenu.tsx
 ┃ ┃ ┣ 📂profile
 ┃ ┃ ┃ ┣ 📜HorizonProfile.stories.tsx
 ┃ ┃ ┃ ┣ 📜HorizonProfile.tsx
 ┃ ┃ ┃ ┣ 📜Profile.stories.tsx
 ┃ ┃ ┃ ┣ 📜Profile.tsx
 ┃ ┃ ┃ ┣ 📜ProfileImg.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProfileImg.tsx
 ┃ ┃ ┃ ┣ 📜ProfileLevel.stories.tsx
 ┃ ┃ ┃ ┣ 📜ProfileLevel.tsx
 ┃ ┃ ┃ ┣ 📜ProfileNickname.stories.tsx
 ┃ ┃ ┃ ┗ 📜ProfileNickname.tsx
 ┃ ┃ ┣ 📂thumbnail
 ┃ ┃ ┃ ┣ 📜Thumbnail.stories.tsx
 ┃ ┃ ┃ ┣ 📜Thumbnail.tsx
 ┃ ┃ ┃ ┣ 📜ThumbnailGrid.stories.tsx
 ┃ ┃ ┃ ┗ 📜ThumbnailGrid.tsx
 ┃ ┃ ┣ 📜Button.stories.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜InputBox.stories.tsx
 ┃ ┃ ┣ 📜InputBox.tsx
 ┃ ┃ ┣ 📜Introduction.stories.mdx
 ┃ ┃ ┣ 📜SubTitle.stories.tsx
 ┃ ┃ ┣ 📜SubTitle.tsx
 ┃ ┃ ┣ 📜TextAreaBox.stories.tsx
 ┃ ┃ ┣ 📜Title.stories.tsx
 ┃ ┃ ┗ 📜Title.tsx
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜Level.tsx
 ┃ ┃ ┗ 📜ScrollToTop.tsx
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜react-app-env.d.ts
 ┃ ┗ 📜Router.tsx
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜image.d.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

### **Backend**

```bash
📦backend
 ┣ 📂gradle
 ┃ ┗ 📂wrapper
 ┃ ┃ ┣ 📜gradle-wrapper.jar
 ┃ ┃ ┗ 📜gradle-wrapper.properties
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┗ 📂daram
 ┃ ┃ ┃ ┃ ┃ ┗ 📂dotore
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedBackController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MypageController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SalesController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserController.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AnswerReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DescUpdateReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackMeReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackUpdateReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemButtonReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemTrxReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemUpdateReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜NicknameUpdateReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ProfileUpdateReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleCompleteReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SalesCancelReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SalesReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SaleTrxReq.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂response
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜BaseRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackAnswerVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackDetailRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackQuestionVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemAuthorListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemButtonRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemDetailRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemImageRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemLikeRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemListVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemRelationRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemRelationVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemsRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MyDownloadListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜MyLikeListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜requestFeedbackRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜requestFeedbackVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜responseFeedbackRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜responseFeedbackVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleListVO.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SalesInfoRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserListRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserRes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AwsS3Service.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜UserService.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserServiceImpl.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AmazonS3Config.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜JpaConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜SwaggerConfig.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂db
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Answer.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Download.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Feedback.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Items.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Likes.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Sales.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Secondary.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜Taglist.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜Users.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂repository
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜AnswerRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜DownloadRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜FeedbackRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜ItemRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜LikeRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SaleRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜SecondaryRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜TagRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜UserRepository.java
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜DotoreApplication.java
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃ ┗ 📜application.properties
 ┃ ┗ 📂test
 ┃ ┃ ┗ 📂java
 ┃ ┃ ┃ ┗ 📂com
 ┃ ┃ ┃ ┃ ┗ 📂daram
 ┃ ┃ ┃ ┃ ┃ ┗ 📂dotore
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜DotoreApplicationTests.java
 ┣ 📜.gitignore
 ┣ 📜build.gradle
 ┣ 📜gradlew
 ┣ 📜gradlew.bat
 ┗ 📜settings.gradle
```
<br>

## **5️⃣ 프로젝트 결과물**

- 포팅매뉴얼
- 시연시나리오
- 중간발표자료
- 최종발표자료


## 📝 License

<br>
