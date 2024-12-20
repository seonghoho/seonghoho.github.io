---
date: '2024-08-09'
title: '[CSS] PointerEvent 속성에 대해'
categories: ['CSS', 'FrontEnd']
summary: '모든 Event를 포함하는 PointerEvent 속성에 대해 알아보자.'
thumbnail: 'pointer-event-thumbnail.png'
---

## 서론

웹 애플리케이션에서 사용자와의 상호작용을 구현할 때, 전통적으로 마우스 이벤트를 웹에서 널리 사용되어져 왔습니다만, 기술의 발전과 크로스 플랫폼 지원을 통해 터치 스크린과 스타일러스 펜 등 다양한 입력 장치의 사용이 증가함에 따라, `PointerEvent`가 등장했습니다. 이번 포스트에서는 `PointerEvent`가 무엇인지, 어떻게 작동하는지, 그리고 `MouseEvent`와의 차이점에 대해 알아보겠습니다.

(참고로 스타일러스는 태블릿 용 펜을 의미합니다.)

## PointerEvent란?

`PointerEvent`는 여러 입력 장치(마우스, 터치, 스타일러스 펜 등)에서 발생하는 이벤트를 통합하여 처리할 수 있는 웹 API입니다. `PointerEvent`는 사용자 입력을 더 일관되게 처리할 수 있도록 설계되었으며, 다양한 입력 장치의 정보를 하나의 이벤트 객체에서 얻을 수 있습니다.

## PointerEvent 주요 속성

`PointerEvent` 객체는 다음과 같은 주요 속성들을 포함합니다:

- **`pointerId`**:  
  이벤트를 발생시킨 포인터의 고유 식별자입니다. 같은 입력 장치에서 발생한 여러 포인터를 구별하는 데 사용됩니다.

- **`pointerType`**:  
  포인터의 유형을 나타냅니다. 가능한 값으로는 `"mouse"`, `"pen"`, `"touch"`가 있습니다.

- **`isPrimary`**:  
  현재 포인터가 주 포인터인지 여부를 나타내는 부울 값입니다. 주 포인터는 멀티 터치 상황에서 가장 먼저 활성화된 포인터입니다.

- **`width`**:  
  포인터의 너비를 나타냅니다. 일반적으로 터치 입력의 경우 사용됩니다.

- **`height`**:  
  포인터의 높이를 나타냅니다. 터치 입력에서 유용합니다.

- **`pressure`**:  
  포인터의 압력을 나타냅니다. 터치 입력이나 스타일러스 입력에서 사용됩니다.

- **`tiltX`** 및 **`tiltY`**:  
  포인터의 기울기를 나타냅니다. 스타일러스 입력에서 사용됩니다.

- **`clientX`** 및 **`clientY`**:  
  뷰포트의 왼쪽 위 모서리에서부터 포인터의 위치를 나타냅니다.

- **`pageX`** 및 **`pageY`**:  
  페이지의 왼쪽 위 모서리에서부터 포인터의 위치를 나타냅니다.

- **`screenX`** 및 **`screenY`**:  
  화면의 왼쪽 위 모서리에서부터 포인터의 위치를 나타냅니다.

- **`offsetX`** 및 **`offsetY`**:  
  이벤트가 발생한 요소의 왼쪽 위 모서리에서부터 포인터의 위치를 나타냅니다.

- **`movementX`** 및 **`movementY`**:  
  이전 이벤트와 현재 이벤트 간의 포인터의 이동 거리를 나타냅니다.

## Event에서의 속성 상속

### `Event` ⊂ `UIEvent` ⊂ `MouseEvent` ⊂ `PointerEvent`

- **`Event`**: 모든 이벤트 객체의 기본 클래스입니다. 기본적인 이벤트 처리와 관련된 속성과 메서드를 제공합니다.
- **`UIEvent`**: `Event`를 상속하며, 사용자 인터페이스 관련 속성들을 추가합니다. 예를 들어, `view` 속성은 이벤트가 발생한 `window` 객체를 나타냅니다.
- **`MouseEvent`**: `UIEvent`를 상속하며, 마우스 관련 속성(예: `button`, `clientX`, `clientY`)을 추가합니다. 마우스 클릭, 더블 클릭, 드래그와 같은 이벤트를 처리합니다.
- **`PointerEvent`**: `MouseEvent`를 상속하며, 추가적으로 포인터 장치에 대한 속성(예: `pointerId`, `pointerType`)을 제공합니다. `PointerEvent`는 터치, 스타일러스, 마우스 등 다양한 입력 장치의 이벤트를 통합적으로 처리할 수 있습니다.

## 이벤트 처리에 대해

이 과정에서 성능과 효율성에 대해 의문이 들었습니다.

PointerEvent가 모든 Event의 속성을 포함하고 있다면, 마우스만 사용하는 상황에서 PointerEvent로 타입을 지정했다면 불필요한 속성을 호출하여 성능을 저하시킬 가능성이 있지 않을까 하는 고민을 해보았습니다. 그래서 브라우저의 Event 처리 과정에 대해 알아보게 되었습니다.

브라우저는 사용자의 입력 장치에 따라 자동으로 적절한 이벤트 객체를 생성한다고 합니다. 마우스 클릭, 터치, 스타일러스 펜 입력 등의 이벤트를 각각 `MouseEvent`와 `PointerEvent`중 하나로 인식되어 Event 객체를 전달한다고 합니다.

## PointerEvent의 장단점

### 장점

- **다양한 입력 장치 지원**: `PointerEvent`는 마우스, 터치, 스타일러스 등 다양한 입력 장치를 통합적으로 처리할 수 있습니다.
- **일관성 있는 API**: 다양한 입력 장치에서 동일한 이벤트 API를 사용하므로 코드의 일관성을 유지할 수 있습니다.
- **추가 속성**: `PointerEvent`는 입력 장치의 특성을 보다 자세히 제공하는 속성들을 포함하고 있어, 더 세밀한 입력 처리가 가능합니다.

### 단점

- **브라우저 호환성**: 일부 오래된 브라우저는 `PointerEvent`를 지원하지 않을 수 있으며, 이 경우 `MouseEvent`와 `TouchEvent`를 사용해야 합니다.
- **복잡성**: `PointerEvent`는 다양한 입력 장치를 지원하므로, 특정 입력 장치에 대한 세부적인 동작을 구현할 때 복잡해질 수 있습니다.

## 결론

`PointerEvent`는 다양한 입력 장치를 통합적으로 처리할 수 있어 일관된 사용성을 제공할 수 있게 되었습니다. 하지만, 브라우저 호환성의 문제를 고려하여 적절한 사용이 필요할 것 같습니다.

## 참고 링크

- [MDN Web Docs: PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent)
- [MDN Web Docs: MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
- [MDN Web Docs: UIEvent](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent)
