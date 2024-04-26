export const sendBooking = async(data)=>{
    fetch("api/book",{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        }
    });
}