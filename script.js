document.querySelector('.cross').style.display='none'; /*to hide the cross bar i.e first select the class cross and make its display none.*/
document.querySelector('.hamburger').addEventListener("click",()=>{  /*logic to do what when click on hamburger icon i.e toggle*/
document.querySelector('.sidebar').classList.toggle('sidebargo');
if(document.querySelector('.sidebar').classList.contains('sidebargo')){
    document.querySelector('.ham').style.display='inline'
    document.querySelector('.cross').style.display='none'
}
    else{
        
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {   /*Set timeout for displaying cross with navbar at the same time*/
            document.querySelector('.cross').style.display='inline' 
        },300);
}

});
// ----------------For Showing Skills in about section ------------------
var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");
         function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
           document.getElementById(tabname).classList.add("active-tab");
         }