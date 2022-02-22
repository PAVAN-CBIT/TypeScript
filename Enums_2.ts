enum StatusCode{
    Method,
    NotFound=404,
    ok=200,
    Unauthorized
}

console.log(`method=${StatusCode.Method}`);
console.log(`Unauthorized=${StatusCode.Unauthorized}`);
