- NativeBridge: Native注入WebView的对象
- JSBridge: JS 暴露在WebView的对象

### JS调用Native方式

NativeBridge.callNative(action, params, whoCare)

### Native调用JS方式

JSBridge.callJS(action, params, whoAmI)

**其中，各参数含义如下：**

- action: 字符串，希望Native/JS执行的操作
- params: JSON对象，要传给Native/JS的数据
- whoCare: 数值，表示JS希望哪个端响应 （0: Android, 1: IOS）
- whoAmI: 数值，表示哪个端调用JS （0: Android, 1: IOS）

