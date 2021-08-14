## 1. DOM

- 텍스트 파일로 만들어져 있는 웹 문서를 브라우저에 렌더링하려면 웹 문서를 브라우저가

    이해할 수 있는 구조로 메모리에 올려야 한다.

- 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수

    있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다.

<br >

## 2. DOM tree

- DOM tree는 브라우저가 HTML 문서를 로드한 후 파싱하여 생성하는 모델을 의미한다.

    객체의 트리로 구조화되어 있기 때문에 DOM tree라 부른다.

<hr >

## 3. DOM Query / Traversing (요소에의 접근)

### 3.1 하나의 요소 노드 선택

- document.getElementById(id)

    - id 어트리뷰트 값으로 요소 노드를 한 개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.

    - Return: HTMLElement를 상속받은 객체

    - 모든 브라우저에서 동작

- document.querySelector()

    - CSS 셀렉터를 사용하여 요소 노드를 한 개 선택한다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.

<br >

### 3.2 여러 개의 요소 노드 선택

- document.getElementByClassName()

    - class 어트리뷰트 값으로 요소 노드를 모두 선택한다.

    - Return: HTMLCollection (live)

- document.getElementsByTagName()

    - 태그명으로 요소 노드를 모두 선택한다.

    - Return: HTMLCollection (live)

    - 모든 브라우저에서 동작

- document.querySelectorAll()

    - 지정된 css 선택자를 사용하여 요소 노드를 모두 선택한다.

<br >

### 3.3 DOM Traversion(탐색)

- parentNode

    - 부모 노드를 탐색한다.

- firstChild, lastChild

    - 자식 노드를 탐색


<hr >

## 4. DOM Manipulation (조작)

### 4.1 텍스트 노드에의 접근/수정

- 요소의 텍스트는 텍스트 노드에 저장되어 있다.

1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다.

2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다.

3. 텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다.

4. nodeValue 를 이용하여 텍스트를 수정한다.


