function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	const radius = document.getElementById("radius").value
	const volume = document.getElementById("volume")
	if(radius > 0 && !isNaN(radius)){
		const v = (4/3)*Math.PI*Math.pow(Number(radius),3)
		volume.value = v.toFixed(4);
	}
	else{
		volume.value = 'NaN'
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
