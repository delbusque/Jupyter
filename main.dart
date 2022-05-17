main() {
  String name = 'John';
  String greeting = 'Hello World, I\'m $name !';
  num age = 29;

  print('$name is $age years old and he said: "$greeting"');

  int cost = 1;
  double tax = 0.08;

  printTax(cost);
  printTax(12, 1);
  printTax(100, tax);
}

printTax(num cost, [tax = 0.08]) {
  var sum = cost * (1 + tax);
  print('\$$sum');
}
