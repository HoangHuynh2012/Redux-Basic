# Note

# FAKE API

https://reqres.in/

# Configure import alias

https://koprowski.it/import-alias-in-react-native-and-vscode/

# Json icon

https://icomoon.io/

# Optimize image

https://imageoptim.com/mac

# Over API

https://overapi.com/

# ES6

https://github.com/lukehoban/es6features

# Javascript Interview Questions

https://www.interviewbit.com/javascript-interview-questions?fbclid=IwAR3140uhzPwvaFY60t2qb66Gj-bx_R0JvYr2_dcshC0zMpX831tRAHT-3sI

# Json server

https://github.com/typicode/json-server

# Design pattern

https://github.com/ildfreelancer/design-pattern

# JavaScript Style Guide()

https://github.com/airbnb/javascript

# Template React native

https://github.com/MasonLe2497/BoilerplateReactNative

# React native not running on M1

https://gist.github.com/ildfreelancer/c161628115e590749599ceb6e623125c

# Update version React Native

https://react-native-community.github.io/upgrade-helper/

# Lifecycle React Native

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

- Mounting:
  - componentWillMount: được thực thi trước khi giao diện được render ra màn hình (tạo ra các state và giao diện)
  - componentDidMount: được thực thi sau khi render đầu tiên được sinh ra ở phía client (dùng để call API, setTimeout, setInterval, thay đổi state, props,... )
- Update:
  - componentWillUpdate: được gọi trước khi component được rendering (update state, props)
  - componentDidUpdate: được gọi sau khi component được rendering ( sau khi re-render thành công)
- Unmount:
  - componentWillUnmount: được gọi sau khi component unmount từ dom ( bước cuôi xong hết mọi thứ)

# Props

- Props là cách để bạn có thể truyền dữ liệu từ component cha xuống component con.
- Example:
  - ```
    <ClickMe name="Click me" />
    ```
  - ```
    const ClickMe = (props) => {
      <View>
      <Text>props.name</Text>
      </View>
      }
    ```

# State

- State dùng để quản lý trạng thái ở mức độ component và state thì có thể thay đổi

# Components

- là các thực thể độc lập, tự duy trì mà mô tả một phần giao diện người dùng của bạn. Giao diện người dùng của một ứng dụng có thể chia thành các component nhỏ hơn, mỗi component sẽ có cấu trúc, code, API riêng của nó. Kiến trúc component cho phép bạn nghĩ đến từng thành phần cô lập với nhau. Mỗi component có thể cập nhật mọi thứ trong phạm vi của nó mà không cần phải quan tâm đến việc nó ảnh hưởng đến các component khác như thế nào. Các components cũng có thể tái sử dụng.

# React Hooks ( React version >= 16.8)

## useState

- Quản lí state của function component
- Gồm 2 phần là tên của state và 1 method để cập nhật lại state
- Muốn thay đổi trên giao diện thì sử dụng useState thay vì useRef
- Example
  - ```
    const [count, setCount] = useState(0) or const [count, setCount] = useState(() => {
      //function
      });
    ```
  - ```
    setCount(count + 1);
    ```

## useEffect

- Sử dụng khi :
  - Call API
  - Các sự kiện (click, scroll, ...)
  - Thao tác DOM
  - setTimeout, setInterval, ...
- Có 2 tham số là 1 function và 1 dependencies.
- Luôn luôn chạy khi component được mount.
- Có 3 dependencies chính là [], [dependencies] và không truyền
- Example
  - ```
    useEffect(() => {
    //componentDidMount & componentDidUpdate
    // your code
    return () =>{
    //componentWillUnMount
    }
    },[] or [dependencies] or )
    ```

## useMemo

- Chỉ sử dụng khi tính toán nặng.
- Có 2 tham số là 1 function và 1 dependencies.
- Tránh chạy các hàm tính toán lại nếu k có sự thay đổi của dependencies.
- Example
  - ```
    const example = useMemo(() => {
      // function
      },[dependencies])
    ```

## useRef

- Lưu lại tham chiếu
- Truy xuất vào DOM
- Không bị khởi tạo lại như object
- Không làm re-render như useState
- Example
  - ```
    const example = useRef(0);
    ```
  - ```
    example.current;
    ```

## useCallback

- Tránh gán lại tham chiếu cho function
- Không tạo lại tham chiếu mới
- Xài khi function đó được truyền từ cha và con
- Example
  - ```
    const example = useCallback(() => {
     // function
     })
    ```

## useContext

- Truyền giá trị từ component cha đến component cháu mà không cần qua props và không đi qua component con
- Example

