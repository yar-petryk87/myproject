
function showImage() {
    
    var select = document.getElementById('paris-subselect') ;
    var target = select.options[select.selectedIndex].value ;
    var image =  document.getElementById('city');
    
    switch(target) {
        
        
        case 'monmartre' : image.setAttribute('src' ,  '../image/montmartre.jpg');
            break;
        case 'louvre' :  image.setAttribute('src' ,  '../image/louvre.jpg');
            break;
        case 'eiffel-tower' :  image.setAttribute('src' ,  '../image/eiffel-tower.jpg');
            break;
     
    };
    
    
    
    
    
    
     /*  
    
    
    switch(target) {
        
        case 'paris' : image = '../image/paris.js';
            break;
        case 'london' : image = '../image/london.jpg';
            break;
        case 'rome' : image = '../image/rome.jpg';
            break;
        case 'monmartre' : image = '../image/montmartre.jpg';
            break;
        case 'louvre' : image = '../image/louvre.jpg';
            break;
        case 'eiffel-tower' : image = '../image/eiffel-tower.jpg';
            break;
        case 'colosseum' : image = '../image/colosseum.jpg';
            break;
        case 'pantheon' : image = '../image/pantheon.jpg';
            break;
        case 'st-peters-basilica' : image = '../image/st-peters-basilica.jpg';
            break;
        case 'tower-bridge' : image = '../image/tower-bridge.jpg';
            break;
        case 'big-ben' : image = '../image/big-ben.jpg';
            break;
        case 'buckingham-palace' : image = '../image/buckingham-palace.jpg';
            break;
    };
    return image;
};   
*/