
class Libro {

    constructor(id, name, price, description, author, year, editorial, img){

        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.author = author
        this.year = year
        this.editorial = editorial
        this.img = img

    }

    createHtml(pos) {

        return `
        
        <div class="product">

            <div class="img-container">  

                <img src="${this.img}" alt="Libro-img" class="img" onclick="seeBookDetail(${pos})">

            <div/>

            <div class="text-container">

                <h2 class="product-name" onclick="seeBookDetail(${pos})">${this.name}</h2>

                <p class="price" onclick="seeBookDetail(${pos})">${this.price}</p>


            </div>

        </div>
        
        `
    }

}