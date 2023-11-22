import { useState } from "react";
import Layout from "../Layout/Layout";
import MySurveys from "./MySurveys";
import MainMap from "../components/Map";
import { useGlobalContext } from "../Context/PreviewContext";
import FetchNearby from "../data/fetchNearby";
import FetchPlaceDetail from "../data/fetchPlaceDetail";
import SimpleMapPage from "../components/Clone/options_map_page";

const LandingPage = () => {
  const { inputData, setInputData, setAPIKey, api_key, setCenterCoords, centerCoords } = useGlobalContext();
  const [loading, setLoading] = useState(false);
  const [receivedKey, setRecievedKey] = useState(false);
  const [placeDetails, setPlaceDetails] = useState([]);
  const [nearbyResults, setNearbyResults] = useState();
  
  //   const { data } = useQuery({
  //     queryFn: async () => FetchCountries(),
  //     queryKey: 'countries'
  // })
  //   console.log(data)
  const validateKey = (api_key) =>{
    return (api_key === "");
  }
  const saveAPIkey = async () => {
    if (validateKey(api_key)){
      alert("Please provide an API key")
    } else {
    // alert(api_key)
    setRecievedKey(true);
    }
  }

  const centerParams = {
    center_lat: centerCoords.lat,
    center_lon: centerCoords.lon,
  };

  // const defaultSearchOptions = {
  //   radius1: inputData.radius1,
  //   radius2: inputData.radius2,
  //   center_lat: 29.40303,
  //   center_lon: 73.60256,
  //   query_string: inputData.query_string,
  //   limit: "60",
  //   api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
  // };


  const handleSearch = async () => {
    if (!isValidInput(inputData)) {
      alert("please fill all the fields");
      return;
    }
    if (Number(inputData.radius1)>Number(inputData.radius2)){
      alert("'From' has to be larger than 'To'");
      return;
    }
    try {

        setLoading(true);

      //Try commenting this so that only one 'search option' is defined. 
      const searchOptions = {
        radius1: inputData.radius1,
        radius2: inputData.radius2,
        center_lat: centerCoords.lat,
        center_lon: centerCoords.lon,
        query_string: inputData.query_string,
        limit: "60",
        api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
      };

      setNearbyResults(await FetchNearby(searchOptions));
      console.log("nearby", nearbyResults.data.place_id_list);
      if (nearbyResults.data.place_id_list.length > 0) {
        // setPlaceIds(nearbyResults.data.place_id_list);
        const placeDetailOptions = {
          place_id_list: nearbyResults.data.place_id_list,
          center_loc: "",
          api_key: "EhdQUTM2K0hNLCBOYWlyb2JpLCBLZW55YSImOiQKCg2PPDr",
        };
        const placeDetail = await FetchPlaceDetail(placeDetailOptions);
        setPlaceDetails(placeDetail.data.succesful_results);
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
    receivedKey?
    <Layout>
      <main className="w-[91%]  h-full mb-10">
        <MySurveys loading={loading} />
        {/* <MainMap/> */}
        <div className="px-4 md:px-10 mt-[40px] md:pl-[100px]">
        <div className="w-full flex"> 
          <div>
            {/* {console.log("pageDetails",nearbyResults)} */}
            {placeDetails.length>0?<MainMap centerCords = {centerParams} pins = {placeDetails}/>:<MainMap centerCords = {null} pins = {null}/>}
            {console.log("Place Details",placeDetails)}
            {console.log("search options",centerParams)}

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
              {console.log("placedetails",placeDetails)}
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
                      src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=358&photo_reference=${photo_reference}&key=AIzaSyAsH8omDk8y0lSGLTW9YtZiiQ2MkmsF-uQ`}
                      alt="image"
                      className="rounded-t-[10px] w-full h-[150px]"
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
    </Layout>:
    <div class="flex justify-center mt-60 items-center bg-white ">
        <form>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 grid-cols-12">
          <input className="pl-2  outline-none border-none text-center mx-12 w-[90%] " onChange={(e)=>setAPIKey(e.target.value)} type="text" placeholder="Enter your API key" />
          {console.log("center_coords",centerCoords.lat, centerCoords.lon)}
          <input type="submit" onClick={()=>saveAPIkey()} class="cursor-pointer text-white hover:bg-green-900 bg-green-500 px-10 py-6 rounded-xl" />
        </div>
        </form>
    </div>
  );
};

export default LandingPage;
