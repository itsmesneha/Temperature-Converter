const convertTemp = () => {
    const num =document.getElementById("ctemp").value;
    const choice=document.getElementById("diff_temp");
    const value=diff_temp.options[choice.selectedIndex].value;

    const c_to_f = (cel)=>{
        let fahren= Math.round((num*9/5)+32);
        return fahren;
    }
    const f_to_c = (fah)=>{
        let celcius= Math.round((num-32)*5/9);
        return celcius;
    }

    let result;
    if(value=="cel"){
        result=c_to_f(num);
        document.getElementById("Result").innerHTML=` ${result}°F`;
    }else{
        result=f_to_c(num);
        document.getElementById("Result").innerHTML=` ${result}°C`;
    }
}