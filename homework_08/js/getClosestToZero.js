function getClosestToZero() {
    var ClosestToZero=arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if (Math.abs(ClosestToZero) > Math.abs(arguments[i])) {
           ClosestToZero = arguments[i];
        }
    }
    return ClosestToZero;
} 