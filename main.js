//1
for ($n=10; $n<=20; $n++) {
    if($n!=20) document.write($n+', ');
    else document.write($n);
}
document.write('<br>');
//2
for ( $n=10; $n<=20; $n++) {
    if($n!=20) document.write(Math.pow($n, 2)+', ');
    else document.write(Math.pow($n, 2));
}
document.write('<br>');
//3
for ( $n=1; $n<=10; $n++) {
    if($n!=10) document.write(($n*7)+', ');
    else document.write(($n*7));
}
document.write('<br>');
//4
let sum=0;
for ( $n=1; $n<=15; $n++) {
    sum+=$n;
}
document.write(sum+'<br>');
//5
let prod=1;
for ( $n=15; $n<=35; $n++) {
    prod*=$n;
}
document.write(prod+'<br>');
//6
let mid=0, c=0;
for ( $n=1; $n<=500; $n++) {
    mid+=$n;
    c++;
}
mid/=c;
document.write(mid+'<br>');
//7
let sum2=0;
for ( $n=30; $n<=80; $n++) {
    if(($n%2)==0) sum2+=$n;
}
document.write(sum2+'<br>');
//8
for ($n=100; $n<=200; $n++) {
    if(($n%3)==0){
        if($n!=198) document.write($n+', ');
        else document.write($n);
    }
    
}
document.write('<br>');
//9
let $num = 50;
for ($n=1; $n<=$num; $n++) {
    if(($num%$n)==0){
        if($n!=$num) document.write($n+', ');
        else document.write($n);
    }
    
}
document.write('<br>');
//10
for ($n=1; $n<=$num; $n++) {
    if(($num%$n)==0&&($n%2)==0){
        if($n!=$num) document.write($n+', ');
        else document.write($n);
    }
}
document.write('<br>');
//11
let sum3=0;
for ($n=1; $n<=$num; $n++) {
    if(($num%$n)==0&&($n%2)==0){
        sum3+=$n;
    }
}
document.write(sum3+'<br><br>');
//12
for($n1=1; $n1<=10;$n1++){
    for ($n2=1; $n2<=10; $n2++) {
        if($n2!=10) document.write(($n1*$n2)+', ');
        else document.write(($n1*$n2));
    }
    document.write('<br>');
}

