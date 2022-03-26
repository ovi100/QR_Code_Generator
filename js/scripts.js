var form_value = document.querySelector('.qr-input');
var imageContainer = document.querySelector('.qr-code');
var qrImage = document.querySelector('.qr-code-img');

function generateQR(){
    var input_value = form_value.value;
    
    if(input_value){
        qrImage.src=`https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${input_value}`;
        imageContainer.style.display="block";
        form_value.value='';
    }else{
        alert("Please enter somethings!");
    }
    
}

function resetQR(){
    form_value.value='';
    imageContainer.style.display="none";
}
