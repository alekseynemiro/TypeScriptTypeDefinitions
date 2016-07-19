```TypeScript
/// <reference path="bootstrap-colorpicker.d.ts" /> 

$(document).ready(function () {

  $('.color').colorpicker();
  
  $('.color').colorpicker('disable');
  $('.color').colorpicker('enable');
  $('.color').colorpicker('show');

  console.log($('.color').colorpicker('getValue'));  
  $('.color').colorpicker('setValue', '#cccccc');
  
  $('.color').colorpicker().on('changeColor.colorpicker', function (event: ColorPickerEventObject) {
    console.log(event.color.toHex());
  });
  
});
```

```HTML
<div class="input-group color">
  <input type="text" value="#ffffff" class="form-control" />
  <div class="input-group-addon"><i></i></div>
</div>
```