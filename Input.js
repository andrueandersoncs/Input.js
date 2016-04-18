var Input = (function() {
  var Input = {};
  
  Input.Mouse = (function() {
    var Mouse = {};
    
    var x = 0;
    var y = 0;
    var dx = 0;
    var dy = 0;
    var left = 0;
    var right = 0;
    
    Mouse.IsButtonDown = function(buttonName) {
      if(buttonName === "left") {
        return left === 1;
      } else if(buttonName === "right") {
        return right === 1;
      } else {
        return false;
      }
    }
    
    Mouse.IsButtonUp = function(buttonName) {
      if(buttonName === "left") {
        return left === 0;
      } else if(buttonName === "right") {
        return right === 0;
      } else {
        return true;
      }
    }
    
    Mouse.GetPosition = function() {
      return {x: x, y: y};
    }
    
    Mouse.GetDelta = function() {
      return {x: dx, y: dy};
    }
    
    Mouse.DisableContextMenu = function() {
      document.addEventListener("contextmenu", function(e) {
        e.preventDefault();
      })
    }
    
    document.addEventListener("mousemove", function(e) {
      dx = e.clientX - x;
      dy = e.clientY - y;
      x = e.clientX;
      y = e.clientY;
    });
    
    document.addEventListener("mousedown", function(e) {
      if(e.button === 0) {
        left = 1;
      } else if(e.button === 2) {
        right = 1;
      }
    });
    
    document.addEventListener("mouseup", function(e) {
      if(e.button === 0) {
        left = 0;
      } else if(e.button === 2) {
        right = 0;
      }
    });
    
    return Mouse;
  })();
  
  Input.Keyboard = (function() {
    var Keyboard = {};
    
    var keys = [];
    keys.length = 200;
    keys.fill(0);
    
    Keyboard.IsKeyDown = function(key) {
      if(keys[(key).toUpperCase().charCodeAt(0)] === 1) {
        return true
      } else {
        return false;
      }
    }
    
    Keyboard.IsKeyUp = function(key) {
      if(keys[(key).toUpperCase().charCodeAt(0)] === 0) {
        return true
      } else {
        return false;
      }
    }
    
    Keyboard.GetKeysDown = function() {
      var keysDown = [];
      for(var i = 0; i < keys.length; i++) {
        if(keys[i] === 1) {
          keysDown.push(String.fromCharCode(i));
        }
      }
      return keysDown;
    }
    
    document.addEventListener("keydown", function(e) {
      keys[e.keyCode] = 1;
    });
    document.addEventListener("keyup", function(e) {
      keys[e.keyCode] = 0;
    });
    
    return Keyboard;
  })();
  
  return Input;
})();