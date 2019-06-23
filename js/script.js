'use strict';

window.onload = function () {

    var app = new App();
};

class App {
    constructor(){
        this.getLog();

    }

    getLog(){
        let logArea = document.getElementById('log-area');
        let request = 'index.php';
        this.ajaxPost(request,'coll',function (data) {
            //logArea.innerText = data;
        },function (data) {
            //logArea.innerText = data;
        });

    }

    ajaxPost(request,vars,callback,onerror){
        var xhr = new XMLHttpRequest();
        xhr.timeout = 1000;
        xhr.open('POST',request,true);
        xhr.send();

        xhr.ontimeout = function() {
            onerror( 'Извините, запрос превысил максимальное время' );
        }
        xhr.onload = function () {
            callback(xhr.responseText);
        }

    }

}

