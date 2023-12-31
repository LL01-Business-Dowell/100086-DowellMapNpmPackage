import { useGlobalContext } from "../../Context/PreviewContext";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FetchCountries from "../../data/fetchCountries";

export default function CountryDropdown({ loading }) {
  const { setInputData, inputData, api_key } = useGlobalContext();
  const [allCountries, setAllCountries] = useState();
  // const { data } = useQuery({
  //     queryFn: async () => FetchCountries(""),
  //     queryKey: 'countries'
  // }, [])
  useEffect(()=>{
    async function getCountries(){
      const response = await FetchCountries(api_key);
      setAllCountries(response?.data?.data[0]?.countries)
      console.log(response?.data?.data[0]?.countries)
      
    }
    getCountries();
  },[])
  const data = {
    data: [
      {
        countries: [
          "hungary",
          "azerbaijan",
          "runion",
          "vaticancity",
          "egypt",
          "newcaledonia",
          "wallisandfutunaislands",
          "spain",
          "cuba",
          "costarica",
          "sanmarino",
          "sudan,therepublicof",
          "pakistan",
          "saba",
          "anguilla",
          "dominica",
          "ethiopia",
          "cameroon",
          "morocco",
          "niue",
          "iraq",
          "congo,democraticrepublicofthe",
          "belarus",
          "unitedstates",
          "vietnam",
          "sainthelena",
          "mayotte",
          "andorra",
          "burundi",
          "zimbabwe",
          "tajikistan",
          "yap",
          "nicaragua",
          "bonaire",
          "italy",
          "maldives",
          "sierraleone",
          "indonesia",
          "saintbarthlemy",
          "uganda",
          "croatia",
          "algeria",
          "venezuela,bolivarianrepof",
          "madagascar",
          "pitcairnislands",
          "malaysia",
          "congo",
          "chile",
          "unitedarabemirates",
          "saudiarabia",
          "burkinafaso",
          "curaao",
          "guinea",
          "laopeoplesdemrep",
          "southgeorgiaandthesouthsandwichislands",
          "nepal",
          "equatorialguinea",
          "greece",
          "benin",
          "malta",
          "kuwait",
          "swaziland",
          "paraguay",
          "switzerland",
          "gambia",
          "estonia",
          "greenland",
          "chuuk",
          "india",
          "kazakhstan",
          "tanzania,unitedrepublicof",
          "cambodia",
          "macedonia,theformeryugoslavrepof",
          "caymanislands",
          "americansamoa",
          "turkmenistan",
          "cookislands",
          "kiribati",
          "vanuatu",
          "poland",
          "bermuda",
          "uruguay",
          "slovakia",
          "norway",
          "france",
          "guineabissau",
          "jordan",
          "frenchguiana",
          "newzealand",
          "christmasisland",
          "serbia",
          "honduras",
          "togo",
          "britishvirginislands",
          "samoa",
          "antarctica",
          "latvia",
          "panama",
          "iceland",
          "monaco",
          "frenchsouthernandantarcticlands",
          "centralafricanrepublic",
          "thailand",
          "syrianarabrepublic",
          "mali",
          "iran,islamicrepof",
          "saotomeandprincipe",
          "liechtenstein",
          "gibraltar",
          "afghanistan",
          "turksandcaicosislands",
          "marshallislands",
          "philippines",
          "norfolkisland",
          "southafrica",
          "seychelles",
          "hongkong,china",
          "saintkittsandnevis",
          "srilanka",
          "guyana",
          "southsudan,therepublicof",
          "botswana",
          "sintmaarten",
          "djibouti",
          "bangladesh",
          "germany",
          "myanmar",
          "finland",
          "tunisia",
          "guam",
          "elsalvador",
          "belize",
          "bolivia",
          "aruba",
          "qatar",
          "martinique",
          "portugal",
          "guatemala",
          "kyrgyzstan",
          "somalia",
          "ecuador",
          "gabon",
          "peru",
          "mexico",
          "tuvalu",
          "oman",
          "macau,china",
          "frenchpolynesia",
          "falklandislandsmalvinas",
          "saintmartin",
          "brazil",
          "namibia",
          "romania",
          "russianfederation",
          "bruneidarussalam",
          "argentina",
          "australia",
          "uzbekistan",
          "antiguaandbarbuda",
          "israel",
          "zambia",
          "barbados",
          "grenada",
          "nigeria",
          "countries_list",
          "westernsahara",
          "puertorico",
          "bosniaandherzegovina",
          "sweden",
          "timorleste",
          "niger",
          "solomonislands",
          "pohnpei",
          "japan",
          "chad",
          "faeroeislands",
          "montenegro",
          "china",
          "lesotho",
          "westbankandgazastrip",
          "montserrat",
          "denmark",
          "fiji",
          "taiwan,china",
          "unitedkingdom",
          "suriname",
          "guadeloupe",
          "korea,republicof",
          "guernsey",
          "slovenia",
          "mongolia",
          "mauritania",
          "moldova,republicof",
          "tonga",
          "saintvincentandthegrenadines",
          "eritrea",
          "canada",
          "turkey",
          "kosrae",
          "angola",
          "virginislandsus",
          "saintpierreandmiquelon",
          "cyprus",
          "ireland",
          "haiti",
          "bulgaria",
          "bahrain",
          "nauru",
          "ctedivoire",
          "luxembourg",
          "rwanda",
          "isleofman",
          "jersey",
          "kosovo",
          "mozambique",
          "mauritius",
          "austria",
          "bahamas",
          "northernmarianaislands",
          "sinteustatius",
          "trinidadandtobago",
          "yemen",
          "papuanewguinea",
          "svalbardandjanmayen",
          "singapore",
          "cocoskeelingislands",
          "tokelau",
          "netherlands",
          "albania",
          "palau",
          "capeverde",
          "ghana",
          "libyanarabjamahiriya",
          "saintlucia",
          "armenia",
          "comoros",
          "senegal",
          "jamaica",
          "kenya",
          "czechrepublic",
          "lithuania",
          "ukraine",
          "georgia",
          "malawi",
          "colombia",
          "liberia",
          "lebanon",
          "dominicanrepublic",
          "bhutan",
          "korea,dempeoplesrepof",
          "belgium",
          "countries_list",
          "countries_list",
        ],
      },
    ],
  };
  const countries = data?.data[0]?.countries;
  return (
    <select
      disabled={loading}
      id="country"
      name="country"
      value={inputData.country}
      autoComplete="country-name"
      onChange={(e) => setInputData({ ...inputData, country: e.target.value })}
      className="block font-bold text-white w-full border-0 py-1.5 shadow-sm   sm:max-w-xs sm:text-sm sm:leading-6 bg-[#FF3131] outline-none "
    >
      <option>Select country</option>
      {allCountries?.map((item, index) => (
        <option key={index}>{item}</option>
      ))}
    </select>
  );
}

CountryDropdown.propTypes = {
  loading: PropTypes.bool.isRequired,
};
