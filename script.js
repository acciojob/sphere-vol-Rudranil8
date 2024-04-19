function volume_sphere() {
	// let a= document.getElementById(radius);
	// return (4/3)*(22/7)*a*a*a;
	let a = document.getElementById('radius').value;

    if (isNaN(a) || a < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }
    
    let volume = (4/3) * Math.PI * Math.pow(a, 3);
    
    document.getElementById('volume').value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
