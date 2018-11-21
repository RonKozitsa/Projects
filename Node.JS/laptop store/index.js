const file_system = require('fs');
const http = require('http'); 
const url = require('url');


const json = file_system.readFileSync(`${__dirname}/data/data.json`,'utf-8'); // if not specifing 'utf-8' we will get a buffer instead of file
const laptop_data = JSON.parse(json);

//this function will be called every time someone accesses the server
const server = http.createServer((request , response) =>{   
    
    const pathName = url.parse(request.url,true).pathname; //true means we wanna parse it to an object
    const id = url.parse(request.url,true).query.id; //returns object containing all queries
    console.log(pathName);
        
        // console.log(url.parse(request.url,true));
        //HOME PAGE
        if(pathName === '/products' || pathName === '/'){
        response.writeHead(200 , {'content-type' : 'text/html'});
            file_system.readFile(`${__dirname}/templates/template-overview.html`,'utf-8', (err,data) =>{
                let overview_output = data;
                file_system.readFile(`${__dirname}/templates/template-card.html`,'utf-8', (err,data) =>{
                    const cards = laptop_data.map(current => replaceTemplate(data,current)).join('');
                    overview_output = overview_output.replace('{%CARDS%}' , cards);
                    response.end(overview_output);
                });
            });
        }

        //LAPTOP PAGE
        else if(pathName === '/laptop' && id <= laptop_data.length && id >= 0){
        response.writeHead(200 , {'content-type' : 'text/html'});
        file_system.readFile(`${__dirname}/templates/template-laptop.html`,'utf-8', (err,data) =>{
            const laptop = laptop_data[id]; 
            const output = replaceTemplate(data,laptop);
            response.end(output);
        });
    }

        //IMAGES
        else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)){
            file_system.readFile(`${__dirname}${pathName.replace('$' ,'')}`, (err,data) =>{
                response.writeHead(200 , {'Content-type' : 'image/jpg'});
                response.end(data);
            })
        }

        //NO PAGE FOUND
        else{
        response.writeHead(404 , {'content-type' : 'text/html'});
        response.end('page not found');
    }
})

server.listen(1337, '127.0.0.1' , () => { // means look/listen to request on port 1337 from the given ip address
    console.log('im listening');
});

function replaceTemplate(HTML , laptop){
    let output = HTML.replace(/{%NAME%}/g,laptop.productName);
    output = output.replace(/{%IMG%}/g,laptop.image);
    output = output.replace(/{%PRICE%}/g,laptop.price);
    output = output.replace(/{%SCREEN%}/g,laptop.screen);
    output = output.replace(/{%STORAGE%}/g,laptop.storage);
    output = output.replace(/{%RAM%}/g,laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
    output = output.replace(/{%CPU%}/g,laptop.cpu);
    output = output.replace(/{%ID%}/g,laptop.id);
    return output;


}