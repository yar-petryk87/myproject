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

