import { useState } from "react";
import Layout from "../Layout/Layout";
import MySurveys from "./MySurveys";
import MainMap from "../components/Map";
import map from "../assets/Screenshot 2023-10-11 085143.png"
import { useGlobalContext } from "../Context/PreviewContext";
import FetchNearby from "../data/fetchNearby";
import FetchPlaceDetail from "../data/fetchPlaceDetail";

const LandingPage = () => {
  const { inputData, setInputData } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [placeIds, setPlaceIds] = useState([]);
  const [placeDetails, setPlaceDetails] = useState([]);
  //   const { data } = useQuery({
  //     queryFn: async () => FetchCountries(),
  //     queryKey: 'countries'
  // })
  //   console.log(data)
  const searchOptions = {
    radius1: inputData.radius1,
    radius2: inputData.radius2,
    center_lat: 51.50853,
    center_lon: -0.12574,
    query_string: inputData.query_string,
    limit: "60",
    api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
  };


  const handleSearch = async () => {
    if (!isValidInput(inputData)) {
      alert("please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      const searchOptions = {
        radius1: inputData.radius1,
        radius2: inputData.radius2,
        center_lat: 51.50853,
        center_lon: -0.12574,
        query_string: inputData.query_string,
        limit: "60",
        api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
      };

      const nearbyResults = await FetchNearby(searchOptions);
      console.log("nearby", nearbyResults.data.place_id_list);
      if (nearbyResults.data.place_id_list.length > 0) {
        setPlaceIds(nearbyResults.data.place_id_list);
        const placeDetailOptions = {
          place_id_list: nearbyResults.data.place_id_list,
          center_loc: "",
          api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
        };
        const placeDetail = await FetchPlaceDetail(placeDetailOptions);
        console.log("first", placeDetail.data.succesful_results);
        setPlaceDetails(placeDetail.data.succesful_results);
        console.log(placeDetail.data.succesful_results);
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setInputData((prevData) => ({
        ...prevData,
        country: "",
        city: "",
        radius1: "",
        radius2: "",
        query_string: "",
      }));
    }
  };

  const isValidInput = (inputData) => {
    // Implement your input validation logic here
    return (
      inputData.country !== "" &&
      inputData.city !== "" &&
      inputData.radius1 !== "" &&
      inputData.radius2 !== "" &&
      inputData.query_string !== ""
    );
  };

  return (
    <Layout>
      <main className="w-full h-full mb-10">
        <MySurveys loading={loading} />
        {/* <MainMap/> */}
        <div className="px-4 md:px-10 mt-[40px] md:pl-[310px]">
        <div className="w-full flex"> 
          <div>
            {console.log("pageDetails",placeDetails)}
            {placeDetails.length>0?<MainMap centerCords = {searchOptions} pins = {placeDetails}/>:null}
            <p  className="h-[390px] lg:w-[400px] xl:w-[650px] " />
          </div>
            <div className="w-[320px] ml-[25px]  ">
              <div className="w-full bg-[#7ED957] h-[270px]">
                <p className="  h-[40px] text-white px-4 text-center font-semibold text-[20px]">
                  Your Selection
                </p>
                <div className="bg-[#D2E5D1] h-[230px]">
                  <ul className="w-full h-full px-4 list-disc ml-[20px]  py-[10px]">
                    <li className="text-[16px] font-medium mt-[7px]">
                      Country - {inputData.country}
                    </li>
                    <li className="text-[16px] font-medium mt-[7px]">
                      Location - {inputData.city}
                    </li>
                    <li className="text-[16px] font-medium mt-[7px]">
                      Distance from center - between {inputData.radius1}-
                      {inputData.radius2} meters
                    </li>
                    <li className="text-[16px] font-medium mt-[7px]">
                      Category - {inputData.query_string}
                    </li>
                    <li className="text-[16px] font-medium mt-[7px]">
                      Search Limit - 500 NOS
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full text-white flex justify-between mt-[10px]">
                <button className="h-[50px] bg-[#7ED957] w-[100px]">
                  Download
                </button>
                <button className="h-[50px] bg-[#7ED957] w-[60px]">
                  Email
                </button>
                <button className="h-[50px] bg-[#7ED957] w-[80px]">
                  Refresh
                </button>
              </div>
              <button
                className="w-full text-white font-semibold bg-[#128437] h-[50px] mt-[10px]"
                onClick={handleSearch}
                disabled={loading}
              >
                {loading ? "Loading..." : "Search"}
              </button>
            </div>
          </div>

          <div className="w-full h-full px-4 bg-[#D3FFE6] mt-6 pb-6">
            <p className="text-[18px] font-bold pt-[10px]">
              {placeDetails.length} search results
            </p>
            <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-2 ">
              {placeDetails.map((product) => {
                const {
                  placeId,
                  photo_reference,
                  address,
                  website,
                  place_name,
                } = product;
                return (
                  <div
                    key={placeId}
                    className="w-[270px] md:w-[180px] lg:w-[200px] xl:w-[280px] 2xl:w-[300px] mt-[30px] h-[300px] bg-white rounded-[10px] text-black"
                  >
                    <img
                      src={photo_reference}
                      alt="image"
                      className="rounded-t-[10px]"
                    />
                    <div className="px-1">
                      <p className="font-semibold text-[18px]">{place_name}</p>
                      <p className="font-medium">{address}</p>
                      <p className="truncate">{website}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default LandingPage;
