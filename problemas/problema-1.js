num1 = Number(prompt("Ingrese un número"));
    num2 = Number(prompt("Ingrese un número"));
    
    let arr1 = new Array(num1);
    arr1.fill(num1,0,num1);
    
    let arr2 = new Array(num2);
    arr2.fill(num2,0,num2);

    console.log(arr1, arr2);
