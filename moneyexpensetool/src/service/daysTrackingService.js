





export const CreateInitialDate=(day)=>{

    
    let  d=new Date(Date.now())
    let month=d.getMonth()+1;
    let year=d.getFullYear();

    if (day >= 31 || day > 28 && month == 2) {
        day = 1;
        month = month + 1;

        if (month > 12) {
            month = 1;
            year = year + 1;
        }
    }
    return `${month}-${day}-${year}`

}
export const CreateFinalDate=(initialDay)=>{
    debugger
   let arrayDate= initialDay.split("-");
   debugger
   let day=arrayDate[1];
   let month=parseInt(arrayDate[0])+1
   let year=arrayDate[2];
   debugger
   if(month>12)
   {
       month=1;
       year=year+1
   }

   return `${month}-${day}-${year}`
}



