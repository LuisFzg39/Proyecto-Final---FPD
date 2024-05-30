
class Juego {

    constructor(id, name, price, description, year, company, img){

        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.year = year
        this.company = company
        this.img = img

    }


    createHtml(pos) {

        return `
        
        <div class="product">

            <div class="img-container"> 

                <img src="${this.img}" alt="Juego-img" class="game-img" onclick="seeGameDetail(${pos})">

            <div/>

            <div class="text-container">

                <h2 class="product-name" onclick="seeGameDetail(${pos})">${this.name}</h2>

                <p class="price" onclick="seeGameDetail(${pos})">${this.price}</p>


            </div>

        </div>
        
        `
    }



}