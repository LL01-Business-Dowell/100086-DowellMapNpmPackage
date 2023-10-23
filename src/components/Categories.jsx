import { useGlobalContext } from "../Context/PreviewContext";
import { useQuery } from "react-query";
import FetchCategories from "../data/fetchCategories";

export default function Category () {
    const {inputData,setInputData}  = useGlobalContext();

    // const {data:category_data} = useQuery({
    //     queryFn: async ()=> FetchCategories(api_key=""),
    //     queryKey: "categories"
    // })

    const data = {
        "categories": [
          "Airport",
          "Amusement Park",
          "Apartment",
          "Aquarium",
          "Art Gallery",
          "Bakery",
          "Bar",
          "Basketball Court",
          "Beach",
          "Beachvolleyball Court",
          "Bed And Breakfast",
          "Bike Path",
          "Brewery",
          "Bus Station",
          "Business",
          "Cafe",
          "Camping Ground",
          "Car Rental Agency",
          "Chambers Of Commerce",
          "Chiropractor",
          "Church",
          "Clinic",
          "Clothing Store",
          "Coffee Shop",
          "College And University",
          "Comedy Club",
          "Community Center",
          "Concert Hall",
          "Dance Studio",
          "Deli",
          "Dentist",
          "Department Store",
          "Distillery",
          "Doctor",
          "Electronics Store",
          "Farmers Market",
          "Fast Food Restaurant",
          "Ferry Terminal",
          "Food Truck",
          "Football Field",
          "Furniture Store",
          "Garden",
          "Gas Station",
          "Golf Course",
          "Government Office",
          "Grocery Store",
          "Guesthouse",
          "Gym",
          "Hiking Trail",
          "Home Improvement Store",
          "Hostel",
          "Hotel",
          "Ice Cream Shop",
          "Inn",
          "Jewelry Store",
          "Librarie",
          "Mall",
          "Martial Arts Studio",
          "Massagetherapist",
          "Mosque",
          "Motel",
          "Movie Theater",
          "Museum",
          "Music Venue",
          "Nightclub",
          "Optometrist",
          "Outlet Mall",
          "Park",
          "Parking Garage",
          "Performing Arts Center",
          "Pharmacy",
          "Professional Organizationhospital",
          "Restaurant",
          "Retreat",
          "Rv Park",
          "School",
          "Shoe Store",
          "Ski Resort",
          "Snowboarding Resort",
          "Soccer Field",
          "Spa Resort",
          "Sporting Good Store",
          "Store",
          "Synagogue",
          "Taxi Stand",
          "Tea Shop",
          "Temple",
          "Tennis Court",
          "Theater",
          "Theme Park",
          "Timeshare",
          "Tow Truck Company",
          "Trade Association",
          "Train Station",
          "Vacation Rental",
          "Water Park",
          "Wine Bar",
          "Yoga Studio",
          "Zoo"
        ]
      }
    const categories = data?.categories
    return (
        <select 
            name="category" 
            id="category"
            onChange={(e) => setInputData({...inputData, category: e.target.value})}
            className="h-[72px] block font-bold text-white w-full border-0  shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6 bg-[#FF3131] outline-none"
            autoComplete="category-name"

            >
                <option>Select Category</option>

                    {categories.map((item)=>
                        <option key={item}>{item}</option>
                    )}

        </select>
        );
}