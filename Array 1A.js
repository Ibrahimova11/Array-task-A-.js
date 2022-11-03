let[] numbers =[ 1, 2, 3, 4 ] ;
console.log("Before the loop");
for(int i = 0; i < numbers.Length; i++) //O(N)
{
    console.log(numbers[i] + [i]);
}

console.log("\n\n After the loop");
for (int i = 0; i < numbers.Length; i++) // O (N)
{
    numbers[i] = numbers[i] + 1;
    console.log(numbers[i]);
}
