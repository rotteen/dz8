var n = parseInt(prompt('Enter the position'));
function fib1(n) {
  if(n<=1){
   return n;
  }else{
    return fib1(n - 1) + fib1(n - 2); 
  }
}
var result1 = fib1(n);
document.write('func 1 result is: ' + result1);
document.write('<br>');
function fib2(n){
    var a = 1, b = 1;
    for(var i=3;i<=n;i++){
     var c = a+b;
     a=b;
     b=c;
    }
    return c;
}
var result2=fib2(n);
document.write('func 2 result is: ' + result2);
document.write('<br>');
var fib3=[1, 1];
for (var i = 2; i < n; i ++) {
   fib3[i] = fib3[i-1] + fib3[i-2];
   var result3=fib3[i];
}
document.write('func 3 result is: ' + result3);