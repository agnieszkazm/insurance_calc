function oplata()
{ document.getElementById("wynik").innerHTML=""; document.getElementById("komunikat1").innerHTML=""; document.getElementById("komunikat2").innerHTML=""; document.getElementById("komunikat3").innerHTML="";
 
 
var stawka = document.getElementById("pole_stawka").value;
var szkoda = document.getElementById("pole_szkoda").value.toUpperCase();
var raty = document.getElementById("pole_raty").value;

if(stawka ==""||szkoda=="") 
 {document.getElementById("komunikat2").innerHTML="Uzupełnij pola";
}
 else{
if  (stawka<100) 
  {document.getElementById("komunikat1").innerHTML="Najniższa stawka ubezpieczenia wynosi 100 PLN. Dalsze obliczenia będą wykonywane dla stawki 100 PLN.";
  var skladka=20;}
else if(stawka >=100 && stawka<=1000)
{var skladka=20; 
}
else if (stawka>=1001 && stawka<=3000){
var skladka=70; 
}   
else if (stawka>=3001 && stawka<=6000){
var skladka=130; 
}    
 else if (stawka>=6001 && stawka<=9000){
var skladka=180; 
}  
  else if (stawka>=9001 && stawka<=20000){
var skladka=200; 
  }
    else
      {document.getElementById("komunikat1").innerHTML="Podana kwota jest nieprawidłowa. W polu 'podaj stawkę ubezpieczenia' należy wpisać kwotę od 100 do 20 000 PLN.";
null.dummy;    
       }
       
  
  if (szkoda=="TAK")
  {var procent1=(skladka*0.05)*(-1);
  }
  else if (szkoda=="NIE")
  {var procent1=skladka*0.08;
  }
  else  {document.getElementById("komunikat3").innerHTML="W polu 'czy jazda była bezszkodowa' należy wpisać 'tak' lub 'nie'.";
 null.dummy;
}
  
  
  if(raty=="1")
    {var procent2=(skladka*0.02)*(-1)}
   else if(raty=="4")
    {var procent2=(skladka*0.04)}
  else if(raty=="2")
  {var procent2=0}
  
 
  document.getElementById("wynik").innerHTML="Twoja składka wynosi "+Math.ceil(skladka+procent1+procent2)+ " PLN.";
   

};
  };   