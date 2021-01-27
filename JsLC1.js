
// Listen for submit
//document.getElementById('loan-form').addEventListener('submit',calResult);
document.getElementById('loan-form').addEventListener('submit',function(e){
 
    // Hide results
    document.getElementById('results').style.display='none';
    
    // Show loader
    document.getElementById('loading').style.display='block';
    
        setTimeout(calResult,3000);
    
        e.preventDefault();
    });
    
    
    
    // Calculate Results
    //function calResult(e){
        function calResult(){
        console.log('calculating...');
    
     // UI Vars
        const UIamount=document.getElementById('amount');
        const UIintrst=document.getElementById('interest');
        const UIyrs=document.getElementById('years');
        const UIMpay=document.getElementById('M-payment');
        const UITpay=document.getElementById('T-payment');
        const UITint=document.getElementById('T-Interest');
    
        const princpl=parseFloat(UIamount.value);
        const intrst=parseFloat(UIintrst.value)/100/12;
        const yrs=parseFloat(UIyrs.value)*12;
    
        
      // Compute monthly paymen
        const math=Math.pow(1+intrst,yrs);
        const monthly=(princpl*math*intrst)/(math-1);
    
        if(isFinite(monthly)){
            UIMpay.value=monthly.toFixed(2);
            UITpay.value=(monthly*yrs).toFixed(2);
            UITint.value=((monthly*yrs)-princpl).toFixed(2);
       // Show results
            document.getElementById('results').style.display='block';
       // Hide loader
            document.getElementById('loading').style.display='none';
        }
        else
        {
            //console.log('please check your numbers');
            showerror('please check your numbers');
        }
        //e.preventDefault();
    }
    
    
    // Show Error
    function showerror(error){
    
        // Hide results
        document.getElementById('results').style.display='none';
    
        // Hide loader
         document.getElementById('loading').style.display='none';
         
        // Create a div
        const err=document.createElement('div');
    
        // Get elements
        const card1=document.querySelector('.card');
        const head=document.querySelector('.heading');
    
        
        // Add class
        err.className='alert alert-danger';
        // Create text node and append to div
        err.appendChild(document.createTextNode(error));
        
        
        // Insert error above heading
        card1.insertBefore(err,head);
    
        //Clear error after 3 seconds
         setTimeout(clearError, 3000);
    
    }
    
    // Clear error
    function clearError(){
        document.querySelector('.alert').remove();
      }
    