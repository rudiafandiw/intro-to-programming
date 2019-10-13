var name = "rudi"
var age = 17
var money = 400000
var juice = 50000
var wine = 300000

if (name == "" ){
  ('maaf anda tidak boleh masuk')
} 

else if (age < 17 && money > 50000){
  console.log('juice, kembalian anda Rp.', money - juice);
}

else if (age > 16 && money >300000){
  console.log('wine, kembalian anda Rp.', money - wine);
}

else {console.log('uang tidak cukup')};
