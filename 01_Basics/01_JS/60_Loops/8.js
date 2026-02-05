console.log("counting Numbers down from 50 but skipping 30-20   ");
for (let i = 50; i >= 1; i--) {
    if (i <= 30 && i >= 20) {
        continue;
    }
    console.log(i);
}   
