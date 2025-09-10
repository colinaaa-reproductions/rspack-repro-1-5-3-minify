const foo = ()=>{};

const bar = ()=>{
    const { baz } = foo();
    console.log(baz)
};

bar();
