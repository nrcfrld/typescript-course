import readline from 'node:readline/promises';
import Book from './models/Book.ts';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function main(){
    const items : Book[] = []

    // Terima input id, nama, dan harga buku, category buku "Fiksi" dan "Non Fiksi" 
    let isContinue = true;
    while(isContinue){
        const id = Number(await rl.question("Masukan ID Buku : "));
        const bookName = await rl.question("Masukan Nama Buku : ");
        const price = Number(await rl.question("Masukan Harga Buku : "));
        

        items.push({
            id,
            name: bookName,
            price
        })

        isContinue = (await rl.question("Apakah anda mau lanjut ? ")) == "Y"; // Menghasilkan true jika user input "Y";
    }

    console.log(items);

    rl.close();
}

main()
