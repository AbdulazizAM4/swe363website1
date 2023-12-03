art = [
    {
        text: "Seonimod, an esteemed Italian restaurant, first opened its doors in 1958 in the vibrant city of Milan, Italy. Founded by the visionary chef, Giovanni Moretti, the restaurant quickly established itself as a beloved culinary destination, captivating patrons with its authentic Italian cuisine and warm hospitality."
    },
    {
        text: "From its humble beginnings, Seonimod embodied the essence of traditional Italian dining, offering a menu brimming with classic dishes crafted with passion and expertise. The restaurant became renowned for its commitment to quality ingredients, exquisite flavors, and an inviting atmosphere that transported guests to the heart of Italy. "
    },
    {
        text: "Driven by the desire to share their culinary heritage with the world, Seonimod embarked on an exciting expansion journey. Today, the restaurant proudly boasts branches in Saudi Arabia, where it continues to delight diners with its authentic Italian offerings. "
    },
    {
        text: "Seonimod in Saudi Arabia embraces the same traditions and values that made the original restaurant in Milan a cherished institution. Guests are welcomed into a warm and inviting space, where they can savor a delightful culinary experience that pays homage to Italy's rich gastronomic culture. The menu showcases an extensive selection of traditional Italian fare, including delectable pasta dishes, mouthwatering pizzas, and tantalizing seafood creations. "
    }
]

let article = document.querySelector("article"); 
for(let para of art){
    let paragraph = document.createElement("p")
    paragraph = para.text
    article.append(paragraph)
}
let alert=document.querySelector(".alert")
let x=document.querySelector(".close")
console.log(x.innerText)
x.addEventListener("click",e=>{
    console.log(x.innerText)
    alert.setAttribute("style","display:none")
})