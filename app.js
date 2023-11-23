window.onload = ()=>{
    let isvalid = false;
    const input_date = document.querySelector("#date");
    const input_month = document.querySelector("#month");
    const input_year = document.querySelector("#year");
    const error = document.querySelector("#error");
    const error2 = document.querySelector("#error2");
    const error3 = document.querySelector("#error3");
    const result_btn = document.querySelector("#result-btn");
    // result
    const output_dd = document.querySelector(".r-dd");
    const output_mm = document.querySelector(".r-mm");
    const output_yy = document.querySelector(".r-yy");
    
    // add submit click event
    result_btn.addEventListener("click", calculateAge);

    // validation date month year
    
    input_date.addEventListener("input", e =>{
        if(+input_date.value > 31 ){
            error.innerHTML = "*place input valid date";
            isvalid = false;
            return;
        }
        else{
            isvalid = true;
            error.innerHTML = "";
        }
        if(+input_date.value === 0){
            isvalid = false;
            error.innerHTML = "input your date";
            isvalid = false;
            return;
        }
        else{
            error.innerHTML = "";
        }
    });
    // month
    input_month.addEventListener("input", e =>{
        if(+input_month.value > 12 ){
            error2.innerHTML = "*place input valid month";
            isvalid = false;
            return;
        }
        else{
            isvalid = true;
            error2.innerHTML = "";
        }
        if(+input_month.value === 0){
            isvalid = false;
            error2.innerHTML = "input your month";
            isvalid = false;
            return;
        }
        else{
            error2.innerHTML = "";
        }
    });
    // year

    input_year.addEventListener("input", e =>{
        if(+input_year.value > 2023 ){
            error3.innerHTML = "*place input valid year";
            isvalid = false;
            return;
        }
        else{
            isvalid = true;
            error3.innerHTML = "";
        }
        if(+input_year.value === 0){
            isvalid = false;
            error3.innerHTML = "input your year";
            isvalid = false;
            return;
        }
        else{
            error3.innerHTML = "";
        }
    });
    
   function calculateAge(){
    if(isvalid){
       let brithday =`${input_month.value}/${input_date.value}/ ${input_year.value}`;
       console.log(brithday);
       let birth_object = new Date(brithday);
       let age_deffrence = Date.now() - birth_object;
       let age_date = new Date(age_deffrence);
       let age_year = age_date.getUTCFullYear() - 1970;
       let age_month = age_date.getUTCMonth();
       let age_day = age_date.getUTCDay() -1;

       output_dd.textContent = age_day;
       output_mm.textContent = age_month;
       output_yy.textContent = age_year;
    }
    else{
      alert("কিগো কিছুইতো পুরন করলানা"); 
    }
   }    


};