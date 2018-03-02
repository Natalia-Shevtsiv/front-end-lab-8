function creatTank(obj) {
    var pageTanks = document.createElement('div');
    pageTanks.className = 'thumbnails';
    var headLine = document.createElement('h1');
    headLine.textContent = 'Most popular tanks';
    pageTanks.appendChild(headLine);
    var tanksColection = document.createElement('div');
    tanksColection.className = 'tanksColection';
    for (var i = 0; i < obj.length; i++) {
        var tank = document.createElement('a');
        tank.className = 'tank';
        tank.title = 'Click to details';
        tank.href = '#' + encodeURIComponent(obj[i].model);
        var tankImage = document.createElement('img');
        tankImage.className = 'picture';
        tankImage.src = obj[i].preview;
        tankImage.alt = obj[i].model;
        var description = document.createElement('div');
        description.className = 'description';
        description.innerHTML = '<img src=' + obj[i].country_image + ' ' + 'class="flag"' + ' '
            + 'title=' + obj[i].country + ' alt=""' + '>' + '</img>' + '  ' +
            '<span class="tankLevel"> ' + obj[i].level + '</span>' + '  ';
        var tankName = document.createElement('span');
        tankName.className = 'tankNamePreview';
        tankName.title = obj[i].model;
        tankName.textContent = obj[i].model;
        description.appendChild(tankName);
        tank.appendChild(tankImage);
        tank.appendChild(description);
        tanksColection.appendChild(tank);
    }
    pageTanks.appendChild(tanksColection);
    return pageTanks;
}
function tankDetals(tankModel) {
    for (var i = 0; i < tanks.length; i++) {
        if (tanks[i].model === tankModel) {
            console.log(tanks[i].model);
            var tankDescription = document.createElement('div');
            tankDescription.className = 'tank-details';
            var tankFullName = document.createElement('div');
            tankFullName.className = 'tankFullName';
            tankFullName.innerHTML = '<img src=' + tanks[i].country_image + ' ' + 'alt=""' + ' '
                + 'title=' + tanks[i].country + '>' + '</img>' + '  '
                + '<span class="tankName"> ' + tanks[i].model + '</span>' + '  '
                + '(level' + '  ' + tanks[i].level + ')';
            tankDescription.appendChild(tankFullName);
            var globalTankDetals = document.createElement('div');
            globalTankDetals.className = 'tankPreview';
            tankDescription.appendChild(globalTankDetals);
            var globalTankDetalsImage = document.createElement('div');
            globalTankDetals.appendChild(globalTankDetalsImage);
            var tankPreview = document.createElement('h2');
            tankPreview.textContent = 'Preview';
            globalTankDetalsImage.appendChild(tankPreview);
            var tankImage = document.createElement('img');
            tankImage.src = tanks[i].preview;
            tankImage.alt = tanks[i].model;
            globalTankDetalsImage.appendChild(tankImage);
            var globalTankDetalsTable = document.createElement('div');
            globalTankDetals.appendChild(globalTankDetalsTable);
            var tableName = document.createElement('h2');
            tableName.textContent = 'Characteristics';
            globalTankDetalsTable.appendChild(tableName);
            var tankTable = document.createElement('table');
            var table = '';
            for (var key in tanks[i].details) {
                var change = /_/g;
                var tankCharacteristics = key;
                if (change.test(tankCharacteristics)) { tankCharacteristics = tankCharacteristics.replace(change, " "); }
                table += '<tr><td>' + tankCharacteristics + '</td><td>' + tanks[i].details[key] + '</td></tr>';
            }
            tankTable.innerHTML = table;
            globalTankDetalsTable.appendChild(tankTable);
            var backToPreview = document.createElement('a');
            backToPreview.textContent = 'Back to list view';
            tankDescription.appendChild(backToPreview);
            backToPreview.onclick = function (e) {
                location.hash = "";
                return false;
            }
            return tankDescription;
        }
    }
}
var rootNode = document.getElementById("root");
var tanksPreview = creatTank(tanks);
rootNode.appendChild(tanksPreview);
var tanksPreviewDiv = document.querySelectorAll('div')[1];
window.onhashchange = function () {
    var hash = decodeURIComponent(location.hash.substring(1));
    if (hash === '') {
        var TankDiv = document.querySelectorAll('div')[1];
        root.replaceChild(tanksPreview, TankDiv);
    } else {
        var tanksPreviewDiv = document.querySelectorAll('div')[1];
        var myTankDiv = tankDetals(hash);
        root.replaceChild(myTankDiv, tanksPreviewDiv);
    }
};
