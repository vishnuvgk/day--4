import { Component } from '@angular/core';
import { NavbarComponent } from "../../units/navbar/navbar.component";
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-districts',
    standalone: true,
    templateUrl: './districts.component.html',
    styleUrl: './districts.component.css',
    imports: [SlicePipe,RouterLink]
})
export class DistrictsComponent {
  districts: any = [
  
    {
      id:1,
      title:"Trivandrum",
      img:"https://www.keralabackwater.com/blog/wp-content/uploads/2017/04/kovalam-beach.jpg",
      description:"Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title:"Kollam",
      img:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
      description:"Kollam has been the centre of cashew industry in Kerala. Having hundreds of working cashew factories in the district, Kollam still continues to be the largest processed cashew exporter in India."
    },
    {
      id:3,
      title:"Pathanamthitta",
      img:"https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Alleppey-Kerala.jpg",
      description:"The district headquarters is noted for communal and cultural harmony. Situated near the Western Ghats and bordered by the hills, Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes."
    },
    {
      id:4,
      title:"Kottayam",
      img:"https://www.clubmahindra.com/blog/media/section_images/15kottayam-d72ed3ff1b8af6f.webp",
      description:"Most of India's natural rubber originates from the acres of well-kept plantations of Kottayam, also home to the Rubber Board. Kottayam is also called as “Akshara Nagari” which means the “city of letters” considering its contribution to print media and literature."
    },
    {
      id:5,
      title:"Eranakulam",
      img:"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/04/Fort-Kochi.jpg",
      description:"Popularly known as 'Queen of the Arabian Sea', it is a flourishing port city showcasing a rich blend of mesmerising natural beauty and vibrant culture. It is the crowning jewel of the state's tourism landscape."
    },
    {
      id:6,
      title : "Palakkad",
      description:"Palakkad is known for its rich history, beautiful temples, and stunning natural beauty. The district is home to the famous Silent Valley National Park, which is known for its diverse flora and fauna.",
        img : "https://2.bp.blogspot.com/-q0l4H9YGgxY/VuaPsWHZ-5I/AAAAAAAAGTo/L346Uq14sM4y2qoUrWrenb_xWGUgHSs0QCPcB/s1600/IMG_4497.JPG"
    
    //   title:"Wayanad",
    //   img:"https://www.savaari.com/blog/wp-content/uploads/2021/08/8.-chembra-peak-trek-1024x577.jpg",
    //   description:"This area is famous for its large amount of camping and trekking trails, breathtaking waterfalls, caves, bird watching sites, flora, fauna and an overall plethora of magnificent sights. This area has been a tourist favourite over the years."
    // 
  },
    // {
    //   id:7,
    //   title:"Kasargod",
    //   img:"https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2023/01/Hosdurg-Fort-Kasaragod-Kerala.jpg?resize=1200%2C802&ssl=1",
    //   description:"The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches."
    // },
    {
      id:8,
        title: "Malappuram",
        description:"Malappuram is known for its rich cultural heritage, beautiful mosques, and stunning natural beauty. The district is also home to the famous Kadalundi Bird Sanctuary, which is a popular destination for birdwatchers.",
        img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.hgc93AvlYvSVWm2JnkjPWgHaE3%26pid%3DApi&f=1&ipt=fa895d2a806cdcea3cc6dc371847c8b89baa95820625891da910c4162ea53b9c&ipo=images"
    },
    {
      id:9,
        title : "Palakkad",
        description:"Palakkad is known for its rich history, beautiful temples, and stunning natural beauty. The district is home to the famous Silent Valley National Park, which is known for its diverse flora and fauna.",
        img : "https://2.bp.blogspot.com/-q0l4H9YGgxY/VuaPsWHZ-5I/AAAAAAAAGTo/L346Uq14sM4y2qoUrWrenb_xWGUgHSs0QCPcB/s1600/IMG_4497.JPG"
    },
    {
      id:10,
      title: "Kozhikode",
        description:"Kozhikode, also known as Calicut, is known for its beautiful beaches, historic landmarks, and vibrant culture. The district is home to the famous Kappad Beach, which is where Portuguese explorer Vasco da Gama first landed in India. Other must-visit attractions in the district include the Beypore Beach, Kozhikode Backwaters, and the Thusharagiri Waterfalls.",
        img : "https://th.bing.com/th?id=OIP.Nd_WgZeNmdExBq3T-RKT0AHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
      id:11,
      title : "Wayanad",
      description:"Wayanad is known for its stunning natural beauty, with lush green forests, rolling hills, and beautiful waterfalls. The district is also home to a number of wildlife sanctuaries, including the Wayanad Wildlife Sanctuary, which is home to elephants, tigers, and leopards.",
        img : "https://www.ekeralatourism.net/wp-content/uploads/2018/12/things-wayanad2.jpg"
    },
    {
      id:12,
      title : "Kannur",
      description:"Kannur is known for its beautiful beaches, historic landmarks, and vibrant culture. The district is home to the famous St. Angelo Fort, which was built by the Portuguese in the 16th century. Other must-visit attractions in the district include the Payyambalam Beach, Muzhappilangad Beach, and the Parassinikkadavu Snake Park.",
        img : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficdn.images.touristlink.com%2Frepository%2FPA%2FRA%2FSS%2FIN%2FIE%2F7%2Fmuthappan-temple-parassini.jpg&f=1&nofb=1&ipt=a5199d25bf7a1705a9157b476a1b9260345863948997519187c8d2f22da36dd7&ipo=images"
    },
    {
      id:13,
      title : "Kasaragod",
      description:"Kasaragod is known for its beautiful beaches, historic landmarks, and rich cultural heritage. The district is home to the famous Bekal Fort, which is one of the largest forts in Kerala. Other must-visit attractions in the district include the Bekal Beach, Ananthapura Lake Temple, and the Chandragiri Fort.",
        img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexperiencekerala.in%2Fimage-uploads%2F1468216282.Bakel_Fort_Kasaragod.jpg&f=1&nofb=1&ipt=827d6009395edfd5194f82d81959aa893bade52a3b684b32118a265efdcf0363&ipo=images"
    },


];
}

