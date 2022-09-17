const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi)=>{
  try{
    TheaterIXX= await promiseTheaterIXX ();
    TheaterVGC= await promiseTheaterVGC ();
    let counter= 0;
    return new Promise((resolve) => {
    counter += TheaterIXX.filter((item) =>item.hasil ==emosi).length;
    counter += TheaterVGC.filter((item) =>item.hasil ==emosi).length;
    resolve (counter);
    });
  }
  catch(error){
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};