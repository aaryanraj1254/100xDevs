let a=0;
function counter(){
    a++;
    let b=new Date();
    b=b.toLocaleString();
    console.log(`${a} ${b}`);
}
setInterval(counter,1000)