```
  import React, {createContext} from 'react';

  const ThemeContext = React.createContext();

  const example = () => {
    <ThemeContext.Provider value='dark'>
     <View>
        // your code
     </View>
    </ThemeContext.Provider>
  }

How to Use It

  import {useContext} from 'react';

  const theme = useContext(ThemeContext);
```

# React.Memo

- Lưu input của component đó khi có sự thay đổi prop mới render lại
- Example
  - ```
    const example = React.memo((props) {
      // return
      });
    ```

# Redux Basic

 <img src="https://i.2kvn.com/img/vib-2021-3eca7a19-82be-4c9f-8bfc-cbeac838106b.png">
 https://redux.js.org/
- Redux là một vùng chứa trạng thái có thể dự đoán được hay còn biết đến là một thư viện của JavaScript. Cũng có thể là một nơi để lưu data local. Kiểu từ màn hình A -> màn hình B --> màn hình C. Chúng ta gửi 1 cái dữ liệu từ A --> C thì bàn đầu phải gửi cho B mà B đâu có cần xài đâu. Nên ta lưu vào trong redux và ai cần thì vào đó lấy
- Gồm 3 phần chính:
  - Action: Nơi mà mình định nghĩa cho các hành động mà mình sẽ sử dụng trong redux (kiểu khai báo tên hành động để sau này mình xử dụng lại ấy)
   ```
  export const ADD_ITEM = 'ADD_ITEM';
  export const DELETE_ITEM = 'DELETE_ITEM';
  export const addItem = value => {
    return {
      type: ADD_ITEM,
      payload: value,
    };
  };
  export const deleteItem = value => {
    return {
      type: DELETE_ITEM,
      payload: value,
    };
  };
```
  - Reducer: đây là nơi mình sẽ thay đổi các state cục bộ dựa theo các acion khác nhau( nơi được gọi là nhận và xử lí state). Thường mình muốn lưu cái gì trong redux thì khai báo ở đây (token, rồi data local). Lúc nào cần 1 data hoặc thay đổi data đó thì chỉ cần gọi đến reducer thôi.
   ```
  const initialState = {
    todoList: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
    ],
  };
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {...state, todoList: [...state.todoList, action.payload]};
      case 'DELETE_ITEM':
        return {
          ...state,
          todoList: [
            ...state.todoList.filter(item => item?.id !== action.payload.id),
          ],
        };
      default:
        return state;
    }
  };

```
  - Store: : Là nơi quản lý State, cho phép truy cập State qua getState(), update State qua dispatch(action), đăng kí listener qua subscribe(listener). Kiểu đây là nơi tạo ra vùng chứa để lưu lại state. Ví dụ dưới đây là xài AsyncStorage để lưu data vào data local ( dạng SQLITE) và dùng redux-persist để gắn async-storage và redux
  ```
  import {createStore} from 'redux';
  import {userReducer} from './reducers';
  import {persistStore, persistReducer} from 'redux-persist';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, userReducer);

  export const configureStore = () => {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return {store, persistor};
  };
```
  - Config ở file App.js thì xem thêm trên doc nha
  - Sử dụng: 
    - import các action và react-redux
    - const dispatch = useDispatch();
      const list = useSelector(state => state.your_list); (đây là code khai báo data local lấy từ trong redux ra.)
    - dispatch(addItem(payload)); ( đây là ví dụ khi gọi action addItem thì redux sẽ xem trong Reducer xem có action type nào là addItem sau đó đi sửa state tương ứng như trong Reducer thành payload ```  
    case 'ADD_ITEM':
        return {...state, todoList: [...state.todoList, action.payload]}; ```)
```
Link : https://github.com/hoanghuynh2012/Redux-Basic
# Scale font in numbers

```

Text.defaultProps = {
...(Text.defaultProps || {}),
allowFontScaling: true,
maxFontSizeMultiplier: ${number},
};
TextInput.defaultProps = {
...(TextInput.defaultProps || {}),
allowFontScaling: true,
maxFontSizeMultiplier: ${number},
};

```

# Axios request not working in IOS simulator (React Native)

- Update your Info.plist with :

```

<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>

```

# Run device by Wifi

Connect device via wifi
http://facebook.github.io/react-native/docs/running-on-device.html#method-2-connect-via-wi-fi

1. Connect your mobile device via usb (just this once)
2. Establish a port with your mobile device using 'adb tcpip <port number>'. eg. adb tcpip 5555
3. Remove USB and 'adb connect <mobile device ip><above mentioned port number>'. Eg . adb connect 192.160.0.124:5555
4. 'React-native run-android' in your project folder

# adb

- adb device
- adb logcat

# Terminal command

https://tichil.notion.site/Nh-ng-c-u-l-nh-Terminal-h-u-ch-52054b94453e4d9fa7b430f5d616d993
