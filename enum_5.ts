enum StatusCode{
    NotFound=404,
}

let errorcode=StatusCode[StatusCode.NotFound];
console.log(`Error Refrence:${errorcode}`);
console.log(`code:${StatusCode.NotFound}`);
