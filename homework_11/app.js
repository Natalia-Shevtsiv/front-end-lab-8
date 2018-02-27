var rootNode = document.getElementById("root");
var iconFolder = '<i class="material-icons" style="color: #f0b111">folder</i> ';
var iconFile = '<i class="material-icons" style="color:#aba9a4" >insert_drive_file</i> ';
function createTreeDom(obj) {
  if (obj.length == null) return;
  var ul = document.createElement('ul');
  for (var i = 0; i < obj.length; i++) {
    var li = document.createElement('li');
    if (obj[i].folder) {
      li.className = "folder hidden";
      li.innerHTML = '<div>' + iconFolder + obj[i].title + '</div>';
      if (obj[i].children == null || !obj[i].children) {
        var new_li = document.createElement('li');
        new_li.innerHTML = "<em>Folder is empty</em>";
        li.appendChild(new_li);
      }
    } else {
      li.className = "file";
      li.innerHTML = '<div>' + iconFile + obj[i].title + '</div>';
    }
    if (obj[i].children) {
      var childrenUl = createTreeDom(obj[i].children);
      li.appendChild(childrenUl);
    }
    ul.appendChild(li);
  }
  return ul;
}
rootNode.appendChild(createTreeDom(structure));

rootNode.onmouseover = function (event) {
  var target;
  switch (event.target.tagName) {
    case 'I':
      target = event.target.parentNode;
      break;
    case 'DIV':
      target = event.target;
      break;
    case 'LI':
      target = event.target.querySelector('div');
      break;
    default: return;
  }
  if (target) {
    target.style.background = '#d4d4d4';
  }
};
rootNode.onmouseout = function (event) {
  var target;
  switch (event.target.tagName) {
    case 'I':
      target = event.target.parentNode;
      break;
    case 'DIV':
      target = event.target;
      break;
    case 'LI':
      target = event.target.querySelector('div');
      break;
    default: return;
  }
  if (target) {
    target.style.background = '';
  }
};

var tree = document.getElementsByTagName('ul')[0];
tree.onclick = function (event) {
  var target;
  switch (event.target.tagName) {
    case 'I':
      target = event.target.parentNode.parentNode;
      break;
    case 'DIV':
      target = event.target.parentNode;
      break;
    case 'LI':
      target = event.target;
      break;
    default: return;
  }
  if (target.classList.contains('folder')) {
    target.classList.toggle('hidden');
    var img = target.querySelector('i');
    if (img.innerHTML === 'folder_open') {
      img.innerHTML = 'folder';
    } else { img.innerHTML = 'folder_open'; }
  }
}
