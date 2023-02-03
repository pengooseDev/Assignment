# Assignment1

---

### 분리한 컴포넌트

재사용이 가능한 컴포넌트는 components 폴더에 작성.
Board.tsx : Pending과 Done의 board.
Card.tsx : 각 Board가 갖는 task를 렌더링하는 컴포넌트.

---

# 유의사항

- 컴포넌트의 재사용을 고려한다.
- User의 Intent에 따른 State와 View 변화에 집중

# 기능 명세서

### UI / UX

- [x] Theme Toggle 구현

  - [x] Theme Toggle Button 구현
    - [x] label과 htmlFor을 이용한 커스텀 버튼으로 구현

- [x] Nav Container 구현 (floating)
  - [x] Add Intent 발생시 Input Modal창 토글

### ToDo

- [x] toDo, Done Board 구현
- [x] board title을 렌더링한다.

  - [x] Layout 구현

- [ ] task 추가 기능 구현

  - [x] layout 구현
  - [x] atom 생성
  - [x] addToggle mount / unMount motion 구현
  - [x] toggle되는 modal 컴포넌트 구현
    - [x] Overlay 생성
    - [x] Overlay motion 생성
    - [x] modal 컴포넌트 변경 motion 구현
  - [x] onSubmit일때 userInput을 state에 저장하기

- [x] task를 받아와 렌더링 하는 재사용 가능한 컴포넌트 구현
- [x] task 삭제 기능 구현
- [x] task 완료 상태 변경

### Fix

- [x] 컴포넌트 key추가
- [x] toggleAttom default 값 변경
- [x] preventDrag 추가
- [x] 글자 수 많아질 때, overflow 핸들링
