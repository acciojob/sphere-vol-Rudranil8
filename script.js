// function volume_sphere() {
// 	// let a= document.getElementById(radius);
// 	// return (4/3)*(22/7)*a*a*a;
// 	let a = document.getElementById('radius').value;

//     if (isNaN(a) || a < 0) {
//         document.getElementById('volume').value = 'NaN';
//         return;
//     }
    
//     let volume = (4/3) * Math.PI * Math.pow(a, 3);
    
//     document.getElementById('volume').value = volume.toFixed(4);
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
function volume_sphere(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    let a = document.getElementById('radius').value;
    
    // Validate the input
    if (isNaN(a) || a < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }
    
    // Calculate the volume of the sphere
    let volume = (4/3) * Math.PI * Math.pow(a, 3);
    
    // Display the result, rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
