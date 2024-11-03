---
date: '2024-07-21'
title: 'TypeScript의 interface와 type의 공통점과 차이점'
categories: ['TypeScript', 'interface', 'type']
summary: 'TypeScript를 사용할 때 마주한 interface와 type에 대해 알아보자'
thumbnail: 'type-interface-thumbnail.png'
---

## 개요

TypeScript를 사용하다 보면 `interface`와 `type`을 자주 접하게 됩니다.

이 두 가지는 타입 선언을 위해 사용되며, 컴파일 타임에만 존재한다는 공통점이 있습니다.

이번에는 `interface`와 `type`의 개념, 접근성, 사용 방법에 대해 알아보겠습니다.

## 공통점

**interface**와 **type**은 모두 타입을 정의하기 위해 사용됩니다.

이들은 TypeScript 코드가 JavaScript로 컴파일되는 과정에서 제거되며, 런타임에는 영향을 미치지 않습니다.

1. **타입 선언을 위한 도구**: `interface`와 `type` 모두 TypeScript에서 타입을 선언하는데 사용됩니다.

2. **컴파일 타임에만 존재**: 두 선언 모두 컴파일 타임에만 존재하며, JavaScript 코드로 변환될 때는 제거됩니다. 따라서, 런타임에는 영향을 미치지 않습니다.

## 차이점

1. **사용 방식**:

`interface`: 주로 객체 타입을 선언할 때 사용됩니다.

`type`: 더 유연하게 사용될 수 있으며, 기본 타입, 유니온 타입, 튜플 등을 정의할 때 사용됩니다.

2. **확장성**:

`interface`: 인터페이스는 확장이 가능하며, 여러 인터페이스를 상속받아 사용할 수 있습니다.

`type`: 타입 별칭은 확장성이 제한적입니다. 하지만 유니온 타입, 교차 타입 등을 통해 다양한 타입 조합이 가능합니다.

## 접근성

`interface`와 `type`은 선언된 파일에 따라 접근성이 달라집니다.

모듈 시스템(예: ES Modules)을 사용하는 경우, 특정 파일 내에서 선언된 `interface`나 `type`은 기본적으로 그 파일 내에서만 접근 가능합니다.

다른 파일에서 사용하려면, 반드시 `export`를 사용해 내보내고, `import`를 통해 가져와야 합니다.

## 예시

#### InterfaceExample.ts

```typescript
export interface MyInterface {
  name: string
  age: number
}
```

#### UseInterfaceExample.ts

```typescript
import { MyInterface } from './InterfaceExample'

const user: MyInterface = {
  name: '홍길동',
  age: 20,
}
```

이처럼 `export`와 `import`를 통해 타입 정보를 다른 파일에서 사용할 수 있습니다.

## 결론

**컴파일 타임에만 존재**: `interface`와 `type`은 컴파일 타임에만 존재하며, JavaScript로 컴파일된 후에는 사라집니다.

**파일 내 접근성**: 특정 파일 내에서 선언된 `interface`나 `type`은 그 파일 내에서만 접근 가능하며, 다른 파일에서 사용하려면 `export`와 `import`가 필요합니다.

**용도와 확장성**: `interface`는 주로 객체 타입 선언과 확장에 유용하며, `type`은 유연한 타입 선언에 적합합니다.

TypeScript를 사용하면서 `interface`와 `type`을 적절히 활용하면 코드의 가독성과 유지보수성을 높일 수 있습니다. 이 두 가지의 차이점과 용도를 잘 이해하고 프로젝트에 맞게 선택해 사용하는 것이 중요합니다.
