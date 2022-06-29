                           //case-part
                           
// document.getElementById('phone-increase').addEventListener("click", function (){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// })

// document.getElementById('phone-decrease').addEventListener("click", function () {
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-total').innerText = phoneTotal;
// })

                // phone-part

// document.getElementById('case-increase').addEventListener("click", function (){
//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;

//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById('case-total').innerText = '$' + caseTotal;});

//     document.getElementById('case-decrease').addEventListener("click", function() {
//         const caseInput = document.getElementById('case-count');
//         const caseCount = parseInt(caseInput.value);
//         const caseNewCount = caseCount - 1;

//         caseInput.value = caseNewCount;
//         caseTotal = caseNewCount * 59;
//         document.getElementById('case-total').innerText = '$' + caseTotal;
//     });

document.getElementById('phone-increase').addEventListener("click", function (){
    phoneSellingIncrease(true);
})

document.getElementById('phone-decrease').addEventListener("click", function () {
    phoneSellingIncrease(false);
})

function phoneSellingIncrease(isIncrease) {
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);
    let phoneNewCount = phoneCount;
    if(isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount > 0)  {
        phoneNewCount = phoneCount -1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = phoneTotal;
}




document.getElementById('case-increase').addEventListener("click", function (){
    caseSellingIncrease(true);
});

    document.getElementById('case-decrease').addEventListener("click", function() {
        caseSellingIncrease(false);
    });

    function caseSellingIncrease(isIncrease) {
        const caseInput = document.getElementById('case-count');
        const caseCount = parseInt(caseInput.value);
        let caseNewCount = caseCount;
        if(isIncrease == true) {
            caseNewCount = caseCount + 1;
        }
        if(isIncrease == false && caseCount > 0) {
            caseNewCount = caseCount - 1;
        }
        caseInput.value = caseNewCount;
        caseTotal = caseNewCount * 59;
        document.getElementById('case-total').innerText = '$' + caseTotal;
    }