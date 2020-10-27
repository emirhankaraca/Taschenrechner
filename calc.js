var anzeige = null;
var gleichung = null;
var value_save = null;
var operation = null;

function load() {
    anzeige = document.getElementById('anzeige');
    gleichung = document.getElementById('gleichung');

}
function ce() {
    anzeige.innerHTML = "";

}
function c() {
    anzeige.innerHTML = "";
    gleichung.innerHTML = "";
    value_save = null;

}
function back() {
    

}
function num(num) {
    anzeige.innerHTML += num;
}
function dot() {
    var content = anzeige.innerHTML;
    var got_dot = content.indexOf('.');

    if (got_dot == -1) {
        anzeige.innerHTML += '.';
    }

}
function add() {
    if (anzeige.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(anzeige.innerHTML)
            gleichung.innerHTML += anzeige.innerHTML + '+';
        } else {
            gleichung.innerHTML = '(' + gleichung.innerHTML + ') + ';
        }
        anzeige.innerHTML = "";
        operation = 0;
    }
}
function sub() {
    if (anzeige.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(anzeige.innerHTML)
            gleichung.innerHTML += anzeige.innerHTML + '-';
        } else {
            gleichung.innerHTML = '(' + gleichung.innerHTML + ') - ';
        }
        anzeige.innerHTML = "";
        operation = 1;
    }
}
function mul() {
    if (anzeige.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(anzeige.innerHTML)
            gleichung.innerHTML += anzeige.innerHTML + '*';
        } else {
            gleichung.innerHTML = '(' + gleichung.innerHTML + ') * ';
        }
        anzeige.innerHTML = "";
        operation = 2;
    }
}
function div() {
    if (anzeige.innerHTML) {
        if (value_save == null) {
            value_save = parseFloat(anzeige.innerHTML)
            gleichung.innerHTML += anzeige.innerHTML + '/';
        } else {
            gleichung.innerHTML = '(' + gleichung.innerHTML + ') /';
        }
        anzeige.innerHTML = "";
        operation = 3;
    }
}
function result() {
    var value2 = null;
    var content = anzeige.innerHTML;
    var result = null;

    if (value_save != null && content) {
        value2 = parseFloat(content);
        gleichung.innerHTML += value2 + '=';

        switch (operation) {
            case 0:
                result = value_save + value2;
                break;
            case 1:
                result = value_save - value2;
                break;
            case 2:
                result = value_save * value2;
                break;
            case 3:
                if (value2 != 0) {
                    result = value_save / value2;
                } else {
                    alert('You can not divide by zero!');
                }
                break;
        }
        gleichung.innerHTML += result;
        anzeige.innerHTML = result;
        value_save = result;
    }
}



