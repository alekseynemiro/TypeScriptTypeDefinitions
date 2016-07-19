```TypeScript
/// <reference path="bootstrap-switch.d.ts" /> 

$(document).ready(function () {
  $('.delete').bootstrapSwitch({
    onText: '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>',
    offText: '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>',
    offColor: 'default',
    onColor: 'danger',
    onSwitchChange: function (event, state: boolean) {
      console.log(state);
    }
  });
});
```