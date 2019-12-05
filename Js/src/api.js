window.JSBridge = {};

window.JSBridge.callJS = (action, params, whoAmI) => {
  params = JSON.parse(JSON.stringify(params));
  return window.JSBridge[action](params, whoAmI);
};

JSBridge.canBack = (params, whoAmI) => {
  let result = {
    can: false,
    target: 'prev'
  };
  return result;
}
