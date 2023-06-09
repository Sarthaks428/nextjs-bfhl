const express=require('express');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/bhfl', async (req, res)=>{
  try
  {const a=req.body;

  let user="sarthak_sharma_08062002";
  let mail="sarthak1315@chitkara.edu.in";

  let odd=[];
  let even=[];
  let alpha=[];
  const roll="2010991315";

  for(let i in a){
    if(a[i].charAt(0)=='0' || a[i].charAt(0)=='1' || a[i].charAt(0)=='2' || a[i].charAt(0)=='3' || a[i].charAt(0)=='4' || a[i].charAt(0)=='5' || a[i].charAt(0)=='6' || a[i].charAt(0)=='7' || a[i].charAt(0)=='8' || a[i].charAt(0)=='9'){
      const num=Number(a[i]);
      num%2==0? even.push(num.toString()):odd.push(num.toString(num));
    }
    else
    alpha.push(a[i]);

  }

  const response={
    is_success:true,
    user_id:user,
    email:mail,
    roll_number=roll,
    odd_numbers:odd,
    even_numbers:even,
    alphabets:alpha
  }

  res.send(response);
}
catch(e){
  res.send({is_success:false});
}
});

app.listen(5000);

module.exports=app;
