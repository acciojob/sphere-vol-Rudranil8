function volume_sphere() {
	let a= document.getElementById(radius);
	return (4/3)*(22/7)*a*a*a;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
