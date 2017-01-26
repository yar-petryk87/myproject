
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







document.getElementById('london-subselect').addEventListener('change' , showImageLondon);
    function showImageLondon() {
        document.getElementById('city').src = '../image/' + this.value + '.jpg';
    };
    
document.getElementById('paris-subselect').addEventListener('change' , showImageParis);
    function showImageParis() {
        document.getElementById('city').src = '../image/' + this.value + '.jpg';
    };
    
    document.getElementById('rome-subselect').addEventListener('change' , showImageRome);
    function showImageRome() {
        document.getElementById('city').src = '../image/' + this.value + '.jpg';
    };
    
     document.getElementById('mainselect').addEventListener('change' , showImage);
    function showImage() {
        document.getElementById('city').src = '../image/' + this.value + '.jpg';
    };