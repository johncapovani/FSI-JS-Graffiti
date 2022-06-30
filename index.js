
// Select some elements...

//Style the page header by using the id hence the #

let header = document.querySelector('#page-header')
header.style.textAlign = "left";
header.style.color = 'green';

//Style all images using a loop on a comment trait that being the dog-image class

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px';
    dogImages[i].style.border = 'solid 4px black';
}

let footer = document.querySelector('.footer')
footer.style.color = 'blue'
footer.style.border = 'solid 2px black'
footer.style.backgroundColor = 'lightgray'
