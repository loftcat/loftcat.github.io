/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
//        document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
//        document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
//        document.getElementById("removeProjectFromLocalStorage").addEventListener("click", removeProjectFromLocalStorage);
//        document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);
//        document.addEventListener("backbutton", onBackKeyDown, false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
//        window.addEventListener("batterystatus", onBatteryStatus, false);
//        document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);
//            document.getElementById("openBrowser").addEventListener("click", openBrowser);
            document.getElementById("videoCapture").addEventListener("click", videoCapture);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
    var localStorage = window.localStorage;

   function setLocalStorage() {
       localStorage.setItem("Name", "HEBIN");
       localStorage.setItem("Job", "BOSS");
       localStorage.setItem("Project", "Cordova");
    }

    function showLocalStorage() {
       console.log(localStorage.getItem("Name"));
       console.log(localStorage.getItem("Job"));
       console.log(localStorage.getItem("Project"));
    }

    function onBackKeyDown(e) {
           e.preventDefault();
           alert('Back Button is Pressed!');
    }

    function onBatteryStatus(info) {
        alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged);
    }

    function cameraTakePicture() {
       navigator.camera.getPicture(onSuccess, onFail, {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL
       });

       function onSuccess(imageData) {
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
       }

       function onFail(message) {
          alert('Failed because: ' + message);
       }
    }

    function openBrowser() {
       var url = 'https://baidu.com';
       var target = '_blank';
       var options = "location=yes"
       var ref = cordova.InAppBrowser.open(url, target, options);

       ref.addEventListener('loadstart', loadstartCallback);
       ref.addEventListener('loadstop', loadstopCallback);
       ref.addEventListener('loadloaderror', loaderrorCallback);
       ref.addEventListener('exit', exitCallback);

       function loadstartCallback(event) {
          console.log('Loading started: '  + event.url)
       }

       function loadstopCallback(event) {
          console.log('Loading finished: ' + event.url)
       }

       function loaderrorCallback(error) {
          console.log('Loading error: ' + error.message)
       }

       function exitCallback() {
          console.log('Browser is closed...')
       }
    }
    function videoCapture() {

       var options = {
          limit: 1,
          duration: 10
       };

       navigator.device.capture.captureVideo(onSuccess, onError, options);

       function onSuccess(mediaFiles) {
          var i, path, len;

          for (i = 0, len = mediaFiles.length; i < len; i += 1) {
             path = mediaFiles[i].fullPath;
             console.log(mediaFiles);
          }
       }

       function onError(error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
       }

    }
app.initialize();