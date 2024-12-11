
const compareName = (name, surname) => {
  return `${name} ${surname}`;
};


const getInitialNameSurname = (name, surname) =>{
const nameInitial = name[0].charAt(0).toUpperCase()
const surnameInitial = surname[0].charAt(0).toUpperCase()
return `${nameInitial}.${surnameInitial}`//return nameInitial + surnameInitial 
}

/* const getRandomColor = (color) =>{
const randomColor =`#${Math.floor(Math.random() * 2556758).toString().padStart(6,'0')}`
} */


function getRandomColors(count) {
    const colors = new Set(); // Set kullanarak benzersiz renkler üretmeyi sağlıyoruz.

    while (colors.size < count) {
        // Rastgele bir renk oluştur.
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        // colors.add(randomColor); // Rengi sete ekle (benzersizliğini garanti eder).
    }

    return Array.from(colors); // Set'i diziye çevirip döndür.
}

const randomColors = getRandomColors(100);
console.log(randomColors);




export  {compareName, getInitialNameSurname, getRandomColors}

