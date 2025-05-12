function el(arr1, arr2) {
    
    for (let i=0; i<arr1.length;i++){
        arr1[i]=Number(arr1[i]);
    }
    for (let i=0; i<arr2.length;i++){
        arr2[i]=Number(arr2[i]);
    }

    for(let i =0; i < arr1.length;i++)
    {if (arr1[i] === arr2[i])
        console.log(arr1[i]);
    }
    
}
el(['Hey','hello',2, 4,'Peter','e'], ['Petar','hey',10, 4,'hello','2']);
