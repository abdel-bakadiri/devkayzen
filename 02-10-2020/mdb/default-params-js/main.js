function doSomeThing(arg1) {
  let arg = arg1 || 3;
  console.log(arg);
}
doSomeThing(); // 3
doSomeThing(10); // 10
