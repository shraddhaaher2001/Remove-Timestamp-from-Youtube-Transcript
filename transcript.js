let btn = document.getElementById("btn1");
let ans=document.getElementById("text2");
let copybtn=document.getElementById("btn2")

function removeTimestamps() {
    let var_text1=document.getElementById("text1").value 
    let txt=Array.from(var_text1.split("\n"))
    let arr=[]
    for (let i = 1; i < txt.length; i += 2){
        arr.push(txt[i])
    }
    // console.log(arr.join(" "));
    ans.innerHTML=arr.join(" ");
    
}
btn.addEventListener("click",removeTimestamps)

function copy(){
    navigator.clipboard.writeText(ans.value);

}

btn2.addEventListener("click",copy)
    // let lines = var_text1.split('\n');
    // for (var i = 0; i < lines.length; i++) {
    //     // Remove timestamps from the line
    //     lines[i] = lines[i].replace(/\b\d{1,2}:\d{2}(:\d{2})?\b/g, '');
    //     // Regular expression to match timestamps in the format "00:00" or "00:00:00"
    // }