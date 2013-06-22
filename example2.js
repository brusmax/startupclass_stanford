

  
var isPrimeNumber = function( number ) {
if (number == 1 || number == 2) {
return true;
}
for (var i=2;i<number;i++) {
if (number % i == 0) {
return false;
}
}
return true;
}
 
app.get('/', function(req, res){
res.send('Hello, Optimus Prime.');
});
 
app.get('/is_prime_number',
function(req, res){
var number = parseInt( req.param( 'number' ), 10 );
if (isNaN(number) || number <= 0) {
res.send(number + " is not a valid number! Try again!");
return;
}
if ( isPrimeNumber( number ) ) {
return res.send( number + ' is prime!' );
} else {
return res.send( number + " is not prime." );
}
} // end function
);
 
app.listen(3000);
console.log('Express server started on port %s', app.address().port);
