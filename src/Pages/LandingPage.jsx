// import { Link } from "react-router-dom"
import map from "../assets/Screenshot 2023-10-11 085143.png"
import products from "../data/Product"
import Layout from "../Layout/Layout"
import MySurveys from "./MySurveys"
import FetchCountries from "../data/fetchCountries"
import { useQuery } from "react-query";
import MainMap from "../components/Map"


const LandingPage = () => {
//   const { data } = useQuery({
//     queryFn: async () => FetchCountries(),
//     queryKey: 'countries'
// })
//   console.log(data)
  return (
    <Layout>
    <main className="w-full h-full mb-10  ">
      <MySurveys />

       <div className="px-4 md:px-10 mt-[40px] md:pl-[310px]">
        <div className="map" > 
          <div>
            <MainMap/>
          </div>
          <div className="w-[320px] ml-[25px]  ">
            <div className="w-full bg-[#7ED957] h-[270px]">

            <p className="  h-[40px] text-white px-4 text-center font-semibold text-[20px]">Your Selection</p>
            <div className="bg-[#D2E5D1] h-[230px]">
              <ul className="w-full h-full px-4 list-disc ml-[20px]  py-[10px]">
                <li className="text-[16px] font-medium mt-[7px]">Country - india</li>
                <li className="text-[16px] font-medium mt-[7px]">Location - delhi</li>
                <li className="text-[16px] font-medium mt-[7px]">Distance from center - between 10-5000 meters</li>
                <li className="text-[16px] font-medium mt-[7px]">Category - Bakery</li>
                <li className="text-[16px] font-medium mt-[7px]">Search Limit - 500 NOS</li>
                <li className="text-[16px] font-medium mt-[7px]">Location - delhi</li>
              </ul>
            </div>
            </div>
            <div className="w-full text-white flex justify-between mt-[10px]">
              <button className="h-[50px] bg-[#7ED957] w-[100px]">Download</button>
              <button className="h-[50px] bg-[#7ED957] w-[60px]">Email</button>
              <button className="h-[50px] bg-[#7ED957] w-[80px]">Refresh</button>
            </div>
            <button className="w-full text-white font-semibold bg-[#128437] h-[50px] mt-[10px]">Search</button>

          </div>
        </div>

        <div className="w-full h-full px-4 bg-[#D3FFE6] mt-6 pb-6">
          <p className="text-[18px] font-bold pt-[10px]">60 search results</p>
        <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-2 ">
          {products.map((product) => {
            const {id, image, distance, describtion, name} = product;
            return (
              <div key={id} className="w-[270px] md:w-[180px] lg:w-[200px] xl:w-[280px] 2xl:w-[300px] mt-[30px] h-[300px] bg-white rounded-[10px] text-black">
                <img src={image} alt="image" className="rounded-t-[10px]" />
                <div className="px-1">
                <p className="font-semibold text-[18px]">{name}</p>
                <p className="font-medium">{distance}</p>
                <p>{describtion}</p>
                </div>


              </div>
            )
          })
          }
        </div>
        </div>

       </div>
    </main>
    </Layout>

  )
}

const containerStyles = {
  display:"flex",
  flexDirection: "row"
}

export default LandingPage
