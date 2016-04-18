// Code goes here
var mousePosition = document.createElement("h3");
var mouseDelta = document.createElement("h3");
var mouseDown = document.createElement("h3");
var keyDown = document.createElement("h3");

Input.Mouse.DisableContextMenu();
document.documentElement.appendChild(mousePosition);
document.documentElement.appendChild(mouseDelta);
document.documentElement.appendChild(mouseDown);
document.documentElement.appendChild(keyDown);

function loop() {
  window.requestAnimationFrame(loop);
  
  if(Input.Mouse.IsButtonDown("left")) {
    mouseDown.innerHTML = "Mouse Button Down: left";
  } else if(Input.Mouse.IsButtonDown("right")) {
    mouseDown.innerHTML = "Mouse Button Down: right";
  } else {
    mouseDown.innerHTML = "Mouse Button Down: none";
  }
  
  var keysDown = Input.Keyboard.GetKeysDown();
  if(keysDown.length > 0) {
    keyDown.innerHTML = "Keys Down: ";
    for(var i = 0; i < keysDown.length; i++) {
      keyDown.innerHTML = keyDown.innerHTML + keysDown[i];
    }
  } else {
    keyDown.innerHTML = "Keys Down: none";
  }
  
  mousePosition.innerHTML = "Mouse Position: X:" + Input.Mouse.GetPosition().x + " Y:" + Input.Mouse.GetPosition().y;
  mouseDelta.innerHTML = "Mouse Delta: X:" + Input.Mouse.GetDelta().x + " Y:" + Input.Mouse.GetDelta().y;
  
}
loop();
