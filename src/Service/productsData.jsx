// NOTE : For presentation purpose, you can choose dynamically the size of the products img.

const ImgWidth = "100";

const ImgHeight = "100";

const productsData = [
  {
    systemName: "posterLoremFlickr",
    id: 0,
    img: `https://loremflickr.com/${ImgWidth}/${ImgHeight}`,
    name: "Poster Lorem Flickr",
    info: "Poster Lorem Flickr is Bacon ipsum dolor amet ball tip spare ribs pork, frankfurter meatball chislic beef ribs shoulder hamburger salami brisket tri-tip boudin chuck. ",
  },
  {
    systemName: "posterBaconMockup",
    id: 1,
    img: `https://baconmockup.com/${ImgWidth}/${ImgHeight}`,
    name: "Poster Bacon Mockup",
    info: "Poster Bacon Mockup is Bacon ipsum dolor amet ball tip spare ribs pork, frankfurter meatball chislic beef ribs shoulder hamburger salami brisket tri-tip boudin chuck. ",
  },
  {
    systemName: "placeImgTech",
    id: 2,
    img: `http://placeimg.com/${ImgWidth}/${ImgHeight}/tech`,
    name: "PlaceIMG : Tech",
    info: "PlaceIMG : Tech is Bacon ipsum dolor amet ball tip spare ribs pork, frankfurter meatball chislic beef ribs shoulder hamburger salami brisket tri-tip boudin chuck. ",
  },
  {
    systemName: "placeImgPeople",
    id: 3,
    img: `http://placeimg.com/${ImgWidth}/${ImgHeight}/people`,
    name: "PlaceIMG : People",
    info: "PlaceIMG : People is Bacon ipsum dolor amet ball tip spare ribs pork, frankfurter meatball chislic beef ribs shoulder hamburger salami brisket tri-tip boudin chuck. ",
  },
];
// NOTE : If this was link to an API we would return the function fetch with the prototype .then to convert the
// returned request to the json format using the .json method on the response.
function getProductData() {
  return productsData;
}

export default getProductData;