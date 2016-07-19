Определение типов **TypeScript** для стандартной библиотеки **JavaScript** для работы с **ВКонтакте**.
```TypeScript
VK.init(function () { 
    // success 
    VK.callMethod('showInviteBox');
    VK.api('account.getAppPermissions', null, function (data) { console.log(data); });
    // etc
  }, function () {
    // error
  }, '5.31');
```