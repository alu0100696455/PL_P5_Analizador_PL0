'use strict';
$(document).ready(function() {
  var dropZone, fileSelect, handleDragOver, handleDrop, handleFileSelect;
  dropZone = document.getElementById('INPUT');
  handleDrop = function(evt) {
    var files, reader;
    evt.stopPropagation();
    evt.preventDefault();
    files = evt.dataTransfer.files;
    reader = new FileReader;
    reader.onload = function(event) {
      document.getElementById('INPUT').value = event.target.result;
    };
    reader.readAsText(files[0], 'UTF-8');
    evt.target.style.background = 'white';
  };
  handleDragOver = function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
    evt.target.style.background = '#070433';
  };
  handleFileSelect = function(evt) {
    var files, reader;
    files = evt.target.files;
    reader = new FileReader;
    reader.onload = function(event) {
      document.getElementById('INPUT').value = event.target.result;
    };
    reader.readAsText(files[0], 'UTF-8');
  };
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('drop', handleDrop, false);
  fileSelect = document.getElementById('select');
  fileSelect.addEventListener('change', handleFileSelect, false);
});

// ---
// generated by coffee-script 1.9.2
