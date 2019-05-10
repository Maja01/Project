var container = $("<div>").attr("id","api-container").appendTo($("#mainContainer"));


async function getSomeData() {
       try {
           var response = await fetch("http://api.giantbomb.com/search/?api_key=d74c8b8d5b0df22301976dad8d9852547d38b794&format=json&query=motor&resources=game");

           var data = await response.json();
           console.log(data);

           return data.results.map((results)=>{
               return results.image.original_url;
           });
       } catch (error) {
           console.log("error out" + error);
           return null;
       }
    }
    async function getName() {
        try {
            var response = await fetch("http://api.giantbomb.com/search/?api_key=d74c8b8d5b0df22301976dad8d9852547d38b794&format=json&query=motor&resources=game");
 
            var data = await response.json();
            console.log(data);
 
            return data.results.map((results)=>{
                return results.name;
            });
        } catch (error) {
            console.log("error out" + error);
            return null;
        }
     }
async function getApiData() {  
var getImage = await getSomeData();
var getNames = await getName();

var pageInfo = {
    image: getImage,
    name: getNames,
}
console.log(pageInfo);
return pageInfo;
    }

async function renderImages(){
    var data = await getApiData();
    for (let index = 0; index < data.image.length; index++) {
           var albumdiv = $("<div>").addClass("div-img").appendTo(container);
           var img = $("<img>").addClass("img").attr("src",data.image[index]).appendTo(albumdiv);
           var textDiv = $("<div>").addClass("div-txt").appendTo(container);      
           var albumname = $("<span>").addClass("txt").text(data.name[index]).appendTo(textDiv);  
    }
} 
renderImages();


 