function masiv(arr, n) {
    
    for (let i=0; i<arr.length;i++){
        arr[i]=Number(arr[i]);
    }

    if (n>0) {
    for (let i=0; i<arr.length;i++){
        arr[i]=arr[i+1];
    }
    n= n-1;
}

    console.log(arr.join(''));
    
}
masiv([51,47,32,61,21], 2);
masiv([32,21,61,1], 4);
masiv([2,4,15,31], 5);
