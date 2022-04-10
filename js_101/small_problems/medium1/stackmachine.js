function minilang(arg) {
  let args = arg.split(' ');
  
  // initialize the register and stack
  let register = 0;
  const STACK = [];

  console.log('Running...');

  // parse arguments and run program
  for (let index = 0; index < args.length; index++) {
    const argument = args[index];

    // if arg is a number, set the register
    let num = Number(argument);
    if (!Number.isNaN(num)) {
      setRegister(num);
      continue;
    }

    // otherwise, parse as command and execute
    switch (argument) {
      case "PUSH":
        push();
        break;
      
      case "POP":
        pop();
        break;
      
      case "PRINT":
        print();
        break;
      
      case "ADD":
        add();
        break;
      
      case "SUB":
        subtract();
        break;
      
      case "MULT":
        multiply();
        break;
      
      case "DIV":
        divide();
        break;
      
      case "REMAINDER":
        remainder();
        break;
      
      default:
        console.log(`No match for command ${argument} found!`);
                          
    }
  }

  console.log('Program ended.');

  function setRegister(number) {
    register = number;
  }

  function push() {
    STACK.push(register);
  }

  function pop() {
    register = STACK.pop();
  }

  function print() {
    console.log(register);
  }

  function add() {
    register += STACK.pop();
  }

  function subtract() {
    register -= STACK.pop();
  }

  function multiply() {
    register *= STACK.pop();
  }

  function divide() {
    register = Number.parseInt(register / STACK.pop());
  }

  function remainder() {
    register = Number.parseInt(register % STACK.pop());
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)