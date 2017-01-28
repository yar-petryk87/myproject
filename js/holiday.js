
document.getElementById('mainselect').addEventListener('change' , selectCity);
function selectCity() {

    var mainSelect = document.getElementById('mainselect') ;
    var subSelectId = mainSelect.options[mainSelect.selectedIndex].value+'-subselect' ;
    var list = document.getElementsByClassName('subselect');
    var newSelect = document.getElementById(subSelectId);
    
        for (var i=0; i<list.length; i++) {
            list[i].style.display = 'none';
        };
        
    newSelect.style.display = 'inline-block' ;
};




var select = document.getElementsByTagName('select');
var i = select.length;
while(i--) {
    
    select[i].addEventListener('change' , showImage);
};

function showImage() {
    
    if(this.value!='default') {
    document.getElementById('city').src = './image/' + this.value + '.jpg';}
    else { document.getElementById('city').src = './image/choose1.jpg';}
    
};  



