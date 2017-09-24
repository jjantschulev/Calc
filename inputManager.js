function InputManager() {
  this.viewBox = document.getElementById('resultParagraph');
  this.viewBoxContainer = document.getElementById('result');
  this.deleteButton = document.getElementById('deleteButton');
  this.viewBox.focus();
  this.viewBox.onblur = function () {
    input.viewBox.focus();
    input.setCaret()
  }
  this.viewBox.onfocus = function () {
    SoftKeyboard.hide();
  }
  this.caretPos = 0;
  this.showingAnswer = false;
  this.deleteTimeout;


  this.getCaret = function () {
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt) {
        var pos = sel.getRangeAt(0).startOffset
        this.caretPos = pos;
        return pos;
      }
      return null;
    }
    return null;
  }

  this.setCaret = function (index) {
    if(index != undefined || index != null){
      this.caretPos = index;
    }
    if(this.viewBox.childNodes.length > 0){
      var range = document.createRange();
      var sel = window.getSelection();
      range.setStart(this.viewBox.childNodes[0], this.caretPos);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      this.viewBox.focus();
    }
  }

  this.add = function (str) {
    this.viewBox.innerHTML = this.viewBox.innerHTML.splice(this.caretPos, 0, str);
    this.setCaret(this.caretPos+str.length);
    this.setScroll();
  }

  this.remove = function () {
    if(this.caretPos > 0){
      this.viewBox.innerHTML = this.viewBox.innerHTML.splice(this.caretPos-1, 1, "");
      if(this.caretPos > 1){
        this.setCaret(this.caretPos-1);
      }else{
        this.setCaret(0);
      }
    }
  }

  this.set = function (str) {

  }

  this.clear = function () {
    this.viewBox.innerHTML = "";
    this.setCaret(0);
  }

  this.setScroll = function () {
    this.viewBoxContainer.scrollLeft = this.viewBoxContainer.scrollWidth;
  }

  this.viewBox.addEventListener('click', function () {
    input.getCaret();
  });

  this.deleteButton.addEventListener('ontouchstart', function () {
    input.deleteTimeout = setTimeout(function () {
      input.clear();
    }, 500);
  });

  this.deleteButton.addEventListener('ontouchend', function () {
    clearTimeout(input.deleteTimeout);
  });


}

String.prototype.splice = function(idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
}
