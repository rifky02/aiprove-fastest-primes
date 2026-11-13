// run: node solution.js (reads integer N on stdin, prints count of primes <= N)
const fs=require("fs");const N=+fs.readFileSync(0,"utf8").trim();
if(N<2){console.log(0)}else{const s=new Uint8Array(N+1>>1),q=Math.sqrt(N);for(let i=3;i<=q;i+=2)if(!s[i>>1])for(let j=i*i;j<=N;j+=i<<1)s[j>>1]=1;let c=1;for(let i=3;i<=N;i+=2)if(!s[i>>1])c++;console.log(c)}
