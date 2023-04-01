

let name = prompt("Lütfen Kullanıcı Adınızı Giriniz") //prompt komutu ile kullanıcıdan bilgi aldık 

let myName = document.getElementById('myName'); // Id ve Classları değişlene atadık 
let myClock =document.getElementById('myClock')
let clock = document.querySelector(".clock")

myName.innerHTML = name 

const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

const d = new Date();
let day = weekday[d.getDay()];        // Gün tanımlaması yaptık


clock.innerHTML = day          // InnerHtml ile gerekli yere yolladık 

function showTime(){  
        const today = new Date()
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        m = checkTime(m);
        s = checkTime(s);
        myClock.innerHTML = `${h} :  ${m}  :  ${s}   ${day}` ;
        setTimeout(showTime, 1000);


    }


      function checkTime(i) {
      if ( i < 10 ) { i = "0" + i } ;
      return i ;
    }

      showTime()

