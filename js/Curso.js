
class Curso {

    constructor(id, name, price, description, year, area, img){

        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.year = year
        this.area = area
        this.img = img
        
    }


    createHtml(pos) {

        return `
        
        <div class="product">

            <div class="img-container"> 

                <img src="${this.img}" alt="Curso-img" class="course-img" onclick="seeCourseDetail(${pos})">

            <div/>

            <div class="text-container">

                <h2 class="product-name" onclick="seeCourseDetail(${pos})">${this.name}</h2>

                <p class="price" onclick="seeCourseDetail(${pos})">${this.price}</p>


            </div>

        </div>
        
        
        `

    }


}