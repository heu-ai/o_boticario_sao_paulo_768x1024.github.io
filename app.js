// Imported Images in a Array by giving complete url
var imges = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];

var location_link = "https://www.google.com/maps/search/o+boticario"


var output = document.getElementById('output');
openfile(imges[0]);
pg1func(output);


// adding Event Listener
document.getElementById("output").addEventListener('click', function() {
                    //console.log('Click');
                    clickpattern();});


// Opening a  file
function openfile(filepath){
    output.src = filepath;
    //console.log("Current Img URL = ", output.src);
};


// click count but it refreshes again as per page loads
function APICall(n){
  // console.log(n,"no")
  var x =JSON.stringify({ key:n})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=29', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data);
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });

};

window.onload = function(){
  var x =JSON.stringify({ key:"impression"})
  fetch('https://demo.infuseads.com:8081/core/key-count/?id=29', {
    method: 'POST',
    body: x,
    headers: {
      'Content-type':  'application/json; charset=UTF-8'
    }
  }).then(function (response) {
    if (response.ok) {
      return response.json();
      // alert("Asd")
    }
    return Promise.reject(response);
  }).then(function (data) {
    console.log(data,"ddddddddddddddddddddddd");
  }).catch(function (error) {
    console.warn('Something went wrong.', error);
  });
}


function pg1func(op){
    document.getElementById("btn1").style="display:none !important; border:none;";
    document.getElementById("btn2").style="display:none !important; border:none;";
    window.setTimeout(function(){
        op.src = imges[1];
        pg2func(op);
    }, 4000);
};


function pg2func(op){
    var btn1 = document.getElementById("btn1");
    btn1.style = "position: absolute;top: 480px;left: 113px;height: 142px;background: transparent;width: 555px;border-radius: 8%;border: 1px solid transparent;";
    btn1.onclick= function(){
        APICall("page1"); 
        op.src = imges[2];
        pg3func(op);
    };

    var btn2 = document.getElementById("btn2");
    btn2.style = "position: absolute;top: 670px;left: 113px;height: 142px;background: transparent;width: 555px;border-radius: 8%;border: 1px solid transparent;";
    btn2.onclick= function(){
        APICall("page2leftkey1"); 
        op.src = imges[3];
        pg4func(op);
    };
};

function pg3func(op){
    document.getElementById("btn1").style="display:none !important; border:none;";
    document.getElementById("btn2").style="display:none !important; border:none;";
};

function pg4func(op){
    document.getElementById("btn1").style="display:none !important; border:none;";
    document.getElementById("btn2").style="display:none !important; border:none;";
};

function pg5func(op){
    document.getElementById("btn1").style="display:none !important; border:none;";
    document.getElementById("btn2").style="display:none !important; border:none;";
};

// Clicking of Images
function clickpattern(){
    var op = document.getElementById('output');

    if (op.src.search('1.png') > -1)
    {
        pg1func(op);
    }
    else if (op.src.search('3.png') > -1)
    {   
        APICall("page2leftkey2"); 
        op.src = imges[4];
    }
    else if (op.src.search('4.png') > -1)
    {   
        APICall("page2leftkey3"); 
        op.src = imges[4];
    }
    else if (op.src.search('5.png') > -1)
    {   
        APICall("page2rightkey1"); 
        window.open(location_link);
    }
};
