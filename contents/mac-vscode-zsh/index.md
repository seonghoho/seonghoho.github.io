---
date: '2024-08-06'
title: 'VS Code 터미널에서 Brew 인식 문제: 맥(Mac) OS 환경'
categories: ['VSCode', 'terminal', 'zsh']
summary: 'Mac OS 환경으로 VSCode에서의 터미널에서 Brew를 인식하지 못할 때 해결방안을 알아보자.'
thumbnail: 'mac-vscode-brew-thumbnail.png'
---

![mac-vscode-brew-thumbnail](mac-vscode-brew-thumbnail.png)

## 개요

며칠 전, 새로운 회사에 들어오면서 초기화된 맥북을 받았습니다. 모든 환경 설정을 다시 해야하는 상황이었는데, 아무래도 초기 환경 세팅을 자주하는 것은 아니다보니, 찾아보면서 하고 잊고 또 찾아보게 되었습니다. 다들 저와 마찬가지일 것이라 생각합니다 ㅎㅎ..

그래서 다음번에는 제가 작성한 게시글을 보고 세팅을 하기 위해 기록을 남기려 합니다.

## 들어가며,,

## zsh란?

> zsh(Z Shell)는 강력한 기능과 높은 사용자 맞춤 설정 가능성을 제공하는 Unix 셸 중 하나입니다.
>
> Zsh는 bash(Bourne Again Shell)를 포함한 많은 전통적인 셸의 기능을 통합하고 확장하며, 풍부한 기능과 편리한 사용자 경험을 제공합니다.

### zsh의 특징

1. 자동 완성(Auto-completion) : 명령어, 파일 이름, 변수, 옵션 등을 자동 완성할 수 있습니다.
2. 글로빙(Globbing): 파일 이름을 패턴 매칭으로 확장할 수 있습니다.
3. 프롬프트 테마: 사용자 정의 가능한 프롬프트 테마 시스템을 통해 셸의 모양을 자유롭게 변경할 수 있습니다. (ex> Oh My Zsh)
4. 플러그인 시스템: 다양한 플러그인을 통해 기능을 확장할 수 있습니다.
5. 히스토리 검색: 이전에 입력한 명령어를 쉽게 검색하고 사용할 수 있습니다.
6. 유닉스 셸 호환성: 대부분의 Unix 셸 스크립트와 호환되며, bash와 비슷한 문법을 사용합니다.

# 마주한 문제

`brew`도 정상 설치했고, `zsh`도 설치했는데, VSCode 내부 터미널에서는 brew 명령어를 작성했을 때 `존재하지 않는 명령어`라는 경고가 떴습니다.

`brew` 명령어가 `zsh` 셸에서 인식되지 않는 문제는 Homebrew가 설치된 경로가 `PATH` 환경 변수에 추가되지 않았기 때문일 가능성이 높습니다.

이를 해결하려면 `~/.zshrc` 파일에 Homebrew 경로를 추가해야 합니다.

## `~/.zshrc` 파일이란?

~/.zshrc 파일은 zsh(Z Shell)의 설정 파일입니다. 이 파일은 사용자가 Zsh 셸을 시작할 때마다 실행되며, 환경 변수, 프롬프트 설정, 별칭, 함수, 플러그인 등을 정의할 수 있습니다.

## `~/.zshrc` 파일에 Homebrew 경로 추가하는 방법

1. **Homebrew 경로 확인**:
   보통 Homebrew는 `/opt/homebrew/bin` (Apple Silicon 맥) 또는 `/usr/local/bin` (Intel 맥)에 설치됩니다. 어떤 경로에 설치되었는지 확인하려면 터미널에서 다음 명령어를 실행하세요

   ```sh
   which brew
   ```

   이 명령어는 `brew` 명령어의 경로를 출력합니다. 예를 들어, `/opt/homebrew/bin/brew`와 같이 나올 수 있습니다.

2. **경로 추가**:
   Homebrew가 설치된 경로를 `~/.zshrc` 파일에 추가합니다. 텍스트 편집기로 `~/.zshrc` 파일을 엽니다

   ```sh
   nano ~/.zshrc
   ```

   그런 다음 다음 줄을 파일의 끝에 추가합니다 (Homebrew 경로가 `/opt/homebrew/bin`인 경우)

   ```sh
   export PATH="/opt/homebrew/bin:$PATH"
   ```

   만약 Homebrew 경로가 `/usr/local/bin`이라면 아래 코드를 추가하면 됩니다.

   ```sh
   export PATH="/usr/local/bin:$PATH"
   ```

3. **변경 사항 적용**:
   `~/.zshrc` 파일을 저장하고 닫은 후, 다음 명령어를 실행하여 변경 사항을 적용합니다

   ```sh
   source ~/.zshrc
   ```

4. **터미널 재시작**:
   3번까지 진행을 하고도 해결이 되지 않는다면, VSCode를 재실행 해보시기 바랍니다.

위 단계를 수행한 후에도 문제가 해결되지 않으면, Homebrew가 제대로 설치되지 않았을 수도 있습니다.

그런 경우 Homebrew를 다시 설치해 보시기 바랍니다.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## 마무리

이러한 과정을 통해 VSCode 내부 터미널에서 `brew` 명령어를 사용할 수 있게 만들 수 있습니다.

## 참고 링크

- [Homebrew 공식 사이트](https://brew.sh/)
- [zshrc 파일 설정 관련 자료](https://sourabhbajaj.com/mac-setup/iTerm/zsh.html)
