# Redux를 활용한 Todo List App

To do List 앱을 리덕스를 사용한 상태관리로 구현해 보았습니다.

## 사용한 패키지
- react-router-dom : detail 페이지와 main 페이지 두 개의 페이지를 구현해 이동이 가능하도록 Router.jsx 세팅
- styled-components : styled components를 사용해 style 세팅
- redux, react-redux : state를 관리하기 위한 redux 패키지 설치 (useSelector, useDispatch)

## 추후 계획과 아쉬운 점 🥲

### 조건부 스타일링
styled-components를 활용해 조건부 스타일링을 구현할 계획이다.

### 모달 구현
삭제 버튼을 눌렀을 때 모달을 띄워 confirm을 받는 기능을 구현하고 싶었는데 못해서 아쉽다.

### 유효성 검사
페이지가 넘어갈 때 input 태그 안에 값이 있으면 확인을 받은 후 넘어가는 기능을 못해서 아쉽다.

