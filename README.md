# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Setup

### 1. 설치 항목
```shell
# 글로벌 디펜던시 설치
# Node.js가 root 권한으로 설치되어 있다면 sudo 명령을 추가하여 실행
$ npm install -g @lintest/cli sonarqube-scanner flamebearer

# Node.js가 root 권한으로 설치되어 있을 때에만 아래 명령어 실행
# 그렇지 않다면 실행하지 않음
$ sudo npm install -g @lintest/rules-mornya

$ cd mornya-ui
$ npm install # peer-deps 오류 발생시 --force 옵션 추가

# "npm install"시 실행되나, 오류 등으로 미실행될 경우에만 아래 명령어 실행
$ lintest install

# IDE에서 참조하는 ESLint 및 Jest 환경설정 파일을 export 해주므로,
# IDE 환경설정에서 해당 export 되는 파일을 참조하게 해주면 된다
$ lintest export
```

## Code Quality improvements

### Lints and fixes files
[Lintest CLI](https://www.npmjs.com/package/@lintest/cli) 를 이용하여 코드 린트 및 테스트케이스 수행.

### Check indicator analysis by SonarQube
정적도구 지표분석은 [Sonar Cloud](https://sonarcloud.io)에 등록된 프로젝트에서 확인 할 수 있다.<br>
> 분석내용 확인은 `sonar-project.properties` 파일 내 정의 된 URL로 접근하여 projectKey에 해당하는 프로젝트에서 한다. 즉, 해당 애플리케이션은 아래 URL에서 확인 가능하다.<br>
> https://sonarcloud.io/summary/overall?id=mornya-ui

수동으로 지표분석 데이터를 전송하기 위해서는 로컬에서 아래 명령을 실행하면 분석 후 리포팅이 전달된다.<br>
```bash
$ npm run sonar
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License
프로젝트 라이센스는 [LICENSE](LICENSE) 파일 참조.
